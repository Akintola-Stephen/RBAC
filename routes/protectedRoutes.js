const express = require("express");
const {
  authenticate,
  authorizeRoles,
} = require("../middleware/authMiddleware");
const { adminDashboard } = require("../controllers/admin/adminController");
const {
  shipperDashboard,
} = require("../controllers/shipper/shipperController");
const {
  carrierDashboard,
} = require("../controllers/carrier/carrierController");

const router = express.Router();

router.get("/admin", authenticate, authorizeRoles("Admin"), adminDashboard);

router.get(
  "/shipper",
  authenticate,
  authorizeRoles("Shipper"),
  shipperDashboard
);

router.get(
  "/carrier",
  authenticate,
  authorizeRoles("Carrier"),
  carrierDashboard
);

module.exports = router;
