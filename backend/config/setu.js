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
  };

  try {
    const response = await axios.request(options);
    cachedToken = response.data.token;
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
