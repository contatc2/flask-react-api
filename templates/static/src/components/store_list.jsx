import React from 'react';
import Store from './store';

export default const StoreList = ({ stores }) => {
  return stores.map(({ store }) => <Store name={store.name} postcode={store.postcode} key={store.postcode} />);
};
