const devBaseURL = 'https://autumnfish.cn/'
const proBaseUrl = 'https://autumnfish.cn/'

export const BASE_URL=process.env.NODE_ENV === 'development' ? devBaseURL : proBaseUrl;

export const TIMEOUT = 5000