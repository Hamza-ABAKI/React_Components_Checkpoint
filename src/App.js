import "./App.css";
import ProfilePhoto from "./Component/Profile/ProfilePhoto.js";
import FullName from "./Component/Profile/FullName.js";
import Address from "./Component/Profile/Address.js";

function App() {
  return (
    <div className="App">
      <ProfilePhoto />
      <div className="n_a">
        <FullName />
        <Address />
      </div>
    </div>
  );
}

export default App;
