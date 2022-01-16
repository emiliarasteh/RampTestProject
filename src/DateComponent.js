import React, {useState, useEffect} from "react";

const DateComponent = (props) => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);


if (props.input === false) {
  return(
    <div>
      <h1> {date.toLocaleDateString()}</h1>
      <h1> {date.toLocaleTimeString()}</h1>
    </div>
  )

}else if
   (props.input instanceof Array){
    props.input.forEach(input => {
      <div>{props.input}</div>
   });
   return (
    <ul>
      {props.input.map((value, index) => {
        return <li key={index}>{value}</li>
      })}
    </ul>
  )
  }else{
    return(
      <div>{props.input}</div>
    )
    
  }

}


export default DateComponent