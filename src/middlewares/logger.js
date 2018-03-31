export default store => next => action => {
    console.log('logging', action);
    next(action)
}
