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

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

export const addCartProduct = payload => ({ payload, type: ADD_CART_PRODUCT });
export const removeCartProduct = payload => ({ payload, type: REMOVE_CART_PRODUCT });
export const updateCartProduct = payload => ({ payload, type: UPDATE_CART_PRODUCT });

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
    default:
      return statePart;
  }
};
