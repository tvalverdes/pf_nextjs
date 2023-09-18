import mongoose from 'mongoose'

const connectMongoDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('URI not found')
    }
    await mongoose.connect(process.env.MONGODB_URI)
  } catch (error) {
    console.log(error)
  }
}

export default connectMongoDB
