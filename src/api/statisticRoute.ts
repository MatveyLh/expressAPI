import { Request, Response } from 'express';
import { failResponse, successResponse } from '../utils/request';
import { generateStatistic } from '../utils/statistic';

export class StatisticAPI {
  static routeGetStatistic() {
    return async function getStatistic(req: Request, res: Response) {
      const { periodId } = req.params;

      try {
        const statisticData = { ...generateStatistic(+periodId) };

        return successResponse(req, res, statisticData);
      } catch (error) {
        return failResponse(req, res, 400, 'WRONG_PERIOD_ID', [{
          periodId: 'Unknown period id',
        }]);
      }
    };
  }
}
