import { BrowserRouter, Routes, Route} from "react-router-dom";
import SignInPage from "./pages/auth/Login/SignInForm.jsx/SignInPage.jsx";
import AdminViewGeneration from "./components/admin/AdminViewGeneration.jsx";
import TeacherViewGeneration from "./components/teacher/TeacherViewGeneration.jsx";


function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<SignInPage />} />
              <Route path="/generate-teacher-nav-bar" element={<TeacherViewGeneration />} />
              <Route path="/generate-admin-nav-bar" element={<AdminViewGeneration />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
