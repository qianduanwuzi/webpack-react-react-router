export default (state , action) => {
  switch (action.type) {
    case 'INCREMENT':
    console.log('this is INCREMENT')
      return {...state,a:1}
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}