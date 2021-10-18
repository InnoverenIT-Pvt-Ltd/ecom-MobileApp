import * as types from "./AuthActionTypes";


const initialState = {
  fetchingUserDetails: false,
  fetchingUserDetailsError: null,
  userDetails: {},
//   userDetails: JSON.parse(sessionStorage.getItem("userDetails")) || {},
  logging: false,
  loginError: false,
//   token: sessionStorage.getItem("token"),
token: '',
  fetchingUserTableData: false,
  fetchingUserTableDataError: false,
  userTableData: [],

  fetchingSubUserTableData: false,
  fetchingSubUserTableDataError: false,
  subUserTableData: [],


  changingPassword: false,
  changingPasswordError: false,
  
  addReleaseModal: false,

  registering: false,
  registeringError: false,
  registeringSuccess: false,
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return { ...state, logging: true };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        logging: false,
        token: action.payload.token || sessionStorage.getItem("token"),
      };
    case types.LOGIN_FAILURE:
      return { ...state, logging: false, loginError: true };

    case types.GET_USER_DETAILS_REQUEST:
      return { ...state, fetchingUserDetails: true };
    case types.GET_USER_DETAILS_SUCCESS:
      return {
        ...state,
        fetchingUserDetails: false,
        userDetails:
          action.payload || JSON.parse(sessionStorage.getItem("userDetails")),
      };
    case types.GET_USER_DETAILS_FAILURE:
      return {
        ...state,
        fetchingUserDetails: false,
        fetchingUserDetailsError: true,
      };
    case types.GET_USER_TABLE_DATA_REQUEST:
      return { ...state, fetchingUserTableData: true };
    case types.GET_USER_TABLE_DATA_SUCCESS:
      return {
        ...state,
        fetchingUserTableData: false,
        userTableData: action.payload,
      };
    case types.GET_USER_TABLE_DATA_FAILURE:
      return {
        ...state,
        fetchingUserTableData: false,
        fetchingUserTableDataError: true,
      };

    case types.GET_SUB_USER_TABLE_DATA_REQUEST:
      return { ...state, fetchingSubUserTableData: true };
    case types.GET_SUB_USER_TABLE_DATA_SUCCESS:
      return {
        ...state,
        fetchingSubUserTableData: false,
        subUserTableData: action.payload,
      };
    case types.GET_SUB_USER_TABLE_DATA_FAILURE:
      return {
        ...state,
        fetchingSubUserTableData: false,
        fetchingSubUserTableDataError: true,
      };

    case types.HANDLE_RELEASE_NOTE_MODAL:
      return {
        ...state,
        addReleaseModal: action.payload,
      };
      case types.CHANGE_PASSWORD_REQUEST:
      return { ...state, changingPassword: true, changingPasswordError: false };
    case types.CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        changingPassword: false,
        changingPasswordError: false,
      };
    case types.CHANGE_PASSWORD_FAILURE:
      return { ...state, changingPassword: false, changingPasswordError: true };

    
        case types.VALIDATE_EMAIL_REQUEST:
          return { ...state };
        case types.VALIDATE_EMAIL_SUCCESS:
          return { ...state };
        case types.VALIDATE_EMAIL_FAILURE:
          return { ...state };
    
        case types.SET_PASSWORD_REQUEST:
          return { ...state };
        case types.SET_PASSWORD_SUCCESS:
          return { ...state };
        case types.SET_PASSWORD_FAILURE:
          return { ...state };
          case types.REGISTER_REQUEST:
            return { ...state, registering: true, registeringError: false };
          case types.REGISTER_SUCCESS:
            return {
              ...state,
              registering: false,
              registeringError: false,
              registeringSuccess: true,
              user: action.payload,
            };
          case types.REGISTER_FAILURE:
            return {
              ...state,
              registering: false,
              registeringError: true,
              registeringSuccess: false,
            };
      

    default:
      return state;
          }
};
