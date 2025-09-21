import axios from "axios";
import { useEffect, useState } from "react";
import UserProfilePresenter from "./UserProfilePresenter";

// eslint-disable-next-line react/prop-types
const UserProfileContainer = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //   USE EFFECT FOR THE USER ID
  useEffect(() => {
    fetchUserData();
    fetchUserPosts();
  }, [userId]);

  //   FETCHING USER DATA
  const fetchUserData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/users/${userId}`
      );
      setUser(response.data);
    } catch (err) {
      setError("Failed to fetch user data");
    } finally {
      setLoading(false);
    }
  };

  //   fetching the user posts
  const fetchUserPosts = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/users/${userId}/posts`
      );
      setPosts(response.data);
    } catch (err) {
      console.error("Failed to fetch posts");
    }
  };

  //   Retrying to get the user data
  const handleRetry = () => {
    fetchUserData();
  };

  return (
    <UserProfilePresenter
      posts={posts}
      user={user}
      loading={loading}
      error={error}
      onRetry={handleRetry}
    />
  );
};

export default UserProfileContainer;
