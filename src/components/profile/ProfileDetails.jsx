export default function ProfileDetails({ user }) {
    return (
        <div className="profile-details">
            <h3>{user?.fullName || "User"}</h3>

            <p>{user?.email || "No email available"}</p>

            <p>{user?.contact || "No contact available"}</p>
        </div>
    );
}