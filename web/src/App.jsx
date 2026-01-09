import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Team from "./pages/Team";
// import Projects from "./pages/Projects";
// import Careers from "./pages/Careers";

export default function App() {
  return (
    <BrowserRouter>
      <div className="mx-auto max-w-6xl px-6 py-10">
        <nav className="flex gap-6 mb-10">
          <Link to="/" className="font-semibold">Home</Link>
          <Link to="/team" className="font-semibold">Team</Link>
          {/* <Link to="/projects" className="font-semibold">Projects</Link>
          <Link to="/careers" className="font-semibold">Careers</Link> */}
        </nav>

        <Routes>
          <Route path="/" element={<div className="text-2xl font-bold">SMB Solutions</div>} />
          <Route path="/team" element={<Team />} />
          {/* <Route path="/projects" element={<Projects />} />
          <Route path="/careers" element={<Careers />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
