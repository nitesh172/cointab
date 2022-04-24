import {
  INC_COUNT,
  DEC_COUNT,
  UPD_COUNT,
  UPD_CODE,
  UPD_TYPE,
  GET_CODE_DATA,
  GET_PRICE_DATA,
  CALCULATE,
} from "./actionTypes.js";
import axios from "axios";

export const reducer = (
  store = {
    count: 0,
    isLoading: false,
    code: [],
    inputcode: 0,
    type: "",
    pricData: [],
    answer: 0,
  },
  action
) => {
  switch (action.type) {
    case INC_COUNT:
      return { ...store, count: store.count + action.payload };
    case DEC_COUNT:
      return { ...store, count: store.count - action.payload };
    case UPD_COUNT:
      return { ...store, count: action.payload };
    case UPD_CODE:
      return { ...store, inputcode: action.payload };
    case UPD_TYPE:
      return { ...store, type: action.payload };
    case CALCULATE:
      console.log({...store})
      return { ...store };
    case GET_CODE_DATA:
      fetch("http://localhost:8080/CompanyX")
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          let data = (res[0]);
          return { ...store, isLoading: false, code: data };
        })
        .catch((error) => {
          console.log(error);
        });
    case GET_PRICE_DATA:
      axios
        .get("http://localhost:8080/CourierCompany")
        .then(({ data }) => {
          return { ...store, isLoading: false, pricData: data };
        })
        .catch((error) => {
          console.log(error);
        });
    default:
      return store;
  }
};
