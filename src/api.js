const API_ENDPOINT =
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";

const api = {
  fetchCats: async(keyword) => {
    const res = await fetch(`${API_ENDPOINT}/api/cats/search?q=${keyword}`);
    console.log(res);
    if(res.status === 200){
      return res.json();
    }else{
      console.log(`error ${res.status} ${res.statusText}`)
    }  
  },
};

const api2 = {
  fetchCats: async () => {
    const res = await fetch(`${API_ENDPOINT}/api/cats/random50`);
    console.log(res);
    if(res.status === 200){
      return res.json();
    }else{
      console.log(`error ${res.status} ${res.statusText}`)
    }  
  },
};