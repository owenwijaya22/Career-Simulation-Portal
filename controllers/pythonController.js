const { exec } = require("child_process");

export async function handlePostRequest (req, res) {
    const jsonData = req.body;
    const formattedData = JSON.stringify(jsonData).replace(/(:)|(")/g, (match, group1, group2) => {
        if (group1) return ': ';
        if (group2) return '\\"';
    });

    exec(`python app.py '${formattedData}'`, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    });

    res.send('Request received');
}