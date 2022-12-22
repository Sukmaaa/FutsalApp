import { API, setAuthToken } from "../config/API";

// for image and static file
export const baseURL = "http://localhost:4200/";

export const loginService = async (dispatch, body, onFailed, onSuccess) => {
  try {
    const response = await API.post("/login", body);
    setAuthToken(response.data.data.token);
    localStorage.setItem("token", response.data.data.token);
    const getProfile = await API.get("/user/my-profile");
    dispatch({
      type: "LOGIN",
      payload: { ...getProfile.data.data },
    });
    onSuccess(false);
  } catch (error) {
    console.log(error);
    onFailed(true);
  }
};

export const registerService = async (dispatch, body, onFailed) => {
  try {
    const response = await API.post("/register", body);
    setAuthToken(response.data.data.token);
    localStorage.setItem("token", response.data.data.token);
    const getProfile = await API.get("/user/my-profile");
    dispatch({
      type: "LOGIN",
      payload: { ...getProfile.data.data.profile },
    });
  } catch (error) {
    console.log(error);
    onFailed(true);
  }
};

export const loadedService = async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      return null;
    }
    setAuthToken(token);
    const getProfile = await API.get("/user/my-profile");
    dispatch({
      type: "LOADED",
      payload: { ...getProfile.data.data },
    });
  } catch (error) {
    console.log(error);
  }
};

export const logoutService = (dispatch) => {
  localStorage.removeItem("token");
  setAuthToken();
  dispatch({
    type: "LOGOUT",
  });
};

export const getProductsService = async () => {
  try {
    const products = await API.get("/products");
    return products.data.data.products;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getProductByIdService = async (id) => {
  try {
    const product = await API.get(`/product/${id}`);
    if (!product) {
      return null;
    }
    return product;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const addProductService = (data, cb) => {
  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };
  API.post("/product", data, config)
    .then(() => cb())
    .catch((error) => console.error(error));
};

export const getTransactionsService = async (onSuccess, setLoading) => {
  try {
    const transactions = await API.get("/transactions");
    console.log(transactions.data.data.transactions);
    onSuccess(transactions.data.data.transactions);
    setLoading(false);
  } catch (error) {
    console.log(error);
    setLoading(false);
  }
};

export const editStatusTransactionService = (id, status) => {
  API.patch(`transaction/${id}`, status)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export const addTransactionService = (data, onSuccess) => {
  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };
  API.post("/transaction", data, config)
    .then(() => onSuccess())
    .catch((err) => console.log(err));
};

export const getMyTransactions = (setTransactions, setLoading) => {
  API.get("/my-transactions")
    .then((res) => {
      setTransactions(res.data.data.transactions);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
};
