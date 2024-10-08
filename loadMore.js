document.getElementById('loadMore').addEventListener('click', () => {
    import('./moreContent.js')  // Dynamically import moreContent.js when button is clicked
        .then(module => {
            module.loadMoreContent();  // Call the loadMoreContent function from moreContent.js
        })
        .catch(err => {
            console.error("Error loading more content:", err);
            alert("Failed to load more content. Please try again later.");
        });
});
