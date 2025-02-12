const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Enable CORS to allow requests from frontend
app.use(cors());

app.get('/api/message', (req, res) => {
    res.json({ message: 'Our message from Backend' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});