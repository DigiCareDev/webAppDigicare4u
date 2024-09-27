import React, { useEffect, useState } from "react";
import DefaultLayout from "../../../component/Layouts/DefaultLayout";
import { useRouter } from "next/router";
import { getUserProfile } from "../../../controllers/profile";
import Profile from "../../../component/profile";

const Dashboard = () => {
  const router = useRouter();
  const [profileData, setProfileData] = useState(null); // State to hold the profile data
  const [loading, setLoading] = useState(true); // State for loading status

  const fetchProfile = async () => {
    try {
      const response = await getUserProfile()

      setProfileData(response?.data?.user); // Assuming response contains data
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Define an async function inside useEffect to handle async/await

    fetchProfile(); // Call the async function

  }, []); // Add dependencies like router and tokenDecoded
  console.log('final --------', profileData);

  return (
    <DefaultLayout
      profile={profileData}
    >
      {loading ? (
        <p>Loading profile...</p>
      ) : profileData ? (
        <>
          <Profile
            profile={profileData}

          />
        </>
      ) : (
        <p>No profile data available</p>
      )}
    </DefaultLayout>
  );
};

export default Dashboard;
