// blog-rotator.js

const blogData = [
  { week: 1, title: "Preparing Your Photos for Scanning", excerpt: "Get your photos ready for scanning with these simple steps.", file: "blog/week-1.html" },
  { week: 2, title: "Color Correction vs Restoration", excerpt: "Learn the difference and when to use each.", file: "blog/week-2.html" },
  { week: 3, title: "Why 600 DPI Scanning Matters", excerpt: "Understand why resolution is key for archiving.", file: "blog/week-3.html" },
  { week: 4, title: "How We Handle Fragile Photos", excerpt: "See our process for preserving delicate memories.", file: "blog/week-4.html" },
  { week: 5, title: "Digitizing for Birthdays & Anniversaries", excerpt: "Make celebrations memorable with scanned memories.", file: "blog/week-5.html" },
  { week: 6, title: "Preserving Polaroids", excerpt: "Tips for keeping instant photos alive forever.", file: "blog/week-6.html" },
  { week: 7, title: "Scanning Old Family Albums", excerpt: "Tips for handling albums safely and scanning page by page.", file: "blog/week-7.html" },
{ week: 8, title: "Archiving Photos for Genealogy", excerpt: "Why scanned images are crucial for tracing family roots.", file: "blog/week-8.html" },
{ week: 9, title: "Best Cloud Storage Options", excerpt: "Compare cloud services to store and share your digitized memories.", file: "blog/week-9.html" },
{ week: 10, title: "Tips for Organizing Your Digital Files", excerpt: "Keep your scanned photos neat and accessible.", file: "blog/week-10.html" },
{ week: 11, title: "Scanning Large Format Photos", excerpt: "How to digitize oversized photos and documents safely.", file: "blog/week-11.html" },
{ week: 12, title: "Family History Projects", excerpt: "Bring stories to life with scanned photo timelines.", file: "blog/week-12.html" },
{ week: 13, title: "Understanding Photo Formats", excerpt: "Learn about JPEGs, TIFFs, PNGs, and what’s best for preservation.", file: "blog/week-13.html" },
{ week: 14, title: "Creating Digital Photo Albums", excerpt: "Use scanned photos to make lasting digital scrapbooks.", file: "blog/week-14.html" },
{ week: 15, title: "How to Label and Tag Photos", excerpt: "Keep your collection searchable and organized with proper tags.", file: "blog/week-15.html" },
{ week: 16, title: "Saving Wedding Memories", excerpt: "Digitize wedding photos for anniversaries or gifts.", file: "blog/week-16.html" },
{ week: 17, title: "Sharing with Family", excerpt: "Make scanned photos accessible to your whole family.", file: "blog/week-17.html" },
{ week: 18, title: "Tips for Scanning at Home", excerpt: "How to scan your own photos and when to go pro.", file: "blog/week-18.html" },
{ week: 19, title: "Restoring Color Faded Photos", excerpt: "Techniques and software we use to bring images back to life.", file: "blog/week-19.html" },
{ week: 20, title: "The Importance of Metadata", excerpt: "How info like dates and names add value to digital photos.", file: "blog/week-20.html" },
{ week: 21, title: "Scanning Kids’ Artwork", excerpt: "Preserve drawings and school projects digitally.", file: "blog/week-21.html" },
{ week: 22, title: "Backup Strategies for Your Archive", excerpt: "Keep your memories safe with multiple backups.", file: "blog/week-22.html" },
{ week: 23, title: "Why Polaroids Fade", excerpt: "What causes fading and how digitizing protects them.", file: "blog/week-23.html" },
{ week: 24, title: "Slide and Negative Scanning", excerpt: "Turn old film formats into clear digital files.", file: "blog/week-24.html" },
{ week: 25, title: "Digital Gift Ideas", excerpt: "Creative ways to turn scans into gifts.", file: "blog/week-25.html" },
{ week: 26, title: "What to Do with Photo CDs", excerpt: "Convert outdated discs to modern formats.", file: "blog/week-26.html" },
{ week: 27, title: "Preserving Heirloom Photos", excerpt: "Special care techniques for antique prints.", file: "blog/week-27.html" },
{ week: 28, title: "Building a Digital Family Tree", excerpt: "Incorporate photos into family tree software.", file: "blog/week-28.html" },
{ week: 29, title: "Choosing a Scanner", excerpt: "Top scanner features for home use.", file: "blog/week-29.html" },
{ week: 30, title: "Digital Privacy for Family Photos", excerpt: "Keep your shared photos private and secure.", file: "blog/week-30.html" },
{ week: 31, title: "Transferring from Old Computers", excerpt: "Move photo archives from outdated devices.", file: "blog/week-31.html" },
{ week: 32, title: "Scanning Documents with Photos", excerpt: "Digitize letters and newspaper clippings too.", file: "blog/week-32.html" },
{ week: 33, title: "Photo Scanning for School Projects", excerpt: "Tips for helping kids scan family history for class.", file: "blog/week-33.html" },
{ week: 34, title: "Backing Up to the Cloud", excerpt: "Step-by-step guide to storing your archive online.", file: "blog/week-34.html" },
{ week: 35, title: "Organizing After Scanning", excerpt: "Tips for naming, sorting, and managing large photo batches.", file: "blog/week-35.html" },
{ week: 36, title: "How to Handle Sticky Albums", excerpt: "Removing photos from magnetic or sticky albums safely.", file: "blog/week-36.html" },
{ week: 37, title: "Time Travel with Photos", excerpt: "Use digitized images to tell your family’s journey.", file: "blog/week-37.html" },
{ week: 38, title: "Using AI for Enhancing Photos", excerpt: "How modern AI tools improve old photos.", file: "blog/week-38.html" },
{ week: 39, title: "When to Use TIFF Format", excerpt: "Archival advantages of uncompressed TIFFs.", file: "blog/week-39.html" },
{ week: 40, title: "Scanning Travel Memories", excerpt: "Digitize postcards, souvenirs, and vacation photos.", file: "blog/week-40.html" },
{ week: 41, title: "Handling Photos Stuck to Glass", excerpt: "Tricks for getting them free without damage.", file: "blog/week-41.html" },
{ week: 42, title: "Colorizing Black & White Photos", excerpt: "Tools to bring vintage photos to life in color.", file: "blog/week-42.html" },
{ week: 43, title: "Creative Uses for Your Scans", excerpt: "Turn photos into calendars, books, and gifts.", file: "blog/week-43.html" },
{ week: 44, title: "The Value of Archival Prints", excerpt: "Preserve your most important scans as new prints.", file: "blog/week-44.html" },
{ week: 45, title: "Avoiding Duplicate Files", excerpt: "Stay organized while scanning large collections.", file: "blog/week-45.html" },
{ week: 46, title: "Why We Don’t Recommend Auto-Feed Scanners", excerpt: "Quality concerns and risks to old photos.", file: "blog/week-46.html" },
{ week: 47, title: "From Box to Backup", excerpt: "A full guide from receiving your photos to saving the digital files.", file: "blog/week-47.html" },
{ week: 48, title: "Thanksgiving Photo Projects", excerpt: "Use digitized family photos for your holiday gathering.", file: "blog/week-48.html" },
{ week: 49, title: "Holiday Gifting with Memories", excerpt: "Ideas for turning scans into meaningful gifts.", file: "blog/week-49.html" },
{ week: 50, title: "Family History Books", excerpt: "Combine scans and stories into hardcover keepsakes.", file: "blog/week-50.html" },
{ week: 51, title: "Digitizing Holiday Cards", excerpt: "Save your favorite cards from years past.", file: "blog/week-51.html" },
{ week: 52, title: "Reflecting on a Year of Memories", excerpt: "Wrap up your year with beautifully preserved photo highlights.", file: "blog/week-52.html" },

  // Add more entries up to week 52
];

