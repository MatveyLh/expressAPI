function generateRandomNumber(minValue: number, maxValue: number) {
  return +((minValue + Math.random() * (maxValue - minValue)).toFixed(0));
}

function generateRandomDecimalNumber(precision: number) {
  return Math.floor(Math.random() * (10 * precision - precision) + precision) / (precision);
}

function buildStatistic() {
  return {
    errors: `${generateRandomDecimalNumber(4)}%`,
    zeroes: `${generateRandomDecimalNumber(4)}%`,
    timeouts: `${generateRandomDecimalNumber(4)}%`,
    average: `${generateRandomDecimalNumber(4)}%`,
    error500: generateRandomNumber(1000, 2000),
    error501: generateRandomNumber(100, 999),
    error502: generateRandomNumber(100, 999),
    otherErrors: generateRandomNumber(100, 999),
    searches: generateRandomNumber(10000, 30000),
    searchesLastPeriod: generateRandomNumber(10000, 30000),
    mobileTraffic: `${generateRandomDecimalNumber(4)}%`,
    webTraffic: `${generateRandomDecimalNumber(4)}%`,
    clicks: generateRandomNumber(10, 1000),
    clicksLastPeriod: generateRandomNumber(10, 1000),
    bookings: generateRandomNumber(10, 1000),
    bookingsLastPeriod: generateRandomNumber(10, 1000),
    bookingsSTR: `${generateRandomDecimalNumber(4)}%`,
    bookingsAvgCheck: generateRandomNumber(10, 1000),
  };
}

export const generateStatistic = (periodId: number) => {
  switch (periodId) {
    case 0:
      return { period: 'Last hour', ...buildStatistic() };
    case 1:
      return { period: 'Today', ...buildStatistic() };
    case 2:
      return { period: 'Yesterday', ...buildStatistic() };
    case 3:
      return { period: 'Last 3 days', ...buildStatistic() };
    default:
      throw new Error('Wrong periodId!');
  }
};
