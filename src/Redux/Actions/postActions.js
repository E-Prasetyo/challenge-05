import axios from 'axios';
import { FETCH_CARS, FETCH_POST_BYID } from './types';
const BASE_URL = "https://rent-cars-api.herokuapp.com"

const getAllCar = () => {
  return (dispatch) => {
    axios({
        method: 'get',
        url: BASE_URL+'/admin/car',
        headers: { }
    })
    // .then((response) => response.json())
    .then((res) => {
       dispatch({
        type: FETCH_CARS,
        payload: res.data
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

const getCarById = (id) => {
  return (dispatch) => {
    axios({
      method: 'get',
      url: BASE_URL+`/admin/car/${id}`,
      headers : {}
    })
      // .then((response) => response.json())
      .then((res) => dispatch({
        type: FETCH_POST_BYID,
        payload: res.data
      }));
  }
}

export { getAllCar, getCarById };