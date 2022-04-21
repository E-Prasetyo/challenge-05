import { 
  FETCH_CARS, FETCH_POST_BYID,
  HIDE_HEADER, DATA_SEARCH, DATA_CHOICE
} from '../Actions/types';

const initialState = {
  cars: [],
  car: {},
  show : false,
  driver : '',
  dataChoice: {}
}

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARS:
      return {
        ...state,
        cars: action.payload
      }
      // break;
    case FETCH_POST_BYID:
      return {
        ...state,
        car: action.payload
      }
      // break;
    case HIDE_HEADER:
      return {
        ...state,
        show: true,
      }
      // break;
    case DATA_SEARCH:
      return {
        ...state,
        driver: action.payload,
      }
      // break;
    case DATA_CHOICE:
      return {
        ...state,
        dataChoice: action.payload,
      }
      // break;
    default:
      return state;
  }
}

export default carReducer;