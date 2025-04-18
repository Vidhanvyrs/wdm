const axios = require("axios");
const { getSetuToken } = require("../config/setu");

const createConsent = async (req, res) => {
  const token = await getSetuToken();

  const response = await axios.post(
    "https://api.setu.co/aa/consents",
    {
      customer_id: `${req.body.customerId}@onemoney`,
      data_life: { unit: "MONTH", value: 3 },
      data_range: { from: "2023-01-01T00:00:00Z", to: "2025-01-01T00:00:00Z" },
      frequency: { unit: "DAY", value: 1 },
      fetch_type: "ONETIME",
      fi_types: ["TRANSACTIONS"],
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  res.json(response.data); // includes consent URL
};

module.exports = { createConsent };
