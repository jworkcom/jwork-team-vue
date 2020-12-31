import axios from 'axios'

// axios.defaults.headers['content-type'] = 'application/json;charset=utf-8'
// axios.defaults.headers['content-type'] = 'application/x-www-form-urlencoded;charset=utf-8'

// 创建axios实例
const http = axios.create({
  baseURL: 'http://localhost:8080/jwork-team',
  // 超时
  timeout: 10000
})

export default http
