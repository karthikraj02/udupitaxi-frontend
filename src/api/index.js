// Updated file to fix CSRF token fetch and refresh token URLs to use the correct backend URL instead of relative paths

const API_BASE_URL = 'https://your-backend-url.com/api'; // Replace with the actual backend URL

export const fetchCsrfToken = async () => {
    const response = await fetch(`${API_BASE_URL}/csrf-token`);
    if (!response.ok) {
        throw new Error('Failed to fetch CSRF token');
    }
    return response.json();
};

export const refreshToken = async () => {
    const response = await fetch(`${API_BASE_URL}/refresh-token`, {
        method: 'POST',
        credentials: 'include',
    });
    if (!response.ok) {
        throw new Error('Failed to refresh token');
    }
    return response.json();
};