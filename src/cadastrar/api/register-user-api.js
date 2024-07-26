import { config } from "../../constants/config"

export async function registerUserApi(registerInfos) {
    const options = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(registerInfos)
    }

    let response = await fetch(config.apiBaseUrl + "/users", options)
    let data = await response.json()

    return {data, response}
}