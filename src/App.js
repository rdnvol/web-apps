import './App.css';
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import skills from "./sources/source.json";
import info from "./sources/personalInfo.json";

function App() {
    console.log(info);
  return (
    <div className="App">

        <LeftBar skills={skills}/>
        <RightBar info={info}/>
        {/*<RightBar />*/}
    </div>
  );
}

export default App;
