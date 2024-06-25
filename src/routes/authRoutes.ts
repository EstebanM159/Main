import {Router} from 'express'
import {body, param} from 'express-validator'
import {handleInputErrors} from '../middlewares/validation'
import { AuthController } from '../controllers/AuthController'
import { authenticate } from '../middlewares/auth'

const router = Router()

router.post('/create-account-withF',AuthController.CreateAccountWithFacebook)
router.post('/create-account',
    body('userName').notEmpty().withMessage('El nombre es obligatorio'),
    body('password').isLength({min:8}).withMessage('La contraseña es muy corta, minimo 8 caracteres'),
    body('password_confirmation').custom((value,{req})=>{
        if(value !== req.body.password){
            throw new Error('Las contraseñas deben ser iguales')
        }
        return true
    }),
    body('phone').isNumeric().withMessage('El telefono debe ser un numero'),
    handleInputErrors,
    body('email').isEmail().withMessage('Email no valido'),
    AuthController.createAccount
)
router.post('/login-withF', AuthController.loginWithFacebook)
router.post('/login',
    body('email').isEmail().withMessage('Email no valido'),
    body('password').notEmpty().withMessage('La password no puede ir vacio'),
    handleInputErrors,
    AuthController.login
)
router.get('/user',
    authenticate,
    AuthController.user
)
export default router