import { SHOW_LOADING, HIDE_LOADING } from "./constants";

export const showLoading = () => ({
  type: SHOW_LOADING,
});

export const hideLoading = () => ({
  type: HIDE_LOADING,
});
