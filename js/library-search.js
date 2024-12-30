document.addEventListener("DOMContentLoaded", async () => {
    const searchBox = document.getElementById("search-box");
    const mainContent = document.getElementById("main-content");
    const searchResults = document.getElementById("search-results");
    const defaultContent = document.getElementById("default-content");

    // Fetch the data
    const response = await fetch('/library-items.json');
    const libraryItems = await response.json();

    // Initialize Fuse.js
    const fuse = new Fuse(libraryItems, {
        keys: ['title', 'content', 'tags'],
        threshold: 0.4,
    });

    // Event listener for search
    searchBox.addEventListener("input", (event) => {
        const query = event.target.value.trim();

        if (query === "") {
            searchResults.innerHTML = "";
            defaultContent.style.display = "block";
            return;
        }

        // Perform the search
        const results = fuse.search(query);

        // Update the UI
        mainContent.style.display = "none";
        searchResults.innerHTML = results.map(result => {
            const { title, url, date, content } = result.item;
            return `
                <li>
                    <a href="${url}" target="_blank"><strong>${title}</strong></a>
                    <p><small>${date}</small></p>
                    <p>${content}</p>
                </li>
            `;
        }).join("");
    });
});
