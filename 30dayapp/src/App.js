import './App.css'

import Day3Exercise from './components/day3/Day3Exercise';
import UserCard from './components/day3/UserCard';
import UserCardMock from './components/day3/UserCardMock';
import ColorCard from './components/day4/ColorCard';
import ColorsMock from './components/day4/ColorsMock';

function App() {
  return (
    <div className="App">
      {/* <Day3Exercise/> */}
      {/* <UserCard
        {...UserCardMock}
      /> */}
      <ColorCard colors={ColorsMock} />
    </div>
  );
}

export default App;
