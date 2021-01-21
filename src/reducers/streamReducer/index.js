import _ from 'lodash'
import {
  CREATE_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
  FETCH_ONE_STREAM,
  FETCH_STREAMS,
} from '../../actions/types'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ONE_STREAM:
      return { ...state, [action.payload.id]: action.payload }
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload }
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload }
    case DELETE_STREAM:
      return _.omit(state, action.payload) // action.payload is the id number
    case FETCH_STREAMS:
      console.log('fetch the streams')
      return { ...state, ..._.mapKeys(action.payload, 'id') }
    default:
      return state
  }
}
