import http from "../../utils/http";
import { actions as uiActions } from "../ui";
import { GET_LIST, SET_LIST, GET_DETAIL, SET_DETAIL } from "./constants";

export const getList = () => {
  return async (dispatch) => {
    dispatch({
      type: GET_LIST,
    });
    dispatch(uiActions.showLoading());
    try {
      const response = await http.get("/products");
      dispatch(setList(response.data.items));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(uiActions.hideLoading());
    }
  };
};
export const setList = (products) => {
  return {
    type: SET_LIST,
    payload: products,
  };
};

export const getDetail = (slug) => {
  return async (dispatch) => {
    dispatch({
      type: GET_DETAIL,
    });
    dispatch(uiActions.showLoading());
    try {
      const response = await http.get(`/products/${slug}`);
      dispatch(setDetail(response.data));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(uiActions.hideLoading());
    }
  };
};

export const setDetail = (product) => {
  return {
    type: SET_DETAIL,
    payload: product,
  };
};
