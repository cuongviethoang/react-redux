import axios from "axios";

import {
    INCREMENT,
    DECREMENT,
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR,
} from "./types";

export const increaseCounter = () => {
    return {
        type: INCREMENT,
    };
};

export const decreaseCounter = () => {
    return {
        type: DECREMENT,
    };
};

export const fetchAllUser = () => {
    return async (dispatch, getState) => {
        dispatch(fetchUserRequest());

        try {
            const res = await axios.get(
                "http://localhost:8080/api/v1/user/read"
            );
            const data = res && res.data ? res.data.DT : [];
            dispatch(fetchUserSuccess(data));
        } catch (e) {
            console.log(e);
            dispatch(fetchUserError());
        }
    };
};

const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST,
    };
};

const fetchUserSuccess = (payload) => {
    return {
        type: FETCH_USER_SUCCESS,
        dataUsers: payload,
    };
};

const fetchUserError = () => {
    return {
        type: FETCH_USER_ERROR,
    };
};
