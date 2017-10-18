/* --------------------------- Define Constants ----------------------------- */
export const COMMERCE_CHECKOUT_REQUEST = 'COMMERCE_CHECKOUT_REQUEST'
export const COMMERCE_CHECKOUT_SUCCESS = 'COMMERCE_CHECKOUT_SUCCESS'
export const COMMERCE_CHECKOUT_FAILURE = 'COMMERCE_CHECKOUT_FAILURE'

/* ------------------------------- Actions ---------------------------------- */
/*--- Template Action ---*/
export const commerceCheckoutRequest = ({payload}) => ({
  type: COMMERCE_CHECKOUT_REQUEST,
  payload: payload
})