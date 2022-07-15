import GithubPages from "./Pages/GithubPages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/github" element={<GithubPages />} />
      </Routes>
    </>
  );
}

export default App;
