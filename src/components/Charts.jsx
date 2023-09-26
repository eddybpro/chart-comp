import "./Charts.css";
import { data } from "../data";

function Charts() {
  return (
    <main>
      <h1 className="Title">Spending - Last 7 days</h1>
      <ul className="ChartBox">
        {data.map((el, i) => (
          <li key={i}>
            <span className="ChartBox-Val">${el.amount}</span>
            <div className="ChartBox-Chart"></div>
            <span className="ChartBox-Day">{el.day}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
export default Charts;
