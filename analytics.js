/* PostHog analytics: page views, heatmaps, privacy-masked session replay, and contact-click events.
   Loaded on every page. Also sends the contact-click events to Google Analytics when gtag is present.
   Skip tracking in this browser: visit any page with ?notrack=1 (undo with ?notrack=0). */
(function () {
  'use strict';
  var POSTHOG_KEY = 'phc_ykPxc7tJ3GL85AmSZDS3snAp4pnziWUpLj4yGq8K6C4Z';
  var POSTHOG_HOST = 'https://us.i.posthog.com';

  function optedOut() {
    try {
      var flag = new URLSearchParams(window.location.search).get('notrack');
      if (flag === '1') localStorage.setItem('pss_notrack', '1');
      if (flag === '0') localStorage.removeItem('pss_notrack');
      return localStorage.getItem('pss_notrack') === '1';
    } catch (_) { return false; }
  }
  var host = window.location.hostname;
  var isLive = host === 'photoscanningstudio.com' || host === 'www.photoscanningstudio.com';
  var ownerOptedOut = optedOut(); /* runs first so ?notrack=1 is remembered even before the key is set */
  var enabled = isLive && /^phc_[A-Za-z0-9_-]{20,}$/.test(POSTHOG_KEY) && !ownerOptedOut;

  if (enabled) {
    /* Official PostHog loader (docs: posthog.com/docs/libraries/js). */
    !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],Object.defineProperty(u,"toString",{configurable:!0,enumerable:!0,writable:!0,value:function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e}}),Object.defineProperty(u.people,"toString",{configurable:!0,enumerable:!0,writable:!0,value:function(){return u.toString(1)+".people (stub)"}}),o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagResult isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
    window.posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      /* Pinned: 2026-06-25+ defaults record network request bodies, which would include form contents. */
      defaults: '2026-05-30',
      person_profiles: 'identified_only',
      capture_heatmaps: true,
      respect_dnt: true,
      session_recording: {
        maskAllInputs: true,
        /* Q&A chat history can echo what a visitor typed. */
        maskTextSelector: '#pssBody, .ph-mask',
        /* Explicit false overrides the dashboard setting, so form contents sent to Formspree are never recorded. */
        recordBody: false,
        recordHeaders: false
      }
    });
  }

  /* Shared by site.js and chat-mascot.js: one event, sent to GA and PostHog.
     options.gaName keeps an older GA event name; options.beforeLeaving sends right away (page is about to change). */
  window.pssTrack = function (name, details, options) {
    options = options || {};
    if (typeof window.gtag === 'function') window.gtag('event', options.gaName || name, details);
    if (enabled && window.posthog && typeof window.posthog.capture === 'function') {
      window.posthog.capture(name, details, options.beforeLeaving ? {transport:'sendBeacon',send_instantly:true} : undefined);
    }
  };

  document.addEventListener('click', function (event) {
    var el = event.target.closest ? event.target.closest('a,button') : null;
    if (!el) return;
    var href = el.getAttribute('href') || '';
    if (href.indexOf('amzn.to/') !== -1) {
      window.pssTrack('affiliate_click', {event_category:'Affiliate',event_label:el.textContent.trim()}, {gaName:'click'});
      return;
    }
    var key = el.dataset.track || (href.indexOf('tel:') === 0 ? 'phone_link' : href.indexOf('sms:') === 0 ? 'sms_link' : href.indexOf('mailto:') === 0 ? 'email_link' : /#contact$/.test(href) ? 'quote_link' : '');
    if (!key || key === 'quote_form_submit') return;
    var name = key.indexOf('phone') === 0 ? 'phone_click' : key.indexOf('sms') === 0 ? 'sms_click' : key.indexOf('email') === 0 ? 'email_click' : 'quote_click';
    /* Text/call taps hand off to another app, so send those right away. */
    window.pssTrack(name, {event_category:name === 'quote_click' ? 'CTA' : 'Contact',event_label:key}, {beforeLeaving:name !== 'quote_click'});
  }, true);
})();
