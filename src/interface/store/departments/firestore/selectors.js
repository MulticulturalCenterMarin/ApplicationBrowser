import _ from 'lodash'
import idx from './idx'
export const initialState = {}

export const getQuery = (state,delta) => state[delta] || null
export const getQueryData = (state,delta) => state[delta] && state[delta].payload || null
export const getQueryStatus = (state,delta) =>state[delta] && state[delta].status || 'initialize'
export const getQueryComposeStatus = (state,delta) =>state[delta] && state[delta].status || null
export const getQueryComposeDatas = (state,references) => _.filter(state, entity=> references.indexOf(entity.payload.data.eid >= 0))  
export const getQueryComposeData = (state,references) => _.filter(state, entity => idx(entity, _=>_.payload.data.eid) ? true: false).map(e=> e.payload)