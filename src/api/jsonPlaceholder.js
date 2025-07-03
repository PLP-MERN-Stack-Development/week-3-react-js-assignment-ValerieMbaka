/**
 * API service for JSONPlaceholder
 * https://jsonplaceholder.typicode.com/
 */

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

/**
 * Fetch data from JSONPlaceholder API with error handling
 * @param {string} endpoint - API endpoint
 * @param {Object} options - Fetch options
 * @returns {Promise<Object>} - API response
 */
const fetchFromAPI = async (endpoint, options = {}) => {
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
        
        if (!response.ok) {
            throw new Error(`API error: ${response.status} ${response.statusText}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('API fetch error:', error);
        throw error;
    }
};

/**
 * Get all posts with optional pagination
 * @param {number} page - Page number (1-based)
 * @param {number} limit - Number of items per page
 * @returns {Promise<Object[]>} - Array of posts
 */
export const getPosts = async (page = 1, limit = 10) => {
    const start = (page - 1) * limit;
    return fetchFromAPI(`/posts?_start=${start}&_limit=${limit}`);
};

/**
 * Get a single post by ID
 * @param {number} id - Post ID
 * @returns {Promise<Object>} - Post object
 */
export const getPostById = async (id) => {
    return fetchFromAPI(`/posts/${id}`);
};

/**
 * Get all users
 * @returns {Promise<Object[]>} - Array of users
 */
export const getUsers = async () => {
    return fetchFromAPI('/users');
};

/**
 * Get a single user by ID
 * @param {number} id - User ID
 * @returns {Promise<Object>} - User object
 */
export const getUserById = async (id) => {
    return fetchFromAPI(`/users/${id}`);
};

/**
 * Search posts by title or body
 * @param {string} query - Search query
 * @returns {Promise<Object[]>} - Array of matching posts
 */
export const searchPosts = async (query) => {
    const allPosts = await fetchFromAPI('/posts');
    const normalizedQuery = query.toLowerCase();
    
    return allPosts.filter(post =>
        post.title.toLowerCase().includes(normalizedQuery) ||
        post.body.toLowerCase().includes(normalizedQuery)
    );
};

/**
 * Get comments for a post
 * @param {number} postId - Post ID
 * @returns {Promise<Object[]>} - Array of comments
 */
export const getCommentsByPostId = async (postId) => {
    return fetchFromAPI(`/posts/${postId}/comments`);
};

export default {
    getPosts,
    getPostById,
    getUsers,
    getUserById,
    searchPosts,
    getCommentsByPostId
};