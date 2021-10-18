import * as types from './AuthActionTypes';
import { base_url, login_url } from '../../Config/Auth';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';


/**
 * login request with username(email) and password
 * after successfull login it store the recieved token to local storage sends to dashboard
 */
export const login = ({ username, password }, history, cb) => (dispatch) => {
    dispatch({
        type: types.LOGIN_REQUEST,
    });
    axios
        .post(`${login_url}/token/generate-token`, {
            username: username,
            password: password,
        })
        .then((res) => {
            console.log(res);
            console.log('get response');
            dispatch(getUserDetails(res.data));
            history.push("/");
            dispatch({
                type: types.LOGIN_SUCCESS,
                payload: res.data,
            });
            cb && cb("success");
        })
        .catch((err) => {
            console.log(err && err.response && err.response.data);
            cb && cb("failure");
            if (
                err &&
                err.response &&
                err.response.data ===
                "You have entered an invalid username or password "
            ) {
                message.error("You have entered an invalid username or password ");
            } else {
                message.error("Oops! something went wrong. Please retry.");
                console.log(err);
                history.push({
                    pathname: "/",
                });
            }
            dispatch({
                type: types.LOGIN_FAILURE,
                payload: err,
            });
        });
};
/**

 * get user details after login
 */
export const getUserDetails = (token, cb) => dispatch => {
    console.log('user details request....');
    dispatch({
        type: types.GET_USER_DETAILS_REQUEST,
    });
    axios
        .get(`${base_url}/user/profile`, {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        })
        .then(res => {
            console.log('res called', res);
            // sessionStorage.setItem('userDetails', JSON.stringify(res.data))
            dispatch({
                type: types.GET_USER_DETAILS_SUCCESS,
                payload: res.data,
            });
            cb && cb('success', res.data);
            // dispatch(setFiscalTimeInterval(res.data))
            // dispatch(getLoginDetails(res.data.userId))
        })
        .catch(err => {
            // alert('Oops, something went wrong during getting user details.')
            console.log(err);
            // history.push({
            //     pathname: '/'
            // })
            dispatch({
                type: types.GET_USER_DETAILS_FAILURE,
                payload: err,
            });
        });
};


export const logout = () => dispatch => {
    AsyncStorage.removeItem('userDetails');
    AsyncStorage.removeItem('token');
    dispatch({ type: types.LOGOUT });
    alert('You have successfully logged out. See you soon.');
};


//GET USER Table Data
export const getUserTableData = () => (dispatch) => {
    dispatch({
        type: types.GET_USER_TABLE_DATA_REQUEST,
    });
    axios
        .get(`https://dev.tekorero.com/api/v2.0/admin/organizations`)
        .then((res) => {
            dispatch({
                type: types.GET_USER_TABLE_DATA_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) => {
            dispatch({
                type: types.GET_USER_TABLE_DATA_FAILURE,
                payload: err,
            });
        });
};

//GET Sub USER Table Data
export const getSubUserTableData = (orgId) => (dispatch) => {
    dispatch({
        type: types.GET_SUB_USER_TABLE_DATA_REQUEST,
    });
    axios
        .get(`https://dev.tekorero.com/api/v2.0/admin/users/${orgId}`)
        .then((res) => {
            dispatch({
                type: types.GET_SUB_USER_TABLE_DATA_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) => {
            dispatch({
                type: types.GET_SUB_USER_TABLE_DATA_FAILURE,
                payload: err,
            });
        });
};

export const handleReleaseModal = (modalprops) => (dispatch) => {
    dispatch({
        type: types.HANDLE_RELEASE_NOTE_MODAL,
        payload: modalprops,
    });
};

export const forgotPassword = (email) => (dispatch) => {
    axios
        .get(`${base_url}/forgotPassword?email=${email}`, email)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
};

export const changePassword = (data, cb) => (dispatch) => {
    console.log(data);
    dispatch({ type: types.CHANGE_PASSWORD_REQUEST });
    axios
        .post(`${base_url}/changePassword`, data, {
            headers: {
                Authorization: "Bearer " + sessionStorage.getItem("token") || "",
            },
        })
        .then((res) => {
            console.log(res);
            dispatch({ type: types.CHANGE_PASSWORD_SUCCESS });
            cb();
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: types.CHANGE_PASSWORD_FAILURE });
            cb();
        });
};
/**
 * user registration goes here, any person can register .
 * after registration success the person will get an email to activate his/her account
 */
export const register = (user) => (dispatch) => {
    dispatch({
        type: types.REGISTER_REQUEST,
    });

    axios
        .post(`${base_url}/registration`, { ...user })
        .then((res) => {
            console.log(res);
            if (res.data.emailInd === true) {
                message.error("Account cannot be created using this user name");
                dispatch({
                    type: types.REGISTER_FAILURE,
                });
            } else {
                message.success(
                    "Thank you for registering on Korero, Success in closing Opportunities."
                );
                dispatch({
                    type: types.REGISTER_SUCCESS,
                    payload: res.data,
                });
            }
        })
        .catch((err) => {
            console.log(err);
            message.error("Something went wrong!");
            dispatch({
                type: types.REGISTER_FAILURE,
            });
        });
};
/**
 * Email validation goes here
 * this method is a called when user click on the email activation link
 * this method verify the email and if user is verified it send them to set Password page
 */
export const validateEmail = (
    userId,
    token,
    emailId,
    organizationId,
    history
) => (dispatch) => {
    console.log(userId, token, emailId, organizationId);
    dispatch({
        type: types.VALIDATE_EMAIL_REQUEST,
    });

    axios
        .post(`${base_url}/emailValidation`, {
            userId: userId,
            emailId: emailId,
            token: token,
            organizationId: organizationId,
            ipAddress: "103.72.61.3",
        })
        .then((res) => {
            console.log(res);
            if (res.data === true) {
                console.log("email is valid");
                message.success("Your email has been validated successfully.");
                history.push({
                    pathname: "/setPassword",
                    state: {
                        userId: userId,
                        emailId: emailId,
                        organizationId: organizationId,
                        token: token,
                    },
                });
                // dispatch({
                //     type: types.VALIDATE_EMAIL_SUCCESS,
                // })
            }
        })
        .catch((err) => {
            console.log(err);
            // dispatch({
            //     type: types.VALIDATE_EMAIL_FAILURE
            // })
        });
};

/**
 * Set Password goes here
 * password is set here and after password set it redirect to login page
 */
export const setPassword = (
    userId,
    organizationId,
    emailId,
    password,
    history
) => (dispatch) => {
    console.log(userId, organizationId, emailId, password);
    axios
        .post(`${base_url}/setPassword`, {
            userId: userId,
            organizationId: organizationId,
            emailId: emailId,
            password: password,
            ipAddress: "103.72.61.3",
        })
        .then((res) => {
            console.log(res);
            if (res.data === true) {
                message.success("Your password has been saved successfully.");
                history.push("/login");
            }
        })
        .catch((err) => {
            console.log(err);
        });
};