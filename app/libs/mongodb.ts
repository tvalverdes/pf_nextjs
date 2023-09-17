import mongoose from 'mongoose'

const connectMongoDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://tvalverdes9:ZnZYd9dpDvu1YxbS@cluster0.9memoco.mongodb.net/?retryWrites=true&w=majority'
    )
  } catch (error) {
    console.log(error)
  }
}

export default connectMongoDB
