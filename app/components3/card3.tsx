export default function Card3({student3}: any) {

  
    return (
      <div className="card">
        <h1 className="card-title">Identification Card</h1>
        <h3>Name : {student3.Name} </h3>
        <h3>Age : {student3.age} </h3>
        <h3>Roll Number : {student3.RollNo}</h3>
        <h3>Class : {student3.Class}</h3>

      </div>
    );
  }
  