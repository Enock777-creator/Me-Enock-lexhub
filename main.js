// Wait for the page to finish loading
document.addEventListener('DOMContentLoaded', () => {
  // Find all boxes with data-md attribute
  const boxes = document.querySelectorAll('.article-box[data-md]');
  const converter = new showdown.Converter();

  boxes.forEach(box => {
    const mdPath = box.getAttribute('data-md');

    fetch(mdPath)
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.text();
      })
      .then(markdown => {
        // Convert Markdown to HTML and inject
        box.innerHTML = converter.makeHtml(markdown);
      })
      .catch(() => {
        box.innerHTML = '<p>Unable to load article.</p>';
      });
  });
});
