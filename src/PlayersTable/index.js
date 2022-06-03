import "../data/playerlist.json";

import players from "../data/playerlist";
import banks from "../data/banks";
import country from "../data/country";
function PlayersTable() {
  return (
    <section>
      <table>
        <thead>
          <tr>
            <td>Rank</td>
            <td>Hint</td>
            <td>Answers</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>3</td>
            <td></td>
            <td></td>
          </tr>
          {[4, 5, 6, 7, 8, 9].map((item) => (
            <tr key={item}>
              <td> {item}</td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>F-Name</td>
            <td>L-Name</td>
            <td>Team</td>
            <td>Position</td>
            <td>Image</td>
          </tr>
        </thead>
        <tbody>
          {players.map((item) => (
            <tr key={item.identifier + item.first_name + item.position}>
              <td> {item.identifier}</td>
              <td> {item.first_name}</td>
              <td> {item.last_name}</td>
              <td>{item.team}</td>
              <td>{item.position}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>

      <select>
        {banks.map((item) => (
          <option value={item.code} key={item.code + item.name}>{item.name}</option>
        ))}
      </select>

      <section>
      {country.map((item) => (
          <section key={item.name + item.code}>
          <p>{item.name}</p>
          {/* <img src={item.image} alt={item.name} /> */}
        </section>
        ))}
      </section>
    </section>
  );
}

export default PlayersTable;
