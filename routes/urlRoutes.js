const express = require('express');
const shortid = require('shortid');
const validurl = require('valid-url')
const Url = require('../models/URL');
const router = express.Router();
require('dotenv').config();

router.post('/shorten', async (req, res) => {
  const { originalUrl } = req.body;
  const baseUrl = process.env.BASE_URL;

  if (!validurl.isUri(baseUrl))
    return res.status(400).json({ message: 'Invalid URL' });
  if (validurl.isUri(originalUrl)) {
    try {
      let url = await Url.findOne({ originalUrl });
      if (url) return res.json(url);
      const shortCode = shortid.generate();
      const shortUrl = `${baseUrl}/${shortCode}`;
      url = new Url({
        shortCode,
        originalUrl,
        shortUrl
      });
      await url.save();
      res.status(201).json(url);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: "Server Error" });
    }
  } else {
    res.status(404).json({ error: 'URL error' });
  }
});

router.get("/:shortCode", async (req, res) => {
  const { shortCode } = req.params;
  try {
    const url = await Url.findOne({ shortCode });
    if (url) {
      return res.redirect(url.originalUrl);
    } else {
      return res.status(404).json({ error: "Short URL not found" });
    }
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;