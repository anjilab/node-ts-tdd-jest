import express from 'express';

import houseHoldRoutes from './household';

const router = express.Router();

/**
 * GET /status
 */
router.get('/status', (req, res) => res.send('OK'));

// household routes
router.use('/household', houseHoldRoutes);

export default router;
