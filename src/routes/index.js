const express = require("express");
const router = express.Router();
const path = require("path");

const userRouter = require('./user');
const communityRouter = require('./community');
const uploadRouter = require('./upload');
const indexPath = path.join(__dirname, "../pages");

router.use(express.json());
router.use(express.static(indexPath));
router.use('/api/user', userRouter);
router.use('/api/community', communityRouter);
router.use('/api/upload', uploadRouter);

module.exports = router;