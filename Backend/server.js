const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS to allow requests from frontend
app.use(cors());

app.get('/api/message', (req, res) => {
    res.json({ message: process.env.UNSPLASH_API_KEY || "Default backend message", testResponse: "Hi" });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});