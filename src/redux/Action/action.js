import * as types from "./actionType";
import axios from "axios";
import GLOBAL_CONSTANTS from "../../GlobalConstants";
import { toast } from "react-toastify";

// ?get-----------------------------------------------------------
const getProductListData = (data) => ({
  type: types.PRODUCTS_LIST,
  payload: data,
});

export const loadProductListData = (params) => {
  return function (dispatch) {
    let headers = {
      "Content-type": "application/json",
      Authorization: `${GLOBAL_CONSTANTS.token}`,
    };
    axios
      .get(`${GLOBAL_CONSTANTS.backend_host}api/v1/catalog/products`, {
        params,
        headers,
      })
      .then((resp) => {
        dispatch(getProductListData(resp.data));
      })
      .catch((error) => console.log(error));
  };
};

// ?post--------------------------------------------------------
export const forget_password = (data, callback) => {
    return function () {
      let headers = {
        "Content-type": "application/json",
      };
      axios
        .post(
          `${GLOBAL_CONSTANTS.backend_host}api/v1/ondc/forget_password`,
          JSON.stringify(data),
          { headers }
        )
        .then((resp) => {
          callback(resp.data);
        })
        .catch(() => {
          toast.error("Something went wrong", {
            autoClose: 2000,
          });
        });
    };
  };
