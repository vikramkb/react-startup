export function sample(state = { errorMessage: '' }, action = {}) {
  switch (action.type) {
    case 'LOGIN_FAILED':
      return {
        errorMessage: action.responseMessage,
      }
    case 'LOGIN_SUCCESS':
      return {
        errorMessage: '',
        userName: action.userName,
      }
    default:
      return state
  }
}
