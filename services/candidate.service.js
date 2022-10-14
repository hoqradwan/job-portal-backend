const Job = require("../models/Job");

exports.getJobsService = async()=>{
    const jobs = await Job.find({})
    return jobs
}
exports.getJobByIdService = async(id)=>{
    const job = await Job.findOne({_id:id})
    return job;
}