function getCurrentWeekIndex() {
  const startDate = new Date("2025-01-01");
  const now = new Date();
  const weekNumber = Math.floor((now - startDate) / (7 * 24 * 60 * 60 * 1000));
  return weekNumber % blogData.length;
}

function displayFeaturedBlog() {
  const index = getCurrentWeekIndex();
  const blog = blogData[index];
  const container = document.getElementById("featured-blog-container");
  if (!container) return;
  container.innerHTML = `
    <div class="featured-blog-card">
      <h3>Week ${blog.week} – ${blog.title}</h3>
      <p>${blog.excerpt}</p>
      <a href="${blog.file}">Read More →</a>
    </div>
  `;
}

function displayRecentBlogs() {
  const index = getCurrentWeekIndex();
  const recent = blogData.slice(Math.max(0, index - 4), index).reverse();
  const container = document.getElementById("recent-blogs-container");
  if (!container) return;
  recent.forEach(blog => {
    container.innerHTML += `
      <a href="${blog.file}" class="blog-card">
        <h4>Week ${blog.week} – ${blog.title}</h4>
        <p>${blog.excerpt}</p>
      </a>
    `;
  });
}

document.addEventListener("DOMContentLoaded", function () {
  displayFeaturedBlog();
  displayRecentBlogs();
});