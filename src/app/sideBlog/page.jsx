import React from 'react';

function SideBlog() {
  const blogs = [
    {
      title: 'Understanding React Hooks',
      date: 'June 9, 2025',
      image: 'https://cdn-icons-png.flaticon.com/512/2920/2920244.png',
      category: 'React',
    },
    {
      title: 'CSS Grid vs Flexbox',
      date: 'June 8, 2025',
      image: 'https://cdn-icons-png.flaticon.com/512/2920/2920244.png',
      category: 'CSS',
    },
    {
      title: 'Next.js Routing Explained',
      date: 'June 7, 2025',
      image: 'https://cdn-icons-png.flaticon.com/512/2920/2920244.png',
      category: 'Next.js',
    },
    {
      title: 'Beginner Guide to JavaScript',
      date: 'June 6, 2025',
      image: 'https://cdn-icons-png.flaticon.com/512/2920/2920244.png',
      category: 'JavaScript',
    },
    {
      title: 'C++ Memory Management',
      date: 'June 5, 2025',
      image: 'https://cdn-icons-png.flaticon.com/512/2920/2920244.png',
      category: 'C++',
    },
    {
        title: 'Understanding React Hooks',
        date: 'June 9, 2025',
        image: 'https://cdn-icons-png.flaticon.com/512/2920/2920244.png',
        category: 'React',
      },
      {
        title: 'CSS Grid vs Flexbox',
        date: 'June 8, 2025',
        image: 'https://cdn-icons-png.flaticon.com/512/2920/2920244.png',
        category: 'CSS',
      },
      {
        title: 'Next.js Routing Explained',
        date: 'June 7, 2025',
        image: 'https://cdn-icons-png.flaticon.com/512/2920/2920244.png',
        category: 'Next.js',
      },
      {
        title: 'Beginner Guide to JavaScript',
        date: 'June 6, 2025',
        image: 'https://cdn-icons-png.flaticon.com/512/2920/2920244.png',
        category: 'JavaScript',
      },
      {
        title: 'C++ Memory Management',
        date: 'June 5, 2025',
        image: 'https://cdn-icons-png.flaticon.com/512/2920/2920244.png',
        category: 'C++',
      },
  ];

  return (
    <div className="bg-white rounded-2xl mt-10 ">
      <h2 className="text-xl font-bold text-gray-700 pb-3 mb-5 ">
        Latest Posts
      </h2>

      <div className="space-y-5">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="flex items-center gap-4 hover:bg-gray-50 transition-all rounded-lg cursor-pointer p-2"
          >
            <img
              src={blog.image}
              alt="blog"
              className="w-16 h-16 rounded-xl object-cover shadow-sm"
            />
            <div>
              <h3 className="text-base font-semibold text-gray-700 leading-snug">
                {blog.title}
              </h3>
              <p className="text-xs text-gray-500 mt-1">{blog.date}</p>
              <span className="inline-block mt-1 text-[10px] px-2 py-1 bg-blue-100 text-blue-600 font-medium rounded-full">
                {blog.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBlog;
