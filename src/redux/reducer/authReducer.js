import {actions} from '../actions/authActions';
const initialState = {
  token: null,
  isLoading: false,
  error: '',
  asyncLoading: false,

  resLoading: false,
  resToken: null,
  resResponse: null,
  resCount: 1,
  resError: '',
};

export default (state = initialState, {type, data}) => {
  switch (type) {
    case actions.LOADING_START:
      return {...state, isLoading: true};

    case actions.LOADING_END:
      return {...state, isLoading: false};

    case actions.SET_TOKEN:
      return {...state, token: data};

    case actions.DELETE_TOKEN:
      return {...state, token: null};

    case actions.ERROR:
      return {...state, error: data, token: null};

    case actions.CLEAR_ERROR:
      return {...state, error: ''};

    case actions.ASYNC_LOADING_START:
      return {...state, asyncLoading: true};

    case actions.ASYNC_LOADING_END:
      return {...state, asyncLoading: false};

    case actions.RESET_PASS_LOADING_START:
      return {...state, resLoading: true};

    case actions.RESET_PASS_LOADING_END:
      return {...state, resLoading: false};

    case actions.SET_RESET_CODE_RESPONSE:
      return {...state, resResponse: data};

    case actions.SET_RESET_TOKEN:
      return {...state, resToken: data};

    case actions.RESET_PASS_ERROR:
      return {...state, resError: data};

    case actions.SET_RES_COUNT:
      return {...state, resCount: data};

    case actions.CLEAR_RESET:
      return {
        ...state,
        resLoading: false,
        resToken: null,
        resResponse: null,
        resCount: 1,
        resError: '',
      };

    default:
      return state;
  }
};
