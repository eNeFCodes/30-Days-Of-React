import Day3Exercise from './components/day3/Day3Exercise';
import UserCard from './components/day3/UserCard';

import UserCardMock from './components/day3/UserCardMock';

function App() {
  return (
    <div className="App">
      {/* <Day3Exercise/> */}
      <UserCard
        {...UserCardMock}
      />
    </div>
  );
}

export default App;
