import { useState } from "react";
import Header from "./Header";
import StudentList from "./StudentList";
import "./App.css";


const students = [
  {
    id: 1,
    name: "Abebe",
    department: "Software Engineering",
    email: "abebe@example.com",
  },
  {
    id: 2,
    name: "Hana",
    department: "Computer Science",
    email: "hana@example.com",
  },
  {
    id: 3,
    name: "Dawit",
    department: "Information Technology",
    email: "dawit@example.com",
  },
];


function App() {
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={darkMode ? "app dark-mode" : "app"}>
      <Header />

      <main className="container">
        <div className="toolbar">
          <input
            className="search-input"
            type="text"
            placeholder="Search students by name..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          <button
            className="theme-button"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        <p className="student-count">
          {filteredStudents.length} student(s) found
        </p>

        <StudentList students={filteredStudents} />
      </main>
    </div>
  );
}

export default App;



