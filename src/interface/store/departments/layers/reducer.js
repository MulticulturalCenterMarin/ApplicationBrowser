import { reducer } from 'redux-form'
import { initialState } from './selectors'
import { POPOVER_OPEN, POPOVER_CLOSE } from '../popover/actions'
import { DIALOG_OPEN, DIALOG_CLOSE } from '../dialog/actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case POPOVER_OPEN:
      return {
        ...state,
        popover: true
      }
    case POPOVER_CLOSE:
      return {
        ...state,
        popover: false
      }
    case DIALOG_OPEN:
      return {
        ...state,
        dialog: true,
        popover: false
      }
    case DIALOG_CLOSE:
      return {
        ...state,
        dialog: false
      }
    default:
      return state
  }
}
