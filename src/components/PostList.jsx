import React, { useState, useEffect } from 'react';
import { getPosts, searchPosts } from '../api/jsonPlaceholder';
import Card from './Card';
import Button from './Button';

/**
 * PostList component for displaying posts from JSONPlaceholder API
 * @returns {JSX.Element} - PostList component
 */
const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [searching, setSearching] = useState(false);
    const postsPerPage = 10;
    
    // Fetch posts when page changes
    useEffect(() => {
        const fetchData = async () => {
            if (searching) return; // Don't fetch if we're searching
            
            setLoading(true);
            setError(null);
            
            try {
                const data = await getPosts(page, postsPerPage);
                setPosts(data);
            } catch (err) {
                setError('Failed to fetch posts. Please try again later.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        
        fetchData();
    }, [page, searching]);
    
    // Handle search
    const handleSearch = async (e) => {
        e.preventDefault();
        
        if (!searchQuery.trim()) {
            setSearching(false);
            return;
        }
        
        setLoading(true);
        setError(null);
        setSearching(true);
        
        try {
            const results = await searchPosts(searchQuery);
            setPosts(results);
        } catch (err) {
            setError('Failed to search posts. Please try again later.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };
    
    // Clear search
    const clearSearch = () => {
        setSearchQuery('');
        setSearching(false);
        setPage(1); // Reset to first page
    };
    
    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                <h2 className="text-2xl font-bold mb-4 sm:mb-0">Posts from JSONPlaceholder</h2>
                
                {/* Search form */}
                <form onSubmit={handleSearch} className="w-full sm:w-auto">
                    <div className="flex">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search posts..."
                            className="px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        />
                        <Button type="submit" variant="primary" className="rounded-l-none">
                            Search
                        </Button>
                        {searching && (
                            <Button
                                onClick={clearSearch}
                                variant="secondary"
                                className="ml-2"
                            >
                                Clear
                            </Button>
                        )}
                    </div>
                </form>
            </div>
            
            {/* Loading state */}
            {loading && (
                <div className="flex justify-center items-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            )}
            
            {/* Error state */}
            {error && (
                <Card className="bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-800">
                    <div className="text-red-700 dark:text-red-200">
                        <p>{error}</p>
                    </div>
                </Card>
            )}
            
            {/* Posts list */}
            {!loading && !error && (
                <>
                    {posts.length === 0 ? (
                        <Card>
                            <p className="text-center text-gray-500 dark:text-gray-400">No posts found.</p>
                        </Card>
                    ) : (
                        <div className="grid gap-6 md:grid-cols-2">
                            {posts.map((post) => (
                                <Card key={post.id} title={post.title}>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">{post.body}</p>
                                    <div className="flex justify-end">
                                        <Button
                                            variant="secondary"
                                            size="sm"
                                            onClick={() => alert(`Post ID: ${post.id}\nUser ID: ${post.userId}`)}
                                        >
                                            View Details
                                        </Button>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    )}
                    
                    {/* Pagination */}
                    {!searching && (
                        <div className="flex justify-center mt-8 space-x-2">
                            <Button
                                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                                disabled={page === 1}
                                variant="secondary"
                            >
                                Previous
                            </Button>
                            <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded">
                Page {page}
              </span>
                            <Button
                                onClick={() => setPage((prev) => prev + 1)}
                                variant="secondary"
                            >
                                Next
                            </Button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default PostList;