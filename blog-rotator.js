// Titles and descriptions match the existing articles. Selection rotates each Monday.
const blogData = [
  {
    "week": 1,
    "title": "The Importance of Digitizing Family Photos",
    "excerpt": "Discover why digitizing your family photos is crucial for preservation, sharing, and safeguarding memories in Buffalo & WNY. Protect your history today!",
    "file": "blog/week-1.html"
  },
  {
    "week": 2,
    "title": "5 Ways to Keep Your Memories Safe From Disaster",
    "excerpt": "Protect your precious family photos from fire, flood & disaster in Buffalo, NY. Learn 5 key strategies, including digitization, backup & safe storage. Secure your WNY memories.",
    "file": "blog/week-2.html"
  },
  {
    "week": 3,
    "title": "The Best Photo Scanning Equipment for Home Use",
    "excerpt": "Considering DIY photo scanning? Explore the best scanners (flatbed, sheet-fed) for home use vs. professional services in Buffalo, NY. Make an informed choice!",
    "file": "blog/week-3.html"
  },
  {
    "week": 4,
    "title": "How to Share Your Digital Photos With Family and Friends",
    "excerpt": "You've digitized your photos in Buffalo, NY – now share the joy! Discover easy ways to share scanned photos with family near & far: Cloud, USBs, social media & more.",
    "file": "blog/week-4.html"
  },
  {
    "week": 5,
    "title": "Scanning Photos: A Step-by-Step Guide",
    "excerpt": "Learn the basic steps for scanning photos at home in Buffalo, NY. Covers preparation, scanner settings, saving & organizing. Compare DIY vs. pro scanning.",
    "file": "blog/week-5.html"
  },
  {
    "week": 6,
    "title": "The Benefits of Professional Photo Scanning Services",
    "excerpt": "Discover the advantages of using a professional photo scanning service in Buffalo, NY. Save time, get higher quality scans & enhancements. Protect your WNY memories!",
    "file": "blog/week-6.html"
  },
  {
    "week": 7,
    "title": "Why You Should Digitize Your Photos Before It's Too Late",
    "excerpt": "Don't wait for fading, damage, or loss! Learn why digitizing your family photos NOW is crucial for preservation. Protect your Buffalo, NY memories before it's too late.",
    "file": "blog/week-7.html"
  },
  {
    "week": 8,
    "title": "Creating a Digital Photo Archive: Tips and Tricks",
    "excerpt": "Go beyond scanning! Learn tips & tricks for creating a well-organized, lasting digital photo archive in Buffalo, NY. Folder structures, naming, metadata & backup.",
    "file": "blog/week-8.html"
  },
  {
    "week": 9,
    "title": "How to Preserve Your Family History Through Digitized Photos",
    "excerpt": "Digitized photos are key to preserving family history in Buffalo, NY. Learn how scans safeguard stories, connect generations & enable research. Protect your WNY legacy.",
    "file": "blog/week-9.html"
  },
  {
    "week": 10,
    "title": "The Ultimate Guide to Organizing Your Digital Photo Collection",
    "excerpt": "Tame your digital photo chaos! Your ultimate guide to organizing scanned photos in Buffalo, NY. Tips on folders, naming, tags & software for WNY families.",
    "file": "blog/week-10.html"
  },
  {
    "week": 11,
    "title": "Fixing Faded Photos: How to Restore Old Memories With Scanning",
    "excerpt": "Bring faded photos back to life! Learn how professional scanning with enhancement in Buffalo, NY helps restore color & detail to your old WNY family pictures.",
    "file": "blog/week-11.html"
  },
  {
    "week": 12,
    "title": "How to Choose the Right Resolution for Scanning Your Photos",
    "excerpt": "What DPI should you use for scanning photos in Buffalo, NY? Learn how resolution impacts quality, file size & intended use. Get the best scans for your WNY photos.",
    "file": "blog/week-12.html"
  },
  {
    "week": 13,
    "title": "Preserving Your Family History Through Digitized Photos",
    "excerpt": "Tell your family's story! Learn how digitized photos from Buffalo, NY help preserve narratives, share anecdotes & build a visual legacy for your WNY family.",
    "file": "blog/week-13.html"
  },
  {
    "week": 14,
    "title": "Scanning Photos With Your Smartphone: Is It Worth It?",
    "excerpt": "Can you scan photos with your phone? Explore the pros & cons of smartphone scanning apps vs. professional services in Buffalo, NY. Is it good enough for your WNY memories?",
    "file": "blog/week-14.html"
  },
  {
    "week": 15,
    "title": "The Art of Storytelling: Using Photos to Share Your Family History",
    "excerpt": "Go beyond dates & names! Learn the art of family storytelling using digitized photos in Buffalo, NY. Craft narratives, engage relatives & preserve your WNY legacy.",
    "file": "blog/week-15.html"
  },
  {
    "week": 16,
    "title": "How to Find and Hire a Professional Photo Scanning Service",
    "excerpt": "Choosing a photo scanning service in Buffalo, NY? Learn what questions to ask & factors to consider: quality, turnaround, pricing, handling & locality for your WNY photos.",
    "file": "blog/week-16.html"
  },
  {
    "week": 17,
    "title": "The Importance of Backing Up Your Digital Photo Collection",
    "excerpt": "Don't lose your scanned photos! Learn why backing up your digital photo archive is crucial in Buffalo, NY. Explore the 3-2-1 rule & backup options for WNY families.",
    "file": "blog/week-17.html"
  },
  {
    "week": 18,
    "title": "Why You Should Digitize Your Photos Before Moving",
    "excerpt": "Moving in Buffalo, NY? Reduce stress & risk! Learn why digitizing your family photos BEFORE you move is a smart strategy for protecting your WNY memories.",
    "file": "blog/week-18.html"
  },
  {
    "week": 19,
    "title": "Creating a Family Photo Book: A Step-by-Step Guide",
    "excerpt": "Turn your scanned photos into treasures! A step-by-step guide to creating beautiful family photo books in Buffalo, NY using your digitized WNY memories.",
    "file": "blog/week-19.html"
  },
  {
    "week": 20,
    "title": "How to Create a Digital Memorial for Loved Ones",
    "excerpt": "Honor memories digitally. Learn how to create touching digital memorials in Buffalo, NY using scanned photos & videos to celebrate the life of a loved one in WNY.",
    "file": "blog/week-20.html"
  },
  {
    "week": 21,
    "title": "Organizing Photos by Decade: Preserving a Legacy",
    "excerpt": "Create a timeline of your family's past! Learn how organizing scanned photos by decade in Buffalo, NY helps preserve your WNY legacy & makes history accessible.",
    "file": "blog/week-21.html"
  },
  {
    "week": 22,
    "title": "Photo Scanning and Restoration: Saving Family History",
    "excerpt": "Preserve & improve your WNY past! Learn how photo scanning combined with restoration techniques in Buffalo, NY can save damaged or faded family history photos.",
    "file": "blog/week-22.html"
  },
  {
    "week": 23,
    "title": "Photo Albums vs. Digital Storage: Which Is Better?",
    "excerpt": "Old photo albums vs. digital files? Compare the pros & cons for your Buffalo, NY family photos. Discover why digital storage is key for WNY photo preservation & access.",
    "file": "blog/week-23.html"
  },
  {
    "week": 24,
    "title": "Preserving Memories: The Benefits of Digitizing Photos",
    "excerpt": "Actively preserve your WNY family memories! Explore the key benefits of digitizing photos in Buffalo, NY – from protection & sharing to rediscovery & creativity.",
    "file": "blog/week-24.html"
  },
  {
    "week": 25,
    "title": "Restoring Vintage Photos: A Guide to Digital Restoration",
    "excerpt": "Give vintage photos new life! A guide to digital photo restoration services in Buffalo, NY for repairing cracks, stains & damage on your WNY heirloom pictures.",
    "file": "blog/week-25.html"
  },
  {
    "week": 26,
    "title": "Scanning and Organizing: Getting Started With Photo Preservation",
    "excerpt": "Feeling overwhelmed by photo boxes in Buffalo, NY? Learn how scanning & organizing go hand-in-hand to start your WNY photo preservation project. Simple steps!",
    "file": "blog/week-26.html"
  },
  {
    "week": 27,
    "title": "Scanning and Sharing: Connecting With Family Through Photos",
    "excerpt": "Bridge the miles in WNY & beyond! Learn how scanning family photos enables easy sharing, sparking connections & conversations with relatives near and far in Buffalo.",
    "file": "blog/week-27.html"
  },
  {
    "week": 28,
    "title": "Organizing and Protecting: Essential Steps for Photo Care",
    "excerpt": "Scanned your photos in Buffalo, NY? Don't stop there! Learn essential steps for organizing & protecting your digital photo archive for long-term safety in WNY.",
    "file": "blog/week-28.html"
  },
  {
    "week": 29,
    "title": "Protecting Family Photos: Tips for Safe Storage and Handling",
    "excerpt": "Keep original photos safe in Buffalo, NY! Learn tips for proper storage & handling of physical prints & albums before & after scanning to preserve your WNY history.",
    "file": "blog/week-29.html"
  },
  {
    "week": 30,
    "title": "Transforming Memories: Photo Scanning and Digital Storytelling",
    "excerpt": "Go beyond simple scans! Discover how photo scanning enables powerful digital storytelling in Buffalo, NY, transforming static WNY memories into engaging narratives.",
    "file": "blog/week-30.html"
  },
  {
    "week": 31,
    "title": "Digital Photo Safety: Backing Up and Archiving Memories",
    "excerpt": "Are your scanned photos truly safe? Learn essential digital photo safety tips for Buffalo, NY, focusing on backup (3-2-1 rule!) & archiving for long-term WNY memory protection.",
    "file": "blog/week-31.html"
  },
  {
    "week": 32,
    "title": "Protecting Family History: The Importance of Photo Preservation",
    "excerpt": "Your WNY family history is precious! Understand the critical importance of photo preservation (both physical & digital) for safeguarding your Buffalo, NY legacy.",
    "file": "blog/week-32.html"
  },
  {
    "week": 33,
    "title": "Preserving Family Memories: Digitizing Your Photos for the Future",
    "excerpt": "Secure your Buffalo, NY family memories for tomorrow! Discover how digitizing photos today ensures their preservation & accessibility for future generations in WNY.",
    "file": "blog/week-33.html"
  },
  {
    "week": 34,
    "title": "Digitizing Photo Albums: Tips for Easy Scanning and Storage",
    "excerpt": "Tackle those photo albums! Get tips for easily scanning & storing photos from albums in Buffalo, NY, whether DIY or using a professional WNY service.",
    "file": "blog/week-34.html"
  },
  {
    "week": 35,
    "title": "Photo Scanning for Beginners: A Simple Guide to Preservation",
    "excerpt": "New to photo scanning in Buffalo, NY? Get a simple beginner's guide to starting your WNY photo preservation project. Easy steps for digitizing your memories.",
    "file": "blog/week-35.html"
  },
  {
    "week": 36,
    "title": "Organizing and Sharing Family Photos: A Comprehensive Guide",
    "excerpt": "Master your memories! A comprehensive guide to organizing AND sharing your digitized family photos in Buffalo, NY for easy access & connection across WNY & beyond.",
    "file": "blog/week-36.html"
  },
  {
    "week": 37,
    "title": "Restoring Old Photos: Tips for Enhancing Vintage Memories",
    "excerpt": "Revive vintage photos! Learn tips for enhancing old, faded photos from Buffalo, NY using digital tools & professional scanning to improve clarity & color in WNY.",
    "file": "blog/week-37.html"
  },
  {
    "week": 38,
    "title": "Digitizing for Descendants: Preserving Family History Through Photos",
    "excerpt": "Leave a clear legacy! Learn practical tips for digitizing & organizing photos in Buffalo, NY to ensure your WNY family history is usable & understood by descendants.",
    "file": "blog/week-38.html"
  },
  {
    "week": 39,
    "title": "The Art of Digital Storytelling: Creating Narratives With Photos",
    "excerpt": "Unleash your inner storyteller! Explore the art of creating compelling narratives using scanned photos in Buffalo, NY. Techniques for visual storytelling with WNY memories.",
    "file": "blog/week-39.html"
  },
  {
    "week": 40,
    "title": "Preserving Historical Moments: Digitizing and Documenting Photos",
    "excerpt": "Capture history! Learn why digitizing & documenting photos of historical moments (personal & public) in Buffalo, NY is vital for preserving context & WNY heritage.",
    "file": "blog/week-40.html"
  },
  {
    "week": 41,
    "title": "The Role of Photo Scanning: Protecting Visual Heritage",
    "excerpt": "More than memories! Learn how photo scanning in Buffalo, NY plays a vital role in protecting personal & collective visual heritage found within WNY family collections.",
    "file": "blog/week-41.html"
  },
  {
    "week": 42,
    "title": "Digitizing Family Photos: The Ultimate Guide to Archiving",
    "excerpt": "Go beyond the scan! The ultimate guide to archiving your digitized family photos in Buffalo, NY – organization, formats, metadata & backups for your WNY legacy.",
    "file": "blog/week-42.html"
  },
  {
    "week": 43,
    "title": "From Album to Cloud: The Journey of Photo Digitization",
    "excerpt": "Embark on the memory journey! Follow the path of photo digitization, from dusty albums in Buffalo, NY to secure, shareable cloud storage for your WNY photos.",
    "file": "blog/week-43.html"
  },
  {
    "week": 44,
    "title": "The Impact of Digitization: Preserving Photographic History",
    "excerpt": "Unlock the past! Explore the significant impact of photo digitization in Buffalo, NY for preserving & accessing personal and collective photographic history in WNY.",
    "file": "blog/week-44.html"
  },
  {
    "week": 45,
    "title": "The Preservation Project: Photo Scanning and Legacy Building",
    "excerpt": "It's more than scanning – it's legacy building! Frame your photo digitization in Buffalo, NY as a meaningful Preservation Project to create a lasting WNY family legacy.",
    "file": "blog/week-45.html"
  },
  {
    "week": 46,
    "title": "The Digital Era: Transforming Family History Through Photos",
    "excerpt": "Welcome to the future of family history! Discover how the digital era & photo scanning are transforming genealogy & memory preservation in Buffalo, NY & beyond for WNY families.",
    "file": "blog/week-46.html"
  },
  {
    "week": 47,
    "title": "The Emotional Value of Photos: Preserving Memories With Care",
    "excerpt": "They're more than paper! Understand the deep emotional value of photos & why preserving these WNY memories requires care, from handling to professional scanning in Buffalo, NY.",
    "file": "blog/week-47.html"
  },
  {
    "week": 48,
    "title": "How to Digitally Restore Damaged Photos",
    "excerpt": "Learn how digital restoration can breathe new life into your damaged family photos. Discover tools and tips to bring memories back.",
    "file": "blog/week-48.html"
  },
  {
    "week": 49,
    "title": "Choosing the Right File Format for Archiving",
    "excerpt": "Discover the best file formats for long-term photo archiving. Understand JPEG vs. TIFF and what's right for your family photos.",
    "file": "blog/week-49.html"
  },
  {
    "week": 50,
    "title": "Creating a Yearly Photo Preservation Checklist",
    "excerpt": "Make photo preservation part of your yearly routine. Follow our checklist to keep your memories safe, organized, and up-to-date.",
    "file": "blog/week-50.html"
  },
  {
    "week": 51,
    "title": "How to Create a Photo Legacy for Future Generations",
    "excerpt": "Build a family photo legacy that future generations will treasure. Learn how to organize, digitize, and share your story.",
    "file": "blog/week-51.html"
  },
  {
    "week": 52,
    "title": "Building Your Family Archive: Wrapping Up the Year",
    "excerpt": "Wrap up your photo preservation journey with a plan. Learn how to finalize, back up, and celebrate your family archive.",
    "file": "blog/week-52.html"
  }
];

function getCurrentWeekIndex(now = new Date()) {
  const day = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  const weeks = Math.floor((day - Date.UTC(2025, 0, 6)) / 604800000);
  return ((weeks % blogData.length) + blogData.length) % blogData.length;
}
function blogCard(entry, featured) {
  const card = document.createElement('article');
  card.className = featured ? 'featured-blog-card' : 'blog-card';
  const heading = document.createElement('h3');
  const link = document.createElement('a');
  link.href = entry.file;
  link.textContent = entry.title;
  heading.appendChild(link);
  card.appendChild(heading);
  if (featured) {
    const summary = document.createElement('p');
    summary.textContent = entry.excerpt;
    card.appendChild(summary);
  }
  return card;
}
document.addEventListener('DOMContentLoaded', function () {
  const index = getCurrentWeekIndex();
  const featured = document.getElementById('featured-blog-container');
  if (featured) featured.replaceChildren(blogCard(blogData[index], true));
  const recent = document.getElementById('recent-blogs-container');
  if (recent) {
    recent.replaceChildren();
    for (let offset = 1; offset <= 2; offset++) {
      recent.appendChild(blogCard(blogData[(index - offset + blogData.length) % blogData.length], false));
    }
  }
});
