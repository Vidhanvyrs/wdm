// config/setu.js
const axios = require("axios");

let cachedToken = null;

const getSetuToken = async () => {
  if (cachedToken) return cachedToken;

  const response = await axios.post(
    "https://api.setu.co/api/v2/token",
    {},
    {
      headers: {
        "x-client-id": process.env.SETU_CLIENT_ID,
        "x-client-secret": process.env.SETU_CLIENT_SECRET,
      },
    }
  );

  cachedToken = response.data.access_token;
  return cachedToken;
};

module.exports = { getSetuToken };
