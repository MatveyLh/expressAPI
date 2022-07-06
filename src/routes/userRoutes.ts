import express from 'express';
import { requestLimiter } from '../utils/requestLimiter';
import { RegistrationAPI } from "../api/registrationAPI";
import { LoginAPI } from "../api/loginAPI";

const router = express.Router({ mergeParams: true });

router.post('/register', requestLimiter, RegistrationAPI.routeUserRegistration(), RegistrationAPI.registerUser);
router.post('/login', requestLimiter, LoginAPI.routeUserLogin(), LoginAPI.getUser);

export default router;
