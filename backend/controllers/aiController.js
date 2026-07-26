const { generateTravelTips } = require("../services/aiService");

const getTravelTips = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        message: "Prompt is required",
      });
    }

    const result = await generateTravelTips(prompt);

    res.status(200).json({
      result,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getTravelTips,
};