import { useState } from "react";
import "./App.css";
import TeacherSideBar from "./pages/teacher/SideBar";
import StudentSideBar from "./pages/teacher/SideBar";

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
