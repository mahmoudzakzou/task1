import React from 'react'

const FunctionalProps = (props) => {
    console.log(props);
    
  return (
    <div>
        <h1>fname:{props.fname}</h1>
        <h2>lname:{props.lname}</h2>
        <span>age:{props.age}</span>
        <br />
        <span>phone:{props.phone}</span>
    </div>
  )
}

export default FunctionalProps