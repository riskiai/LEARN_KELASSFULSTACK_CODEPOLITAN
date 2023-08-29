import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import RegisterValidator from 'App/Validators/RegisterValidator'

export default class AuthController {
  public async register({ auth, request, response }: HttpContextContract) {
    const validateData = await request.validate(RegisterValidator)
    const user = await User.create(validateData)

    // Login the user and create a token
    const token = await auth.use('api').login(user) // 'api' is the guard name

    return response.status(201).json({
      user,
      token: token.token,
    })
  }
}
