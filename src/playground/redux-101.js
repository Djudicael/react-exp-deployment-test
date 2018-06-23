import {
    createStore
} from 'redux';

//Action generetator are function that return action object

const incrementCount = ({
    incrementBy = 1
} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({
    decrementBy = 1
} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'

});

const setCount = ({
    count
}) => ({
    type: 'SET',
    count

});

//REDUCER
//1 reducer are pure function

const countReducer = (state = {
    count: 0
}, action) => {
    switch (action.type) {
        case 'INCREMENT':

            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':

            return {
                count: state.count - action.decrementBy
            };
        case 'SET':

            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }

}

const store = createStore(countReducer);

const unscubscribre = store.subscribe(() => {
    console.log(store.getState());
})




store.dispatch(incrementCount({
    incrementBy: 5
}));

store.dispatch(decrementCount({
    decrementBy: 5
}));
store.dispatch(resetCount());
store.dispatch(setCount({
    count: 101
}));