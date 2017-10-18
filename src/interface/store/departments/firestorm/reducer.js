import {
FIRESTORM_ENTITY_SYNC_REQUEST,
FIRESTORM_ENTITY_SYNC_SUCCESS,
FIRESTORM_ENTITY_SYNC_FAILURE,
FIRESTORM_ENTITY_READ_REQUEST,
FIRESTORM_ENTITY_READ_SUCCESS,
FIRESTORM_ENTITY_READ_FAILURE,
FIRESTORM_ENTITY_UPDATE_REQUEST,
FIRESTORM_ENTITY_UPDATE_SUCCESS,
FIRESTORM_ENTITY_UPDATE_FAILURE,
} from './actions'

import { initialState } from './selectors'

export default (state = initialState, {type, payload, metadata}) => {
  switch (type) {


      case FIRESTORM_ENTITY_SYNC_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case FIRESTORM_ENTITY_SYNC_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case FIRESTORM_ENTITY_SYNC_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case FIRESTORM_ENTITY_READ_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case FIRESTORM_ENTITY_READ_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case FIRESTORM_ENTITY_READ_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case FIRESTORM_ENTITY_UPDATE_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case FIRESTORM_ENTITY_UPDATE_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case FIRESTORM_ENTITY_UPDATE_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


    default:
      return state
  }
}