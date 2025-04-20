// const axios = require("axios");
// const { getSetuToken } = require("../config/setu");

// const createConsent = async (req, res) => {
//   const token = await getSetuToken();

//   const response = await axios.post(
//     "https://api.setu.co/aa/consents",
//     {
//       customer_id: `${req.body.customerId}@onemoney`,
//       data_life: { unit: "MONTH", value: 3 },
//       data_range: { from: "2023-01-01T00:00:00Z", to: "2025-01-01T00:00:00Z" },
//       frequency: { unit: "DAY", value: 1 },
//       fetch_type: "ONETIME",
//       fi_types: ["TRANSACTIONS"],
//     },
//     {
//       headers: { Authorization: `Bearer ${token}` },
//     }
//   );

//   res.json(response.data); // includes consent URL
// };

// module.exports = { createConsent };
const axios = require("axios");
const { getSetuToken } = require("../config/setu");

const createConsent = async (req, res) => {
  try {
    const token = await getSetuToken();

    const options = {
      method: "post",
      url: "https://fiu-sandbox.setu.co/v2/consents",
      headers: {
        Authorization: `Bearer ${token}`,
        "x-product-instance-id": process.env.SETU_PRODUCT_INSTANCE_ID,
      },
      data: {
        consentDuration: {
          unit: "MONTH",
          value: "24",
        },
        vua: `${req.body.customerId}@onemoney`,
        dataRange: {
          from: "2023-01-01T00:00:00Z",
          to: "2025-01-24T00:00:00Z",
        },
        consentTypes: ["PROFILE", "SUMMARY", "TRANSACTIONS"],
        context: [],
      },
    };

    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    console.error(
      "Consent creation error:",
      error.response?.data || error.message
    );
    res.status(500).json({
      error: "Failed to create consent",
      details: error.response?.data || error.message,
    });
  }
};

module.exports = { createConsent };
