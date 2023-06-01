import { IUser } from './user.interface'
import { User } from './user.model'

const createUser = async (user: IUser): Promise<IUser | undefined> => {
  try {
    const createUser = await User.create(user)

    if (!createUser) {
      throw new Error('Failed to create user')
    }

    return createUser
  } catch (error) {
    console.log(error)
  }
}

export default {
  createUser,
}
