import axios from "axios";

class AuthService {
    login(email, password) {
        let data = new FormData()
        data.append("email", email)
        data.append("password", password)
        return axios.post(process.env.REACT_APP_API_URL + "/auth/login", data)
    }
}

export default new AuthService();