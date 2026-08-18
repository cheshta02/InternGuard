import { useState } from "react";
import { useAuth } from "../context/AuthContext";

import ProfileOverview from "../components/profile/ProfileOverview";
import AnalysisHistory from "../components/profile/AnalysisHistory";

export default function Profile() {
  const { user } = useAuth();

  const [profilePicture, setProfilePicture] = useState(
    user?.profilePicture || ""
  );

  return (
    <main className="profile-page">
      <ProfileOverview
        user={user}
        profilePicture={profilePicture}
        onProfilePictureChange={setProfilePicture}
      />

      <AnalysisHistory />
    </main>
  );
}