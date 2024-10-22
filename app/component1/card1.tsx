export default function Card1({ student1 }: any) {
  return (
    <div className="card">
      <h1 className="card-title">Identification Card</h1>
      <h3>Name: {student1.Name}</h3>
      <h3>Age: {student1.age}</h3>
      <h3>Roll Number: {student1.RollNo}</h3>
      <h3>Class: {student1.Class}</h3>
    </div>
  );
}
