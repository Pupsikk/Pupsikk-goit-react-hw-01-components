import { Profile } from "./Profile/Profile";
import user from "./Profile/user.json";
import data from "./Statistics/data.json";
import {Statistics} from "./Statistics/Statistics";
import {FriendList} from "./Friend/FriendList";
import friends from "./Friend/friends.json";
import transactions from "./Transactions/transactions.json";
import {TransactionHistory} from "./Transactions/TransactionHistory";

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor:'rgba(214, 209, 209)',
      }}
    >
      <Profile
   username={user.username}
   tag={user.tag}
   location={user.location}
  avatar={user.avatar}
   stats={user.stats}
      />
     <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}/>
    </div>
    
  );
};
