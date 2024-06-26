import {Router} from 'express'
import {body, param} from 'express-validator'
import {handleInputErrors} from '../middlewares/validation'
import { AuthController } from '../controllers/AuthController'

const router = Router()

router.post('/create-account-withF',AuthController.CreateAccountWithFacebook)
router.post('/create-account',AuthController.createAccount)
router.post('/login', AuthController.login)

export default router