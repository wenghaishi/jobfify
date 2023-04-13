const createJob = async (req, res) => {
  res.send('create jobs')
}

const getAllJob = async (req, res) => {
  res.send('getAllJobs')
}

const updateJob = async (req, res) => {
  res.send('updateJobs')
}

const deleteJob = async (req, res) => {
  res.send('deleteJob')
}

const showStats = async (req, res) => {
  res.send('showStats')
}

export { createJob, getAllJob, updateJob, deleteJob, showStats }

