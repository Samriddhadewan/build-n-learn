import { useState } from "react";
import ErrorMessage from "../common/ErrorMessage";
import LoadingSpinner from "../common/LoadingSpinner";
import ProfileHeader from "./ProfileHeader";
import PostLists from "../post/PostLists";

// eslint-disable-next-line react/prop-types
const UserProfilePresenter = ({
  loading,
  error,
  posts,
  user,
  onRetry,
  onUpdateUser,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  // handle form data here
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // handle Cancel edit
  const handleCancelEdit = () => {
    setIsEditing(false);

    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        bio: user.bio,
      });
    }
  };

  const handleSaveProfile = async () => {
    const result = await onUpdateUser(formData);
    if (result.success) {
      setIsEditing(false);
    }
  };

  if (loading) {
    return <LoadingSpinner message={"User Data is Loading..."} />;
  }

  if (error) {
    return <ErrorMessage error={error} onRetry={onRetry} />;
  }

  return (
    <div className="user-profile">
      <ProfileHeader
        user={user}
        isEditing={isEditing}
        onStartEdit={() => setIsEditing(true)}
        formData={formData}
        onInputChange={handleInputChange}
        onCancelEdit={handleCancelEdit}
        onSaveProfile={handleSaveProfile}
      />
      <PostLists posts={posts} />
    </div>
  );
};

export default UserProfilePresenter;
