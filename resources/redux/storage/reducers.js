/* ------------------------- External Dependencies -------------------------- */

const entity = 'storage'
const entityUppercase = 'STORAGE'

const reduxOperators = [
  'UPLOAD_FILE',
  'DOWNLOAD_URL',
  'DELETE_FILE',
]
console.log(`import {`)
reduxOperators.map(i=> {
  let t = `${entityUppercase}_${i}_REQUEST,\n${entityUppercase}_${i}_SUCCESS,\n${entityUppercase}_${i}_FAILURE,`
  console.log(t)
})
console.log(`} from './actions'`)
console.log(`
import { initialState } from './selectors'

export default (state = initialState, {type, payload, metadata}) => {
  switch (type) {
`)

reduxOperators.map(i=> {
  let name = i.split("_").map(t=>t.toLowerCase().charAt(0).toUpperCase() + t.toLowerCase().slice(1)).join("")

const l = `
      case ${entityUppercase}_${i}_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case ${entityUppercase}_${i}_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            payload
          }
        }
      case ${entityUppercase}_${i}_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }
`
  console.log(l)
})
  console.log(`
    default:
      return state
  }
}
  `)

// reduxOperators.map(i=> {
//   let t = `${entityUppercase}_${i}_REQUEST,\n ${entityUppercase}_${i}_SUCCESS,\n${entityUppercase}_${i}_FAILURE,`
//   console.log(t)
// })

