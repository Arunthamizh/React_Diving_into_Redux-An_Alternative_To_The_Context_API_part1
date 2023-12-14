const redux = require('redux');

/**
 * A function that takes in a state and an action and returns an updated state object with the count incremented by 1.
 *
 * @param {Object} state - The current state object.
 * @param {Object} action - The action object that triggered the state update.
 * @return {Object} The updated state object with the count incremented by 1.
 */
// * reducer function
const counterReducer = (state = { count: 0 }, action) => {
    return {
        count: state.count + 1
    }
}

// * store
const store = redux.createStore(counterReducer);

console.log(store.getState());

// * subscriber function
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log('latestState', latestState);
}

// * subscribe to the store
store.subscribe(counterSubscriber);

// * dispatch an action
store.dispatch({ type: 'increment'});