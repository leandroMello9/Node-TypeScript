import { Request, Response } from 'express'
import UserSchema from '../schemas/User'
class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    const AllUser = await UserSchema.find()

    return res.json(AllUser)
  }

  public async store (req: Request, res: Response): Promise<Response> {
    const newUser = await UserSchema.create(req.body)

    return res.json(newUser)
  }
}
export default new UserController()
