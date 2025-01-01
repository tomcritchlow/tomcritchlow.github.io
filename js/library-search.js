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
        threshold: 0.4,
        ignoreLocation: true,
        useExtendedSearch: true,
        ignoreFieldNorm: true,
        findAllMatches: true
    });

    // Function to generate HTML for a single result item
    const generateResultHTML = (item) => {
        const { title, url, date, content, tags } = item;
        const tagsHTML = tags && tags.length > 0
            ? `<span class="tags">${tags.map(tag => `<a href="" class="f6 dib pa2 mr2 bg-light-gray newgreen b br2 link">${tag}</a>`).join(' ')}</span>`
            : ''; // Generate HTML for tags, or leave empty if there are no tags

        return `
            <div class="pv2 w-100">
                <a href="${url}"><strong>${title}</strong></a>
                <div>${content}</div>
                <div><small>${date}</small> ${tagsHTML}</div>
            </div>
        `;
    };

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

        mainContent.style.display = "none"; // Hide main contents
        if (customResults) {
            searchResults.innerHTML = customResults.map(generateResultHTML).join("");
            return;
        }

        // Perform a regular Fuse.js search
        const results = fuse.search(query);

        // Update the UI
        searchResults.innerHTML = results.map(result => generateResultHTML(result.item)).join("");
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
    });

    // Check if a query parameter is present in the URL and perform a search
    const urlParams = new URLSearchParams(window.location.search);
    const initialQuery = urlParams.get('query');
    if (initialQuery) {
        searchBox.value = initialQuery; // Populate the search box with the query
        performSearch(initialQuery); // Perform the search
    }
});
