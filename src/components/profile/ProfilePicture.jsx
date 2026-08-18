import { useRef } from "react";

export default function ProfilePicture({ src, onChange }) {
    const fileInputRef = useRef(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = () => {
            onChange(reader.result);
        };

        reader.readAsDataURL(file);
    };

    return (
        <>
            <img
                src={src || "/assets/default-profile.svg"}
                alt="Profile"
                className="profile-picture"
                onClick={() => fileInputRef.current.click()}
            />

            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                hidden
            />
        </>
    );
}