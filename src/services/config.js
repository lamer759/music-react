const devBaseURL = 'http://123.207.32.32:9001'
const proBaseUrl = 'http://123.207.32.32:9001'

export const BASE_URL=process.env.NODE_ENV === 'development' ? devBaseURL : proBaseUrl;

export const TIMEOUT = 5000