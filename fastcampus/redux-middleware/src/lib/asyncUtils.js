export const createPromiseThunk = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  const thunkCreator = param => async dispatch => {
      dispatch({type})
      try{
          const payload= await promiseCreator(param);
          dispatch({
              type: SUCCESS,
              payload
          })
      }catch (e) {
        dispatch({
            type:ERROR,
            payload:e,
            error: true
        })
      }
  } 
};

export const reducerUtils = {
  initial: (data = null) => ({
    data,
    loading: false,
    error: null,
  }),
  loading: (prevState = null) => ({
    loading: true,
    data: prevState,
    error: null,
  }),
  success: (data) => ({
    loading: false,
    data,
    error: null,
  }),
  error: (error) => ({
    loading: false,
    data: null,
    error,
  }),
};
