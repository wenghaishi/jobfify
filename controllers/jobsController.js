const createJobs = async (req, res) => {
  res.send('create jobs')
}

const getAllJobs = async (req, res) => {
  res.send('getAllJobs')
}

const updateJobs = async (req, res) => {
  res.send('updateJobs')
}

const deleteJobs = async (req, res) => {
  res.send('deleteJobs')
}

const showStats = async (req, res) => {
  res.send('showStats')
}

export { createJobs, getAllJobs, updateJobs, deleteJobs, showStats }

