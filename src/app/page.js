import React from 'react'
import Blog from './blog/page'
import SideBlog from './sideBlog/page'

function Page() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 justify-between max-w-7xl mx-auto px-4">
      <div className="w-full lg:w-[60%]">
        <Blog />
      </div>
      <div className="hidden lg:block lg:w-[30%]">
        <div className="sticky top-20 border-l pl-10 border-gray-200">
          <SideBlog />
        </div>
      </div>
    </div>
  )
}

export default Page



