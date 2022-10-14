const express = require("express");
const router = express.Router();
const jobController = require("../controllers/job.controller")

router.route('/').get(jobController.getJobs)
router.route("/:id").get(jobController.getJobById)

module.exports = router;