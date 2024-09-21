const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/gifs', async (req, res) => {
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

module.exports = router;
