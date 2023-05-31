import mongoose from 'mongoose'
import app from './app'

import config from './config/index'

mongoose.connect(config.database_url as string)

const dbConnect = async (): Promise<void> => {
  try {
    const connectionObj = mongoose.connection

    connectionObj.on('connected', () => {
      console.log(`Mongoose Connected`)

      app.listen(config.port, () => {
        console.log('listening on port', config.port)
      })
    })
    connectionObj.on('err', err => {
      console.log(`Mongoose Connected failed ` + err)
    })
  } catch (error) {
    console.log(error)
  }
}

dbConnect()

export { dbConnect }
