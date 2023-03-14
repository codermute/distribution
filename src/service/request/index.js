import axios from 'axios'
import { useLoginStore } from '@/store'
import { baseURL, TIMEOUT, baseURL_static } from './config'

class Request {
  constructor(baseURL) {
    this.instance = axios.create({
      baseURL,
      timeout: TIMEOUT
    })

    this.instance.interceptors.request.use(
      (config) => {
        const store = useLoginStore()

        const token = store.token
        if (!config.baseURL.includes('static')) {
          config.headers['Authorization'] = token
        }

        return config
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        return res.data
      },
      (err) => {
        return err
      }
    )
  }

  request(config) {
    return this.instance.request(config)
  }

  get(config) {
    return this.request({ ...config, method: 'get' })
  }

  post(config) {
    return this.request({ ...config, method: 'post' })
  }
}

export const RequestStatic = new Request(baseURL_static)

export default new Request(baseURL)
