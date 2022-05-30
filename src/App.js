import News from "./News";
import ExchangeMarket from "./ExchangeMarket";
import Clips from "./Clips";
// component
/**
 * a js function that returns ui ( user interface )
 * html + css + js
 */

function App() {
  return (
    <section>
      <ExchangeMarket />
    
      <News />
        <Clips/>
    
     
    </section>
  );
}

export default App;
