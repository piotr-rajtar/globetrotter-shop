/* selectors */
export const getAllCartProducts = ({cart}) => cart.data;

/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

const ADD_CART_PRODUCT = createActionName('ADD_CART_PRODUCT');
const REMOVE_CART_PRODUCT = createActionName('REMOVE_CART_PRODUCT');
const UPDATE_CART_PRODUCT = createActionName('UPDATE_CART_PRODUCT');
const CLEAR_CART = createActionName('CLEAR_CART');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

export const addCartProduct = payload => ({ payload, type: ADD_CART_PRODUCT });
export const removeCartProduct = payload => ({ payload, type: REMOVE_CART_PRODUCT });
export const updateCartProduct = payload => ({ payload, type: UPDATE_CART_PRODUCT });
export const clearCart = payload => ({ payload, type: CLEAR_CART });

/* thunk creators */
export const addCartProductRequest = (cartProduct) => {
  return async (dispatch, getState) => {

    await dispatch(addCartProduct(cartProduct));

    const { cart }  = await getState();

    const updatedCart  = cart.data;

    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
};

export const getCartProductsRequest = () => {
  return async dispatch => {
    const cartProducts = JSON.parse(localStorage.getItem('cart'));

    if (cartProducts === null) return;
    else await dispatch(fetchSuccess(cartProducts));
  };
};

export const removeCartProductRequest = (id) => {
  return async (dispatch, getState) => {

    await dispatch(removeCartProduct(id));

    const { cart }  = await getState();

    const updatedCart  = cart.data;

    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
};

export const updateCartProductRequest = (cartProduct) => {
  return async (dispatch, getState) => {

    await dispatch(updateCartProduct(cartProduct));

    const { cart }  = await getState();

    const updatedCart  = cart.data;

    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
};

export const clearCartRequest = () => {
  return async (dispatch) => {

    await dispatch(clearCart());

    localStorage.removeItem('cart');
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case ADD_CART_PRODUCT: {
      return {
        ...statePart,
        data: [
          ...statePart.data,
          action.payload,
        ],
      };
    }
    case REMOVE_CART_PRODUCT: {
      return {
        ...statePart,
        data: [
          ...statePart.data.filter(cartProduct => cartProduct.id !== action.payload),
        ],
      };
    }
    case UPDATE_CART_PRODUCT: {
      return {
        ...statePart,
        data: [
          ...statePart.data.map(cartProduct =>
            cartProduct.id === action.payload.id
              ? {
                ...cartProduct,
                'finalPrice': action.payload.finalPrice? action.payload.finalPrice : cartProduct.finalPrice,
                [action.payload.key]: action.payload.value,
              }
              : cartProduct
          ),
        ],
      };
    }
    case CLEAR_CART: {
      return {
        ...statePart,
        data: [],
      };
    }
    default:
      return statePart;
  }
};
