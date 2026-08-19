import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";
import ProfilePicture from "../profile/ProfilePicture";
import ProfileDetails from "../profile/ProfileDetails";
import "../../styles/profile.css";

export default function ProfileDrawer() {
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    const [isOpen, setIsOpen] = useState(false);

    const [profilePicture, setProfilePicture] = useState(
        localStorage.getItem("profilePicture") ||
        "/assets/default-profile.svg"
    );

    const handleProfilePictureChange = (picture) => {
        setProfilePicture(picture);
        localStorage.setItem("profilePicture", picture);
    };

    const handleHistory = () => {
        setIsOpen(false);
        navigate("/profile");
    };

    const handleUpgrade = () => {
        setIsOpen(false);
        navigate("/profile");
    };

    const handleLogout = () => {
        setIsOpen(false);
        logout();
        navigate("/");
    };

    return (
        <div className="profile-drawer-container">

            <img
                src={profilePicture}
                alt="Profile"
                className="profile-button"
                onClick={() => setIsOpen(!isOpen)}
            />

            {isOpen && (
                <aside className="profile-drawer">
                    <button type="button"
                        className="profile-drawer-close"
                        onClick={() => setIsOpen(false)}
                        aria-label="Close profile" > × </button>
                    <ProfilePicture
                        src={profilePicture}
                        onChange={handleProfilePictureChange}
                    />

                    <ProfileDetails user={user} />

                    <button type="button" onClick={handleHistory}>
                        History
                    </button>

                    <button type="button" onClick={handleUpgrade}>
                        Upgrade Plan
                    </button>

                    <button type="button" onClick={handleLogout}>
                        Sign Out
                    </button>

                </aside>
            )}

        </div>
    );
}