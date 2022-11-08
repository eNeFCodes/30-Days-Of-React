import './App.css'

import Day3Exercise from './components/day3/Day3Exercise';
import UserCard from './components/day3/UserCard';
import UserCardMock from './components/day3/UserCardMock';
import ColorCard from './components/day4/ColorCard';
import ColorsMock from './components/day4/ColorsMock';
import Numbers from './components/day6/Numbers';
import HexaColors from './components/day6/HexaColors';
import HexaColorsMock from './components/day6/HexaColorsMock';
//import Population from './components/day6/Population';
import Population from './components/day7/Population';
import PopulationMock from './components/day6/PopulationMock';
import Day8 from './components/day8';
import Day9 from './components/day9';

function App() {
  return (
    <div className="App">
      {/* <Day3Exercise/> */}
      {/* <UserCard
        {...UserCardMock}
      /> */}
      {/* <ColorCard colors={ColorsMock} /> */}
      {/* <Numbers range={31} /> */}
      {/* <HexaColors colors={HexaColorsMock} /> */}
      {/* <Population data={PopulationMock} /> */}
      <Day8 />
      {/* <Day9 /> */}
    </div>
  );
}

export default App;
