import axios from 'axios'

export default {
  getCountry(country) {
    return axios
      .get(`https://restcountries.eu/rest/v2/alpha/${country}`)
      .then((response) => {
        return response.data
      })
  },

  getAllCountries() {
    return axios
      .get(`https://restcountries.eu/rest/v2/all`)
      .then((response) => {
        return response.data
      })
  },

  getCountries(region) {
    return axios
      .get(`https://restcountries.eu/rest/v2/region/${region}`)
      .then((response) => {
        return response.data
      })
  },
}
