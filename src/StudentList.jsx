
import StudentCard from "./StudentCard";

function StudentList({ students }) {
  return (
    <div>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          department={student.department}
          email={student.email}
        />
      ))}
    </div>
  );
}

export default StudentList;
