import axios from 'axios'

export default class UserService {
    static async getAll() {
        const response = await axios.get('http://127.0.0.1:3000')
        return response
    }
    
    static async getByStr(str = '') {
        const response = await axios.get(`http://127.0.0.1:3000?term=${str}`)
        return response
    }
}