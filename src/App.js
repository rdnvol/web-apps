import './App.css';
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import skills from "./sources/source.json";
import info from "./sources/personalInfo.json";

function App() {
  return (
    <div className="App">

        <LeftBar skills={skills}/>
        <RightBar info={info}/>
    </div>
  );
}

export default App;
