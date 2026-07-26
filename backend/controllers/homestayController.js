const Homestay = require("../models/Homestay");

// =======================
// GET ALL HOMESTAYS
// =======================
const getHomestays = async (req, res) => {
  try {
    const { location, category, minPrice, maxPrice } = req.query;

    let filter = {};

    // Search by location
    if (location) {
      filter.location = {
        $regex: location,
        $options: "i",
      };
    }

    // Filter by category
    if (category) {
      filter.category = category;
    }

    // Filter by price
    if (minPrice || maxPrice) {
      filter.price = {};

      if (minPrice) {
        filter.price.$gte = Number(minPrice);
      }

      if (maxPrice) {
        filter.price.$lte = Number(maxPrice);
      }
    }

    const homestays = await Homestay.find(filter);

    res.status(200).json(homestays);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =======================
// GET SINGLE HOMESTAY
// =======================
const getHomestayById = async (req, res) => {
  try {
    const homestay = await Homestay.findById(req.params.id);

    if (!homestay) {
      return res.status(404).json({
        success: false,
        message: "Homestay not found",
      });
    }

    res.status(200).json(homestay);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =======================
// CREATE HOMESTAY
// =======================
const createHomestay = async (req, res) => {
  try {
    const homestay = await Homestay.create(req.body);

    res.status(201).json(homestay);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// =======================
// UPDATE HOMESTAY
// =======================
const updateHomestay = async (req, res) => {
  try {
    const homestay = await Homestay.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        returnDocument: "after",
        runValidators: true,
      }
    );

    if (!homestay) {
      return res.status(404).json({
        success: false,
        message: "Homestay not found",
      });
    }

    res.status(200).json(homestay);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =======================
// DELETE HOMESTAY
// =======================
const deleteHomestay = async (req, res) => {
  try {
    const homestay = await Homestay.findByIdAndDelete(req.params.id);

    if (!homestay) {
      return res.status(404).json({
        success: false,
        message: "Homestay not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Homestay deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getHomestays,
  getHomestayById,
  createHomestay,
  updateHomestay,
  deleteHomestay,
};