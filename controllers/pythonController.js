import { spawn } from 'child_process';

export async function handlePostRequest1(req, res) {
  try {
    const jsonData = req.body;
    const escapedJsonString = JSON.stringify(jsonData).replace(/"/g, '\\"');

    const pythonProcess = spawn('python', ['./controllers/gpt.py', escapedJsonString]);

    pythonProcess.stdout.on('data', (data) => {
      res.send(data.toString());
    });

    pythonProcess.on('error', (err) => {
      console.error('Error while executing python script:', err);
      res.status(500).send('An error occurred while processing the request.');
    });
  } catch (err) {
    console.error('Error while executing python script:', err);
    res.status(500).send('An error occurred while processing the request.');
  }
}


export async function handlePostRequest2(req, res) {
  try {
    const jsonData = req.body;
    const escapedJsonString = JSON.stringify(jsonData).replace(/"/g, '\\"');

    const pythonProcess = spawn('python', ['./controllers/gpt2.py', escapedJsonString]);

    pythonProcess.stdout.on('data', (data) => {
      res.send(data.toString());
    });

    pythonProcess.on('error', (err) => {
      console.error('Error while executing python script:', err);
      res.status(500).send('An error occurred while processing the request.');
    });
  } catch (err) {
    console.error('Error while executing python script:', err);
    res.status(500).send('An error occurred while processing the request.');
  }
}


