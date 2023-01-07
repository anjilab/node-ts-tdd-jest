import express from 'express';
import * as HouseHoldController from '../controllers/household';

const router = express.Router();

router.get('/', HouseHoldController.getHouseholdData);

export default router;
