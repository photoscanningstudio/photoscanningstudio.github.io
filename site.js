/* Homepage calculator, contact forms and existing analytics events. */
(function () {
  'use strict';
  function track(name, details) {
    if (typeof window.gtag === 'function') window.gtag('event', name, details);
  }
  function estimate(counts) {
    if (counts.some(function (n) { return !Number.isSafeInteger(n) || n < 0; })) return {error:'Please enter whole numbers of zero or more.'};
    const [photos, slides, negatives] = counts;
    if (photos + slides + negatives === 0) return {error:'Please enter at least one quantity.'};
    const rate = photos > 3000 ? 12 : photos > 2000 ? 15 : photos > 1000 ? 18 : 20;
    const subtotal = photos * rate + (slides + negatives) * 35;
    if (!Number.isSafeInteger(subtotal)) return {error:'Please contact Dan for an estimate for a collection this large.'};
    return {photos, slides, negatives, rate, subtotal, total:Math.max(5000, subtotal)};
  }
  window.PSSPricing = {estimate};
  const priceForm = document.getElementById('priceForm');
  if (priceForm) priceForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const result = document.getElementById('result');
    const values = ['photoCount','slideCount','negativeCount'].map(function (id) { return Number(document.getElementById(id).value); });
    const value = estimate(values);
    result.replaceChildren();
    if (value.error) { result.textContent = value.error; return; }
    result.textContent = 'Estimated scanning price: $' + (value.total / 100).toFixed(2);
    const details = document.createElement('span');
    details.className = 'estimate-breakdown';
    const parts = [];
    if (value.photos) parts.push(value.photos + ' photos at $' + (value.rate / 100).toFixed(2) + ' each');
    if (value.slides) parts.push(value.slides + ' slides at $0.35 each');
    if (value.negatives) parts.push(value.negatives + ' negatives at $0.35 each');
    details.textContent = parts.join(' · ') + (value.subtotal < 5000 ? '. $50 minimum applied.' : '.');
    result.appendChild(details);
    track('calculate_price', {event_category:'Calculator',event_label:'Homepage Pricing Calculator',value:Math.round(value.total / 100)});
  });
  const contact = document.getElementById('contactForm');
  if (contact) {
    let started = false;
    contact.addEventListener('input', function () {
      if (!started) { started = true; track('form_start', {event_category:'Contact',event_label:'Contact Form Started'}); }
    });
    contact.addEventListener('submit', async function (event) {
      event.preventDefault();
      const button = document.getElementById('contactSubmitBtn');
      if (button.disabled) return;
      const error = document.getElementById('contactError');
      error.hidden = true;
      button.disabled = true;
      button.textContent = 'Sending…';
      track('form_submit_attempt', {event_category:'Contact',event_label:'Contact Form Attempt'});
      try {
        const response = await fetch(contact.action, {method:'POST',body:new FormData(contact),headers:{Accept:'application/json'}});
        if (!response.ok) throw new Error('Message was not accepted');
        track('form_submission', {event_category:'Contact',event_label:'Contact Form Accepted',value:1,transport_type:'beacon'});
        window.location.href = 'thank-you.html';
      } catch (_) {
        error.hidden = false;
        button.disabled = false;
        button.textContent = 'Send My Question';
      }
    });
  }
  const signup = document.getElementById('emailListForm');
  if (signup) signup.addEventListener('submit', async function (event) {
    event.preventDefault();
    const button = document.getElementById('emailListBtn');
    if (button.disabled) return;
    const error = document.getElementById('emailListError');
    error.hidden = true;
    button.disabled = true;
    button.textContent = 'Signing up…';
    try {
      const response = await fetch(signup.action, {method:'POST',body:new FormData(signup),headers:{Accept:'application/json'}});
      if (!response.ok) throw new Error('Signup was not accepted');
      signup.hidden = true;
      const success = document.getElementById('emailListSuccess');
      success.hidden = false;
      success.focus();
      track('generate_lead', {event_category:'Email List',event_label:'Email List Signup'});
    } catch (_) {
      error.hidden = false;
      button.disabled = false;
      button.textContent = 'Get the Free Guide';
    }
  });
  document.addEventListener('click', function (event) {
    const el = event.target.closest('a,button');
    if (!el) return;
    const href = el.getAttribute('href') || '';
    if (href.includes('amzn.to/')) {
      track('click', {event_category:'Affiliate',event_label:el.textContent.trim()});
      return;
    }
    const key = el.dataset.track || (href.startsWith('tel:') ? 'phone_link' : href.startsWith('sms:') ? 'sms_link' : href.endsWith('#contact') ? 'quote_link' : '');
    if (!key || key === 'quote_form_submit') return;
    const name = key.startsWith('phone') ? 'phone_click' : key.startsWith('sms') ? 'sms_click' : key.startsWith('email') ? 'email_click' : 'quote_click';
    track(name, {event_category:name === 'quote_click' ? 'CTA' : 'Contact',event_label:key});
  });
})();
