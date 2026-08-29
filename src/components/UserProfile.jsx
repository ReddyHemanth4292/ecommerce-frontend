import React, { useEffect, useState } from "react";
import { getMyProfile, updateMyProfile } from "../services/userService";

function UserProfile() {
  const [profile, setProfile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getMyProfile();
        setProfile(data);
        setFormData({
          name: data.name || "",
          phone: data.phone || "",
          address: data.address || "",
        });
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setError("");
      setMessage("");
      const updatedProfile = await updateMyProfile(formData);
      setProfile(updatedProfile);
      setMessage("Profile updated successfully.");
    } catch (error) {
      setError("error.message");
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error && !profile) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>My Profile</h2>
      {error && <p>{error}</p>}
      {message && <p>{message}</p>}
      <p>Email: {profile.email}</p>
      <p>Role: {profile.role}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <lable>Phone</lable>
          <input
            name="phone"
            type="text"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default UserProfile;
