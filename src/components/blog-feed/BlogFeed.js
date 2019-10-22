import React from 'react';
import blogFeedStyles from '../blog-feed/BlogFeed.module.css'

const BlogFeed = () => {

  return (
    <>
      <div className={blogFeedStyles.bfWrapper}>
        <p className={blogFeedStyles.bfHeader}>
          Recent Blog Posts
        </p>
        <div className={blogFeedStyles.bfBody}>
          <p className={blogFeedStyles.bfPosts}> 
          </p>
          <p className={blogFeedStyles.bfPosts}> 
            A hard-coded one...
          </p>
          <p className={blogFeedStyles.bfPosts}> 
            Still nothing...
          </p>
        </div>
      </div>
    </>
  )
}

export default BlogFeed;