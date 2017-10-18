export const FIRESTORM_ENTITY_SYNC_REQUEST = 'FIRESTORM_ENTITY_SYNC_REQUEST'
export const FIRESTORM_ENTITY_SYNC_SUCCESS = 'FIRESTORM_ENTITY_SYNC_SUCCESS'
export const FIRESTORM_ENTITY_SYNC_FAILURE = 'FIRESTORM_ENTITY_SYNC_FAILURE'

export const FIRESTORM_ENTITY_CREATE_REQUEST = 'FIRESTORM_ENTITY_CREATE_REQUEST'
export const FIRESTORM_ENTITY_CREATE_SUCCESS = 'FIRESTORM_ENTITY_CREATE_SUCCESS'
export const FIRESTORM_ENTITY_CREATE_FAILURE = 'FIRESTORM_ENTITY_CREATE_FAILURE'

export const FIRESTORM_ENTITY_READ_REQUEST = 'FIRESTORM_ENTITY_READ_REQUEST'
export const FIRESTORM_ENTITY_READ_SUCCESS = 'FIRESTORM_ENTITY_READ_SUCCESS'
export const FIRESTORM_ENTITY_READ_FAILURE = 'FIRESTORM_ENTITY_READ_FAILURE'

export const FIRESTORM_ENTITY_UPDATE_REQUEST = 'FIRESTORM_ENTITY_UPDATE_REQUEST'
export const FIRESTORM_ENTITY_UPDATE_SUCCESS = 'FIRESTORM_ENTITY_UPDATE_SUCCESS'
export const FIRESTORM_ENTITY_UPDATE_FAILURE = 'FIRESTORM_ENTITY_UPDATE_FAILURE'
// firestorm :: EntitySync |  FIRESTORM_ENTITY_SYNC
export const firestormEntitySyncRequest = ({payload, metadata}) => ({
  type: FIRESTORM_ENTITY_SYNC_REQUEST,
  payload,
  metadata
})

export const firestormEntitySyncSuccess = ({payload, metadata}) => ({
  type: FIRESTORM_ENTITY_SYNC_SUCCESS,
  payload,
  metadata
})

export const firestormEntitySyncFailure = ({payload, metadata}) => ({
  type: FIRESTORM_ENTITY_SYNC_FAILURE,
  payload,
  metadata
})
  
// firestorm :: EntityCreate |  FIRESTORM_ENTITY_CREATE
export const firestormEntityCreateRequest = ({payload, metadata}) => ({
  type: FIRESTORM_ENTITY_CREATE_REQUEST,
  payload,
  metadata
})

export const firestormEntityCreateSuccess = ({payload, metadata}) => ({
  type: FIRESTORM_ENTITY_CREATE_SUCCESS,
  payload,
  metadata
})

export const firestormEntityCreateFailure = ({payload, metadata}) => ({
  type: FIRESTORM_ENTITY_CREATE_FAILURE,
  payload,
  metadata
})
  
// firestorm :: EntityRead |  FIRESTORM_ENTITY_READ
export const firestormEntityReadRequest = ({payload, metadata}) => ({
  type: FIRESTORM_ENTITY_READ_REQUEST,
  payload,
  metadata
})

export const firestormEntityReadSuccess = ({payload, metadata}) => ({
  type: FIRESTORM_ENTITY_READ_SUCCESS,
  payload,
  metadata
})

export const firestormEntityReadFailure = ({payload, metadata}) => ({
  type: FIRESTORM_ENTITY_READ_FAILURE,
  payload,
  metadata
})
  
// firestorm :: EntityUpdate |  FIRESTORM_ENTITY_UPDATE
export const firestormEntityUpdateRequest = ({payload, metadata}) => ({
  type: FIRESTORM_ENTITY_UPDATE_REQUEST,
  payload,
  metadata
})

export const firestormEntityUpdateSuccess = ({payload, metadata}) => ({
  type: FIRESTORM_ENTITY_UPDATE_SUCCESS,
  payload,
  metadata
})

export const firestormEntityUpdateFailure = ({payload, metadata}) => ({
  type: FIRESTORM_ENTITY_UPDATE_FAILURE,
  payload,
  metadata
})