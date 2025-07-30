const express = require('express');
const Url = require('../models/URL');
const shortid = require('shortid');
const router = express.Router();

router.post('/shorten', async (req, res) => {
    const { originalUrl } = req.body;
    const baseRule = process.env.BASE_URL;

    if (!validUrl.isUri(baseRule)) {
        return res.status(400).json('Invalid base URL');
    }
    if (validUrl.isUri(originalUrl)) {
        try {
            let url = await Url.findOne({ originalUrl });
            if (url) {
                res.json(url);
            }
            const shortCode = shortid.generate();
            const shortUrl = `${baseRule}/${shortCode}`;
            url = new Url({ originalUrl, shortCode, shortUrl });
            await url.save();
            res.json(url);
        } catch (err) {
            console.error(err);
            res.status(500).json("Server error");
        }
    }
});

module.exports = router;