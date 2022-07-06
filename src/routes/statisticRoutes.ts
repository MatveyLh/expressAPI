import { StatisticAPI } from '../api/statisticRoute';
import { requestLimiter } from '../utils/requestLimiter';

const express = require('express');

const router = express.Router({ mergeParams: true });

router.get('/:periodId', requestLimiter, StatisticAPI.routeGetStatistic());

export default router;
