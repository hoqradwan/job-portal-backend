const { getJobsService, getJobByIdService } = require("../services/job.service");

exports.getJobs = async (req, res) => {
  try {
    const jobs = await getJobsService();
    res.status(200).json({
      status: "success",
      data: jobs,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message,
    });
  }
};
exports.getJobById = async(req,res)=>{
  const {id} = req.params;
  try {
    const job = await getJobByIdService(id);
    res.status(200).json({
      status: "success",
      data: job,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message,
    });
  }
}