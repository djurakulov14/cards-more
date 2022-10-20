let urls = {
    users: "http://localhost:7777/users",
    cards: "http://localhost:7777/cards",
    transactions: "http://localhost:7777/transactions",
}


export const fetchAll = async (resourse, params = "") => {
    const res = await axios.get(urls[resourse] + params)

    return res.data
}

export const postTo = async (resourse, body = null) => {
    const res = await axios.post(urls[resourse], body)

    return res.data
}