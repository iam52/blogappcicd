// auth.js
// This script intercepts fetch requests and adds the Authorization header if a token exists in localStorage.

(function() {
    const originalFetch = window.fetch;

    window.fetch = function() {
        const accessToken = localStorage.getItem("access_token");
        let headers = {};

        // If arguments[1] (options object) exists and has headers, merge them
        if (arguments[1] && arguments[1].headers) {
            headers = { ...arguments[1].headers };
        }

        if (accessToken) {
            headers['Authorization'] = `Bearer ${accessToken}`;
        }

        // Create a new options object with updated headers
        const newOptions = {
            ...arguments[1], // Copy existing options
            headers: headers // Override or add headers
        };

        // Call the original fetch with the modified arguments
        return originalFetch(arguments[0], newOptions);
    };
})();
