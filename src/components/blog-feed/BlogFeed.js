import React from 'react';
import blogFeedStyles from '../blog-feed/BlogFeed.module.css'

const BlogFeed = () => {
  return (
    <>
      <div className={blogFeedStyles.bfWrapper}>
        <p className={blogFeedStyles.bfHeader}>
          Recent Blog Posts
        </p>
          <p className={blogFeedStyles.bfPosts}> 
            None for now...
          </p>
      </div>
    </>
  )
}

export default BlogFeed;