import ProfilePicture from "./ProfilePicture";

export default function ProfileOverview({
    user,
    profilePicture,
    onProfilePictureChange,
}) {
    return (
        <section className="profile-overview">
            <ProfilePicture
                src={profilePicture}
                onChange={onProfilePictureChange}
            />

            <h1>{user?.fullName || "User"}</h1>

            {user?.plan && user.plan !== "free" && (
                <span className="premium-badge">Guard+ Premium</span>
            )}

            <p>
                Current Plan: {user?.plan || "Free"}
            </p>
        </section>
    );
}