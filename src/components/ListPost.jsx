import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment"; // Import moment.js for date formatting



const ListPost = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [sort, setSort] = useState("-published_at");
  const [totalItems, setTotalItems] = useState(100);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  console.log(posts);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://suitmedia-backend.suitdev.com/api/ideas",
          {
            params: {
              "page[number]": page,
              "page[size]": size,
              sort: sort,
              "append[]": ["small_image", "medium_image"],
            },
          }
        );
        setPosts(response.data.data);
        setTotalPages(Math.ceil(totalItems / size));
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [sort, size, page]);

  const handleSortChange = (e) => {
    setSort(e.target.value);
    setPage(1);
  };

  const handleSizeChange = (e) => {
    setSize(Number(e.target.value));
    setPage(1);
  };

  const handlePageChange = (newPage) => setPage(newPage);

  const startPost = (page - 1) * size + 1;
  const endPost = Math.min(page * size, totalItems);

  return (
    <div className="pt-20 px-4 p-10">
      <div className="flex justify-between mb-4">
        <p>
          Showing {startPost}-{endPost} of {totalItems}
        </p>
        <div className="flex space-x-6 items-center">
          <div className="flex items-center space-x-2">
            <label htmlFor="sort-select" className="text-sm">
              Sort by
            </label>
            <select
              id="sort-select"
              onChange={handleSortChange}
              value={sort}
              className="p-2 border rounded"
            >
              <option value="-published_at">Newest</option>
              <option value="published_at">Oldest</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <label htmlFor="size-select" className="text-sm">
              Show per page
            </label>
            <select
              id="size-select"
              onChange={handleSizeChange}
              value={size}
              className="p-2 border rounded"
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </div>
        </div>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="border rounded overflow-hidden shadow-md"
            >
              <img
                src={post.small_image}
                alt={post.title}
                className="w-full h-32 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <p className="mt-2 text-sm text-gray-500">
                  {moment(post.published_at).format("MMMM Do, YYYY")}{" "}
                </p>
                <h2 className="text-lg font-bold line-clamp-3">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-gray-600">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-center mt-6">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          className="px-4 py-2 mx-1"
        >
          &lt;&lt;
        </button>
        {[...Array(totalPages).keys()].map((num) => (
          <button
            key={num + 1}
            onClick={() => handlePageChange(num + 1)}
            className={`px-4 py-2 mx-1 rounded-lg ${
              page === num + 1 ? "bg-orange-600" : "text-gray-600"
            }`}
          >
            {num + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
          className="px-4 py-2 mx-1"
        >
          &gt;&gt;
        </button>
      </div>
    </div>
  );
};

export default ListPost;
