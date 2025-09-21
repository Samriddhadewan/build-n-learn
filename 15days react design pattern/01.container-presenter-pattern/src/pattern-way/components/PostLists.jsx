import PostCard from "./common/PostCard"

const PostLists = ({posts}) => {
  return (
    <div className="user-posts">
         <h2>Recent Posts ({posts.length})</h2>
        {posts.length === 0 ? (
          <p>No posts yet.</p>
        ) : (
          // eslint-disable-next-line react/prop-types
          posts.map((post) => (
            // eslint-disable-next-line react/jsx-key
            <PostCard key={post.id} post={post} />
          ))
        )}

    </div>
  )
}

export default PostLists