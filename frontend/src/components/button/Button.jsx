import React from 'react'

function Button(props) {
  return (
    <button id={props.id} onClick={()=>{props.onAction()}}style={{ color: `${props.color}`, backgroundColor:'blue' , padding:".5em",margin:'.5rem'}}>
        {props.children}
    </button>
  )
}

export default Button