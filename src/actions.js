export const UPDATE_BIDS = 'UPDATE_BIDS';
export const UPDATE_ASKS = 'UPDATE_ASKS';

export const updateBids = ({ bids }) => ({
  type: 'UPDATE_BIDS',
  bids
});

export const updateAsks = ({ asks }) => ({
  type: 'UPDATE_ASKS',
  asks
});
