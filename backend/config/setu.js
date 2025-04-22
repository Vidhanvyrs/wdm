// config/setu.js
const axios = require("axios");

let cachedToken = null;

const getSetuToken = async () => {
  if (cachedToken) return cachedToken;

  const options = {
    method: "post",
    url: "https://orgservice-prod.setu.co/v1/users/login",
    headers: {
      client: "bridge",
    },
    data: {
      clientID: process.env.SETU_CLIENT_ID,
      secret: process.env.SETU_CLIENT_SECRET,
      grant_type: "client_credentials",
    },
    // timeout: 2000,
  };

  try {
    const response = await axios.request(options);
    const { access_token } = response.data; // Corrected destructuring
    cachedToken = access_token;
    console.log("Setu Token:", cachedToken); // Log the token for debugging
    return cachedToken;
  } catch (error) {
    console.error(
      "Error getting Setu token:",
      error.response?.data || error.message
    );
    throw error;
  }
};

module.exports = { getSetuToken };
