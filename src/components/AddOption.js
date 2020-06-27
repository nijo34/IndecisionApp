import React from 'react';      

export default class AddOption extends React.Component {
    state = {                                                             //class property syntax
        error: undefined                                                 //error state is required only within this component, so everytime the option gets rendered, if there's an error, it'll be rendered.
    }

    handleAddOption = (e)=>{
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option)
        
        this.setState(()=>({error}))

        if(!error){
            e.target.elements.option.value =''
        }

    }
    render(){
        return (                                                                //logically rendered the error if present. Initially set to undefined which means false.
            <div>
                <p className = "add-option-error">{this.state.error && <p>{this.state.error}</p>}</p>              
                <form 
                    className = "add-option"
                    onSubmit = {this.handleAddOption}>
                    <input className = "add-option_input" type = "text" name="option" autoComplete = "off"/>
                    <button className = "button">Add Option</button>
                </form>
            </div>
        )
    }
}

