import ErrorMessage from "./common/ErrorMessage";
import LoadingSpinner from "./common/LoadingSpinner";
import PostLists from "./PostLists";
import ProfileHeader from "./ProfileHeader";

// eslint-disable-next-line react/prop-types
const UserProfilePresenter = ({ loading, error, posts, user, onRetry }) => {
  if (loading) {
    return <LoadingSpinner message={"User Data is Loading..."} />;
  }

  if (error) {
    return <ErrorMessage error={error} onRetry={onRetry} />;
  }

  return <div className="user-profile">
    <ProfileHeader />
    <PostLists posts={posts} />
  </div>;
};

export default UserProfilePresenter;
