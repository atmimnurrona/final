import axios from "axios"

// axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
// axios.defaults.baseURL = "http://localhost:8080"
// axios.defaults.timeout = 10000;

//tambah token secara global
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')

axios.interceptors.response.use(function (response) {
  console.log(response)
  if (response.status !== 200) {
    throw new Error();
  }
  let data = response.data
  if (response.data.code !== 200) {
    throw new Error(data.message)
  }
  return data.data;
}, function (error) {
  return Promise.reject(error);
})

export default axios;