const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

app.get('/api/gifs', async (req, res) => {
    const { search } = req.query;

    try {
        const response = await axios.get(`https://api.giphy.com/v1/gifs/search`, {
            params: {
                api_key: process.env.GIPHY_API_KEY,
                q: search,
                limit: 20
            }
        });

        res.json(response.data.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching GIFs');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
