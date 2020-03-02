import {actions} from '../actions/authActions';
const initialState = {
  token: null,
  isLoading: false,
  error: '',
  asyncLoading: false,
  resToken: null,
  resCode: null,
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

    case actions.SET_RESET_CODE:
      return {...state, resCode: data};

    case actions.SET_RESET_TOKEN:
      return {...state, resToken: data};

    default:
      return state;
  }
};
