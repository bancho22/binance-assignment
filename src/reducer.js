import createReducer from '@agillic/create-reducer';
import * as actions from './actions';

const initialState = {
    bids: [],
    asks: []
};

const reducer = createReducer({
    initialState,
    actions: {
        [actions.UPDATE_BIDS]: ({action: {bids}}) => ({bids}),
        [actions.UPDATE_ASKS]: ({action: {asks}}) => ({asks})
    },
    options: {
        mode: 'setState'
    }
});

export default reducer;
