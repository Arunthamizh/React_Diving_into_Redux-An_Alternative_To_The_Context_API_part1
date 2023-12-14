const redux = require('redux');

/**
 * A function that takes in a state and an action and returns an updated state object with the count incremented by 1.
 *
 * @param {Object} state - The current state object.
 * @param {Object} action - The action object that triggered the state update.
 * @return {Object} The updated state object with the count incremented by 1.
 */
// * reducer function
// * The dispatch function is used to dispatch an action to the store.
const counterReducer = (state = { count: 0 }, action) => {
    if(action.type === 'increment') {
        return {
            count: state.count + 1
        }
    }
    if(action.type === 'decrement') {
        return {
            count: state.count - 1
        }
    }

    return state;

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
// * The dispatch function is used to dispatch an action to the store.
// * The dispatched action is then handled by the reducer function by updating the state based on the action type. 
store.dispatch({ type: 'increment'});
store.dispatch({ type: 'decrement'});