import { config } from "../../constants/config"

export async function userLoginApi(email, password) {
    let options = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email, password})
    }

    let response = await fetch(config.apiBaseUrl + "/login", options)
    let data = await response.json()

    return {response, data}
}