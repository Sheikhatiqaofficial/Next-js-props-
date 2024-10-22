//Props means to share data between components in Next.js
import Card1 from "./component1/card1";
import Card2 from "./components2/card2";
import Card3 from "./components3/card3";
import './style.css';

export default function Home() {

  //props using variables :
  //  let name = "Atiqa";
  //  let id =1234;

  //props using object
  // let makeup = {
  //   lipstick: "red",
  //   noofshades: 234,
  //   color: "cyan"
  // }

  let std1 = {
    Name: "Atiqa Sheikh",
    age :45,
    RollNo : 1234,
    Class : "Begginer"
  }
  
  let std2 = {
    Name: "Afifa Sheikh",
    age :48,
    RollNo : 567,
    Class : "Learner"
  }
  let std3 = {
    Name: "Ayesha Sheikh",
    age :50,
    RollNo : 8910,
    Class : "Begginer"
  }
  return (
    <div>
      <Card1 student1 = {std1}/>
      <Card2 student2 = {std2}/>
     <Card3 student3 = {std3}/> 
    </div>
  );
}
