import axios from 'axios';
import { devURL } from "../../../contsants/endPoints";

export const getMemberProfile = async () => {
  try {
    const token = sessionStorage.getItem('token');

    // Make the request using axios
    const response = await axios.get(`${devURL}/member/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    // Check if the response contains data
    if (response.status !== 200 || !response.data) {
      console.error('Error fetching profile data:', response.data);
      throw new Error(`Failed to fetch profile data: ${response.statusText}`);
    }
    // const data = await response

    return response; // Return the profile data

  } catch (error) {
    console.error('Error fetching profile data:', error.message);
    throw new Error('Failed to fetch profile data');
  }
};


