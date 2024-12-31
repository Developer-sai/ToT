import express from 'express';
import Tot from '../models/Tot';
import auth from '../middleware/auth';

const router = express.Router();

router.post('/', auth, async (req, res) => {
  try {
    const newTot = new Tot({
      creator: req.user.id,
      content: req.body.content
    });
    await newTot.save();
    res.status(201).json(newTot);
  } catch (error) {
    res.status(500).json({ message: 'Error creating TOT' });
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const tots = await Tot.find().sort({ createdAt: -1 }).limit(20).populate('creator', 'username');
    res.json(tots);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching TOTs' });
  }
});

export default router;

