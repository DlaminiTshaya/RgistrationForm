import React from "react"
function Patient(props) {
   
const handleDelete=(index)=>{
  props.delete(index)
}
const mapData = props.pandemic.map((delta, k) =>{
  
   
if(k >=1){
  return(
    <div className="display">
<h2> {delta.PName} {delta.Surname} details</h2>
<h5>Your name is<span style={{marginLeft:60}}>: {delta.PName}</span></h5>
<h5>Your Surname is<span style={{marginLeft:38}}>: {delta.Surname}</span>{delta.Surname}</h5>
<h5>Your  Id Number is<span style={{marginLeft:25}}>: {delta.id}</span></h5>

    <h3><hr/>Questionare Results<hr/></h3>
  <div><h5>Coughing: <span style={{marginLeft:20}}>{delta.cough}</span></h5></div>
  <div><h5>Flue: {delta.flue}</h5></div>
  <div><h5>Breathing difficuties: {delta.breath}</h5></div>
  <div><h5>headache: {delta.headache}</h5></div>
  <div> <h5>Contact With someone: {delta.contact}</h5>
  </div>
  <button onClick={()=>handleDelete(delta.id)}>Delete</button>
</div>
  );
}
 
});

 return <>{mapData}</>
}
export default Patient;