import News from "./News";
import ExchangeMarket from "./ExchangeMarket";
import HowToPlay from "./HowToPlay";
import ScoreKeeper from "./ScoreKeeper";
import CountDown from "./CountDown";
import CollectInput from "./CollectInput";
import PlayersTable from "./PlayersTable";
// component
/**
 * a js function that returns ui ( user interface )
 * html + css + js
 */
function bucket(data){
  console.log(data)
}
function App() {
  return (
    <section>
      <h1>Can you name the players with 100 Premier League goals?</h1>
      {/* <a href="" >dsfsd</a> */}
      {/* <input placeholder="" width="400px" height="200px" />  */}
      {/* <HowToPlay content="Charles" /> */}
      {/* <HowToPlay  content="Williams"/> */}
      {/* <HowToPlay content="Dreams" /> */}
      <HowToPlay content="Zinny" rope={bucket} />
      <section id="tracking">
        <ScoreKeeper />
        <CountDown />
      </section>
    <CollectInput />
    <PlayersTable />
    </section>
  );
}

export default App;
