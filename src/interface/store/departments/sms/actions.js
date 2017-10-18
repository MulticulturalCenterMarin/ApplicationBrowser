/* --------------------------- Define Constants ----------------------------- */

/*--- Send Text Message (SMS) ---*/
export const SMS_SEND_REQUEST = 'SMS_SEND_REQUEST'
export const SMS_SEND_SUCCESS = 'SMS_SEND_SUCCESS'
export const SMS_SEND_FAILURE = 'SMS_SEND_FAILURE'

/*--- Send Batched Text Message (SMS) ---*/
export const SMS_BATCH_SEND_REQUEST = 'SMS_BATCH_SEND_REQUEST'
export const SMS_BATCH_SEND_SUCCESS = 'SMS_BATCH_SEND_SUCCESS'
export const SMS_BATCH_SEND_FAILURE = 'SMS_BATCH_SEND_FAILURE'

/* ---------------------------- Define Actions ------------------------------ */

/*--- Send SMS Request ---*/
export const smsSendRequest = ({payload, metadata}) => ({
  type: SMS_SEND_REQUEST,
  payload,
  metadata
})

/*--- Send Batch SMS Request ---*/
export const smsBatchSendRequest = ({payload, metadata}) => ({
  type: SMS_BATCH_SEND_REQUEST,
  payload,
  metadata
})

