// const { exec } = require('child_process');
import exec from 'child_process';

async function handlePostRequest(req, res) {
  const jsonData = req.body;
  const escapedJsonString = JSON.stringify(jsonData).replace(/"/g, '\\"');

  exec(`python gpt.py "${escapedJsonString}"`, (error, stdout) => {
    res.send(`stdout: ${stdout}`);
  });
}

export default handlePostRequest;
