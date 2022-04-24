import "./ChargesCalculator.css";
import React, { useEffect } from "react";
import { loading } from "../../Assets";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
  calculate,
  decCount,
  getCode,
  incCount,
  updCode,
  updCount,
  updType,
} from "../../Redux/action";
import { Route, Routes } from "react-router-dom";

const Counter = () => {
  const { count, loadings, code, inputcode } = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCode());
  }, []);

  return (
    <div className="mainBox">
      <div className="heading">Weight</div>
      <div className="buttonBox">
        <div
          onClick={() => {
            dispatch(decCount(0.5));
          }}
        >
          -
        </div>
        <input
          value={count.toFixed(2)}
          type="number"
          onChange={(e) => {
            dispatch(updCount(Number(e.target.value)));
          }}
        />
        <div
          onClick={() => {
            dispatch(incCount(0.5));
          }}
        >
          +
        </div>
      </div>
      <div className="heading">Pincode</div>
      <input
        type="text"
        className="input2"
        onChange={(e) => {
          dispatch(updCode(Number(e.target.value)));
        }}
      />
      <div className="heading">Rate Type</div>
      <select
        className="input2"
        name=""
        id=""
        onSelect={(e) => {
          dispatch(updType(e.target.value));
        }}
      >
        <option value="">----</option>
        <option value="Forward">Forward</option>
        <option value="Forward & RTO">Forward & RTO</option>
      </select>
      <div
        className="next"
        onClick={() => {
          let havecode = code.filter((item) => {
            if (item.CustomerPincode === inputcode) {
              return true;
            }
          });
          havecode
            ? dispatch(calculate())
            : alert("Not Available for this pincode");
        }}
      >
        ❯
      </div>
      <div className="heading">45$</div>
      {loadings ? (
        <div className="header">
          <div className="loading">
            <img src={loading} alt="" />
          </div>
          <div className="loadingText">Calculating Charges</div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Counter;
