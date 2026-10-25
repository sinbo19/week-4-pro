
function StudentCard({ name, department, email }) {
  return (
    <article className="student-card">
      <div className="student-avatar">
        {name.charAt(0).toUpperCase()}
      </div>

      <div className="student-info">
        <h2>{name}</h2>
        <p>
          <strong>Department:</strong> {department}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
      </div>
    </article>
  );
}

export default StudentCard;

