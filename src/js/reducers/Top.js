export default function topReducer(state = {count: 0}, action) {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return {count: state.count + 1};
    case 'DECREMENT_COUNTER':
      return {count: state.count - 1};
    default:
      return state
  }
}
