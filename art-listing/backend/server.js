const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

// Enable All CORS Requests for development purposes
app.use(cors());

app.use(bodyParser.json());




app.post('/api/saveFormData', (req, res) => {
    const data = JSON.stringify(req.body, null, 2); // Format the JSON data with indentation for readability

    // Append the form data to the formData.json file
    fs.appendFile('formData.json', data + "\n", (err) => {
        if (err) {
            console.error('Data not saved', err);
            return res.status(500).send('Error saving data');
        }
        console.log('Data saved successfully');
        res.send('Data saved successfully');
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
