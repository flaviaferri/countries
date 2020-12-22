import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://restcountries.eu/rest/v2/',
  timeout: 3000,
})

export default {
  getCountry(country) {
    return axiosInstance.get(`alpha/${country}`).then((response) => {
      return response.data
    })
  },

  getAllCountries() {
    return axiosInstance.get(`all`).then((response) => {
      return response.data
    })
  },

  getCountries(region) {
    return axiosInstance.get(`region/${region}`).then((response) => {
      return response.data
    })
  },
}
