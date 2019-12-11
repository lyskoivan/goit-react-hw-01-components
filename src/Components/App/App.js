import React from 'react';

import user from '../../db/user.json';
import statisticalData from '../../db/statistical-data.json';
import friendsData from '../../db/friends.json';
import transactions from '../../db/transactions.json';

import Profile from '../Profile';
import Statistics from '../Statistics';
import FriendList from '../FriendList';
import TransactionHistory from '../TransactionHistory';

import styles from './App.module.css';

const App = () => (
  <div className={styles.App}>
    <Profile user={user} />
    <Statistics title="File upload" stats={statisticalData} />
    <FriendList friends={friendsData} />
    <TransactionHistory items={transactions} />
  </div>
);

export default App;
