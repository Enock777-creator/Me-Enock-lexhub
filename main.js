document.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.article-box[data-md]');
  
  boxes.forEach(box => {
    const url = box.getAttribute('data-md');
    
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.text();
      })
      .then(md => {
        box.innerHTML = marked.parse(md);
      })
      .catch(err => {
        console.error('Failed to load', url, err);
        box.innerHTML = '<p>Unable to load article.</p>';
      });
  });
});
