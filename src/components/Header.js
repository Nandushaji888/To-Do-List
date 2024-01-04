import {TodayDate} from "../healpers/dateHelper"
function Header() {
    return (
      <>
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
          <div className="subHeading">
          <br />
          <h2>Whoop, it's {TodayDate()} 🌝 ☕ </h2>
        </div>
        </>
    );
  }
  export default Header;  