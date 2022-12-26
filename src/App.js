import './App.css';
import CreateActivity from "./components/activity/CreateActivity"
import EditPage from "./components/activity/EditPage"
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";


function App() {

  return (
    <div className="App">
    {/* <CreateActivity /> */}
     <Router>
        <Routes>
          <Route exact path="/update/:_id" element={<EditPage />} />
          <Route exact path="/" element={<CreateActivity />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        {/* <StopWatch/> */}
      </Router>
    </div>
  );
}

export default App;
