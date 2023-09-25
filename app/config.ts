import { config } from 'dotenv'
config()

export const API_URL = process.env.API_URL || ''
export const IZI_URL = process.env.IZI_URL || ''
export const TEST_KEY = process.env.TEST_KEY || ''
