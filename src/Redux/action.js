import {
  CALCULATE,
  DEC_COUNT,
  GET_CODE_DATA,
  GET_PRICE_DATA,
  INC_COUNT,
  UPD_CODE,
  UPD_COUNT,
  UPD_TYPE,
} from "./actionTypes.js";

export const incCount = (data) => {
  return { type: INC_COUNT, payload: data };
};

export const decCount = (data) => {
  return { type: DEC_COUNT, payload: data };
};

export const updType = (data) => {
  return { type: UPD_TYPE, payload: data };
};

export const updCode = (data) => {
  return { type: UPD_CODE, payload: data };
};

export const updCount = (data) => {
  return { type: UPD_COUNT, payload: data };
};

export const getCode = () => {
  return { type: GET_CODE_DATA };
};

export const getPrice = () => {
  return { type: GET_PRICE_DATA };
};

export const calculate = () => {
  return { type: CALCULATE };
};
