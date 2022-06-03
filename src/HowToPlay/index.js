import "./style.css";

import {useState} from 'react'
function HowToPlay(p) {
    console.log(p);
    // p.content = "Zi"
  const [toggle, setToggle] = useState(false)
    p.rope("There is water")    

  return (
    <section id="htp">
      <button onClick={() => setToggle(!toggle)}>How to play</button>
      {toggle && (
        <p>
          To get under way, click 'Start'. Once you have started the quiz, type
          an answer into the box and either hit enter or click the submit
          button. If you are right, it will fill in the correct slot in the
          table. Keep entering more answers until you've successfully completed
          the quiz - or the timer runs out. If you do not want to play any more,
          just hit the 'Give up!' button. You can then reveal the answers you
          missed - or have another go.
        </p>
      )}

      <h3>{p.content}</h3>
      <h3></h3>
    </section>
  );
}

export default HowToPlay;
