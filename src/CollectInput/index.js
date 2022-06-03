import "./style.css";
import { useState } from "react";

function CollectInput() {
  const [toggle, setToggle] = useState(false);

  return (
    <section id="collect">
      {!toggle ?
       (
        <p>
          <button onClick={() => setToggle(!toggle)}>Start Quiz</button>
        </p>
      ) : (
        <section>
          <input type="text" placeholder="Enter your answer"></input>
          <button type="submit">Submit</button>
        </section>
      )}
    </section>
  );
}

export default CollectInput;
