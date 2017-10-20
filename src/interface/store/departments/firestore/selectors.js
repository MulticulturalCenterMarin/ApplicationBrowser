export const initialState = {}

export const getQuery = (state,delta) => state[delta] || null
export const getQueryData = (state,delta) => state[delta] && state[delta].payload || null
export const getQueryStatus = (state,delta) =>state[delta] && state[delta].status || 'initialize'