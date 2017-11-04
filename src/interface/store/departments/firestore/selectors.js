import _ from 'lodash'
import idx from './idx'
export const initialState = {}

export const getQuery = (state,delta) => state[delta] || null
export const getQueryData = (state,delta) => state[delta] && state[delta].payload || null
export const getQueryStatus = (state,delta) =>state[delta] && state[delta].status || 'initialize'
export const getQueryComposeStatus = (state,delta) =>state[delta] && state[delta].status || null
export const getQueryComposeData = (state,references) => _.filter(state, entity => idx(entity, _=>_.payload.eid) ? 1: 0).map(e=> e.payload)
export const getUserProfileId = (state, delta) => state[delta] && state[delta].payload && state[delta].payload[0].id  || null
export const getUserProfileEid = (state, delta) => state[delta] && state[delta].payload && state[delta].payload[0].eid  || null