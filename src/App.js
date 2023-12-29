import Header from "./components/Header.js";
import RecommendedVideos from "./components/RecommendedVideos.js";
import Sidebar from "./components/SideBar.js";

import "./App.css";

function App() {
  return (
    <main className="App">
      <Header />
      <div className="app__page">
        <Sidebar />
        <RecommendedVideos />
      </div>
    </main>
  );
}

export default App;
