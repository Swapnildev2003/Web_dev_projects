import { useState } from "react";
import "./App.css";
import TeacherSideBar from "./pages/teacher/SideBar";
import StudentSideBar from "./pages/student/SideBar";

function App() {
  return (
    <>
      <div>
        <TeacherSideBar />
      </div>
    </>
  );
}

export default App;
