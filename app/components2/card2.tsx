export default function Card2({ student2 }: any) {
  return (
    <div className="card">
      <h1 className="card-title">Identification Card</h1>
      <h3>Name: {student2.Name}</h3>
      <h3>Age: {student2.age}</h3>
      <h3>Roll Number: {student2.RollNo}</h3>
      <h3>Class: {student2.Class}</h3>
    </div>
  );
}
