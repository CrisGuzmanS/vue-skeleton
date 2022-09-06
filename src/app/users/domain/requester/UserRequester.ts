import axios from 'axios'
import UserCollection from '@/app/users/domain/collections/UserCollection'

export default class UserRequester {
    public static async all() {
        // return await axios.get('http://192.168.1.203:8000/api/users')
        return new UserCollection((await axios.get('http://192.168.1.203:8000/api/users')).data)
    }
}