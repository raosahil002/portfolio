import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';
import ProjectPage from './pages/project/ProjectPage';
import ResumePage from './pages/resume/ResumePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="project" element={<ProjectPage />} />
          <Route path="resume" element={<ResumePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
