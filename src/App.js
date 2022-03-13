import "./App.css";
import VideoPlayer from "./components/VideoPlayer";
import Options from "./components/Options";
import Notifications from "./components/Notifications";

function App() {
  return (
    <div className="App">
      <h1>Video Chat</h1>
      {/* video player */}
      <VideoPlayer />
      {/* options */}
      <Options>
        <Notifications />
      </Options>
    </div>
  );
}

export default App;
