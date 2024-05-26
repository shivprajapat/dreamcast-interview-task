import axios from "axios";
import * as types from "./actionType";
const apiPath = "https://62ff8d5a9350a1e548e14fde.mockapi.io/redux-thunk-curd";
const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});

const deleteUser = (users) => ({
  type: types.DELETE_USER,
  payload: users,
});

const addUserT = () => ({
  type: types.ADD_USER,
});

const getUser = (user) => ({
  type: types.GET_SINGLE_USER,
  payload: user,
});

// Load Users

export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get(apiPath)
      .then((res) => {
        // console.log('res',res.data);
        dispatch(getUsers(res.data));
      })
      .catch((error) => console.log(error));
  };
};

// Delete User

export const deleteUsers = (id) => {
  return function (dispatch) {
    axios
      .delete(`${apiPath}/${id}`)
      .then((res) => {
        // console.log("res", res.data);
        dispatch(deleteUser(res.data));
        dispatch(loadUsers())
      })
      .catch((error) => console.log(error));
  };
};

// Add User

export const addUser = (user) => {
  return function (dispatch) {
    axios
      .post(apiPath, user)
      .then((res) => {
        console.log('res',res.data);
        dispatch(addUserT(res.data));
        dispatch(loadUsers());
      })
      .catch((error) => console.log(error));
  };
};

// Single User

export const getSingleUser = (id) => {
  return function (dispatch) {
    axios
      .get(`${apiPath}/`, id)
      .then((res) => {
        console.log("getUser :>> ", res.data);
        dispatch(getUser(res.data));
      })
      .catch((error) => console.log(error));
  };
};