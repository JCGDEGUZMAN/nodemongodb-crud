  
import express from 'express';
import * as animeController from '../controllers/animeController.js';

const router = express.Router();

router.get('/anime', animeController.list);
router.get('/anime/:id', animeController.view);
router.post('/anime', animeController.store);
router.put('/anime/:id', animeController.modify);
router.delete('/anime/:id', animeController.destroy);

export default router;