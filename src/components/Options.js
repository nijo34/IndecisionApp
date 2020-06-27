import Option from './Option'
import React from 'react';    

const Options = (props)=>(
    <div>
        <div className = "widget-header">
            <h3 className = "widget-header_title">Your Options</h3>
            <button 
            className = "button button--link"
            onClick = {props.handleDeleteOptions}>Remove all options</button>
        </div>
        
        {props.options.length===0 && <p className = "widget_message">Please add an option to get started!</p>}
         {
             props.options.map((option,index) => (
                <Option 
                    key={option}                                                        //creating a key prop since array requires keys.
                    optionText = {option}
                    handleDeleteOption = {props.handleDeleteOption}
                    count = {index+1}
                />                                              
             ))                 
         }
    </div>
)

export default Options;