const express = require('express');
const router = express.Router();
const path = require('path');

const userRouter = require('./user');
const communityRouter = require('./community');
const studyRouter = require('./study');
const studyFeedbackRouter = require('./study_feedback');
const indexPath = path.join(__dirname, '../views');

router.use(express.json());
router.use(express.static(indexPath));
router.use('/api/user', userRouter);
router.use('/api/community', communityRouter);
router.use('/api/study', studyRouter);
router.use('/api/study_feedback', studyFeedbackRouter);

module.exports = router;
