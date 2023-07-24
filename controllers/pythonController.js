const { exec } = require("child_process");

export async function handlePostRequest (req, res) {
    const jsonData = req.body;
    const escapedJsonString = JSON.stringify(jsonString).replace(/"/g, '\\"');

    exec(`python gpt.py "${escapedJsonString}"`, (error, stdout) => {
        res.send(`stdout: ${stdout}`);
    });
    
}