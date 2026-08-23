import { useAuth } from "../context/AuthContext";

import ProfileOverview from "../components/profile/ProfileOverview";
import AnalysisHistory from "../components/profile/AnalysisHistory";

import "../styles/profile.css";

export default function Profile() {
  const { user, updateProfilePicture } = useAuth();
  return (
    <main className="profile-page">
      <ProfileOverview
        user={user}
        profilePicture={user?.profilePicture}
        onProfilePictureChange={updateProfilePicture}
      />

      <AnalysisHistory />
    </main>
  );
}