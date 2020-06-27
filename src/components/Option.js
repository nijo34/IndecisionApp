import React from 'react'

const Option = (props)=>{
    return (
        <div className="option">
          <p className = "option__text">{props.count}. {props.optionText} </p>    
          <button 
           className = "button button--link"
            onClick = {(e)=>{                                //passing an inline arrow function instead of directly calling the event handler
                props.handleDeleteOption(props.optionText)
            }}
          >
            Remove
        </button>        
        </div>
    )
}

export default Option;