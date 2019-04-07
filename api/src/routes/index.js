import express from 'express'
import usersController from '../controllers/Users';
import accountsController from '../controllers/Accounts';

import { generate } from "shortid";

const router = express.Router();

const api_version = 'v1';

const base_url = '/api/'+ api_version;

router.get(base_url, usersController.hello);
router.post(base_url +'/auth/signup', usersController.signup);
router.post(base_url +'/auth/signin', usersController.signin);
router.post(base_url +"/accounts", accountsController.accountCreate);

export default router;