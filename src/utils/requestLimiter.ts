import rateLimit from "express-rate-limit";

export const requestLimiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 5,
});
