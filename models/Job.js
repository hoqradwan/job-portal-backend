const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const jobSchema = mongoose.Schema({
  jobTitle: {
    type: String,
    required: [true, "Please give a job title"],
    lowercase: true,
  },
  companyName: {
    type: String,
    required: true,
    minLength: [3, "company name must be at least three characters"],
    maxLegnth: [100, "company name is too large"],
  },
  location: {
    type: String,
    required: true,
    lowercase: true
  },
  category: {
    type: String,
    required: true
  },
  jobType: {
    type: String,
    required: true
  },
  employees: {
    type: Number,
    required: true
  },
  deadline: {
    type: Date,
  }

});

const Job = mongoose.model("Job", jobSchema)
module.exports = Job;