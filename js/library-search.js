document.addEventListener("DOMContentLoaded", async () => {
    const searchBox = document.getElementById("search-box");
    const mainContent = document.getElementById("main-content");
    const searchResults = document.getElementById("search-results");

    // Fetch the data
    const response = await fetch('/library-items.json');
    const libraryItems = await response.json();

    // Initialize Fuse.js
    const fuse = new Fuse(libraryItems, {
        keys: ['title', 'content', 'link', 'tags'],
        threshold: 0.6,
        ignoreLocation: true,
        useExtendedSearch: true
    });

    // Function to process custom operators
    const processQuery = (query) => {
        const operatorMatch = query.match(/^(\w+):(.+)/); // Match "operator:value"
        if (operatorMatch) {
            const [, operator, value] = operatorMatch;
            switch (operator.toLowerCase()) {
                case 'tag':
                    return libraryItems.filter(item =>
                        item.tags.some(tag => tag.toLowerCase().includes(value.toLowerCase()))
                    );
                default:
                    console.warn(`Unknown operator: ${operator}`);
                    return [];
            }
        }
        return null; // Return null if no operator is found
    };

    // Event listener for search
    searchBox.addEventListener("input", (event) => {
        const query = event.target.value.trim();

        if (query === "") {
            searchResults.innerHTML = "";
            mainContent.style.display = "block"; // Unhide main contents
            return;
        }

        // Check for custom operators
        const customResults = processQuery(query);

        if (customResults) {
            console.log("Custom operator results:", customResults);
            mainContent.style.display = "none"; // Hide main contents
            searchResults.innerHTML = customResults.map(item => {
                const { title, url, date, content } = item;
                return `
                    <li>
                        <a href="${url}" target="_blank"><strong>${title}</strong></a>
                        <p><small>${date}</small></p>
                        <p>${content}</p>
                    </li>
                `;
            }).join("");
            return;
        }

        // Perform a regular Fuse.js search
        console.log("searching for: " + query);
        const results = fuse.search(query);
        console.log("Results: ", results);

        // Update the UI
        mainContent.style.display = "none"; // Hide main contents
        searchResults.innerHTML = results.map(result => {
            const { title, url, date, content } = result;
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
