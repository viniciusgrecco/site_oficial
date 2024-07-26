

export async function getCEPInfosApi(cep) {
    const options = {
        method: "GET",
    }

    let response = await fetch(`https://viacep.com.br/ws/${cep}/json`, options)
    let data = await response.json()

    return {data, response}
}