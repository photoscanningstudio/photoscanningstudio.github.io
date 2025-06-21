// blog-rotator.js

const blogData = [
  { week: 1, title: "Preparing Your Photos for Scanning", excerpt: "Get your photos ready for scanning with these simple steps.", file: "blog/week-1.html" },
  { week: 2, title: "Color Correction vs Restoration", excerpt: "Learn the difference and when to use each.", file: "blog/week-2.html" },
  { week: 3, title: "Why 600 DPI Scanning Matters", excerpt: "Understand why resolution is key for archiving.", file: "blog/week-3.html" },
  { week: 4, title: "How We Handle Fragile Photos", excerpt: "See our process for preserving delicate memories.", file: "blog/week-4.html" },
  { week: 5, title: "Digitizing for Birthdays & Anniversaries", excerpt: "Make celebrations memorable with scanned memories.", file: "blog/week-5.html" },
  { week: 6, title: "Preserving Polaroids", excerpt: "Tips for keeping instant photos alive forever.", file: "blog/week-6.html" },
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
  recent.forEach(blog => {
    container.innerHTML += `
      <a href="${blog.file}" class="blog-card">
        <h4>Week ${blog.week} – ${blog.title}</h4>
        <p>${blog.excerpt}</p>
      </a>
    `;
  });
}

displayFeaturedBlog();
displayRecentBlogs();
