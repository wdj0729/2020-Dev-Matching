const API_ENDPOINT =
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";

const api = {
  fetchCats: async(keyword) => {
    const res = await fetch(`${API_ENDPOINT}/api/cats/search?q=${keyword}`)
    return res.json()
  },
};

const api2 = {
  fetchCats: async () => {
    const res = await fetch(`${API_ENDPOINT}/api/cats/random50`)
    return res.json()
  },
};