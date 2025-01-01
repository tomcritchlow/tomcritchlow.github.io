document.addEventListener("DOMContentLoaded", async () => {
    const searchBox = document.getElementById("search-box");
    const mainContent = document.getElementById("main-content");
    const searchResults = document.getElementById("search-results");
    
    // Create the clear button
    const clearButton = document.createElement("span");
    clearButton.textContent = "X";
    clearButton.style.display = "none"; // Initially hidden
    clearButton.style.cursor = "pointer";
    clearButton.style.marginLeft = "8px";
    clearButton.style.fontWeight = "bold";
    searchBox.parentNode.appendChild(clearButton);

    // Fetch the data
    const response = await fetch('/library-items.json');
    const libraryItems = await response.json();

    // Initialize Fuse.js
    const fuse = new Fuse(libraryItems, {
        keys: ['title', 'content', 'link', 'tags'],
        threshold: 0.4,
        ignoreLocation: true,
        useExtendedSearch: true,
        ignoreFieldNorm: true,
        findAllMatches: true
    });

    // Function to process custom operators
    const processQuery = (query) => {
        const operatorMatch = query.match(/^(\w+):(.+)/); // Match "operator:value"
        if (operatorMatch) {
            const [, operator, value] = operatorMatch;
            switch (operator.toLowerCase()) {
                case 'tag':
                    return libraryItems.filter(item =>
                        Array.isArray(item.tags) && item.tags.some(tag => tag.toLowerCase().includes(value.toLowerCase()))
                    );
                case 'url': // Search by URL
                    return libraryItems.filter(item =>
                        item.link && item.link.toLowerCase().includes(value.toLowerCase())
                    );
                default:
                    console.warn(`Unknown operator: ${operator}`);
                    return [];
            }
        }
        return null; // Return null if no operator is found
    };

    // Function to perform a search
    const performSearch = (query) => {
        if (query === "") {
            searchResults.innerHTML = "";
            mainContent.style.display = "block"; // Unhide main contents
            return;
        }

        // Check for custom operators
        const customResults = processQuery(query);

        if (customResults) {
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
        const results = fuse.search(query);

        // Update the UI
        mainContent.style.display = "none"; // Hide main contents
        searchResults.innerHTML = results.map(result => {
            const { title, url, date, content } = result.item;
            return `
                <div class"bt bb bw1 b--black-10 pv2 w-100">
                <a href="${url}" target="_blank"><strong>${title}</strong></a>
                <p><small>${date}</small></p>
                <p>${content}</p>
                </div>
            `;
        }).join("");
    };

    // Update URL with the query parameter
    const updateURL = (query) => {
        const newURL = new URL(window.location);
        if (query) {
            newURL.searchParams.set('query', query);
        } else {
            newURL.searchParams.delete('query');
        }
        window.history.pushState({}, '', newURL);
    };

    // Event listener for search input
    searchBox.addEventListener("input", (event) => {
        const query = event.target.value.trim();
        updateURL(query); // Update the URL with the search term
        performSearch(query); // Perform the search
        clearButton.style.display = query ? "inline" : "none"; // Show or hide the clear button
    });

    // Event listener for clear button
    clearButton.addEventListener("click", () => {
        searchBox.value = ""; // Clear the search box
        updateURL(""); // Remove the query from the URL
        performSearch(""); // Clear the search results
        clearButton.style.display = "none"; // Hide the clear button
    });

    // Check if a query parameter is present in the URL and perform a search
    const urlParams = new URLSearchParams(window.location.search);
    const initialQuery = urlParams.get('query');
    if (initialQuery) {
        searchBox.value = initialQuery; // Populate the search box with the query
        performSearch(initialQuery); // Perform the search
        clearButton.style.display = "inline"; // Show the clear button
    }
});
