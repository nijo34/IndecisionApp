import React from 'react';  
import AddOption from './AddOption'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component{
    state = {
        options:[],
        selectedOption: undefined
    }

    componentDidMount = ()=>{

        try {                                                                    //to check whether the data iS valid JSON
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)                                    //since local storage stores only string data.
            
            if(options){                                                        //calling this.setState for options only if there is some valid data within the local storage        
                this.setState(() => ({options }))}                              //implicitly returning an object and using the shorthand object definition since the key and the value share the same name.    
        }
        catch(e){

        }
   }

    componentDidUpdate = (prevProps , prevState)=>{
        if(prevState.options.length!==this.state.options.length)
        {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options',json)
        }
    }

    componentWillUnmount=()=>{
        console.log('COmponent will unmount')
    }
    // handleDeleteOptions() {
    //     this.setState(()=>{
    //         return {
    //             options: []
    //         }
    //     })
    // }

    handleDeleteOption = (optToRemove)=>{
        this.setState((prevState)=>({
            options: prevState.options.filter((option)=>optToRemove!==option)
        }))
    }

    handleDeleteOptions = ()=>{
        this.setState(()=>({options:[]}))
    }

    handleClearSelectedOption = ()=>{
        this.setState(()=>({selectedOption:undefined}))
    }

    handlePick = ()=>{
        const randomNum = Math.floor(Math.random() * this.state.options.length); 
        const option = this.state.options[randomNum]
        this.setState(()=>({
            selectedOption:option
        }))
    }

    handleAddOption = (option)=>{
        if(!option){
            return 'Enter valid input!'
        }

        else if(this.state.options.indexOf(option)>-1){     //indexOf returns the index of the item if present in the array else returns -1
            return 'Option already exists!'
        }

        this.setState((prevState)=>{
            return {
                options : prevState.options.concat(option)  //concat updates the array without changning its previous state
            }
        })
    }

    render(){                                               //removed the title prop since it is provided as a default.
        const subTitle = 'What do you wanna do'
        
        return (
            <div>
                <Header subTitle={subTitle}/>
                <div className = "container">
                    <Action 
                    hasOptions = {this.state.options.length>0}
                    handlePick = {this.handlePick}
                    />
                    <div className = "widget">
                        <Options 
                        options = {this.state.options} 
                        handleDeleteOptions = {this.handleDeleteOptions}
                        handleDeleteOption = {this.handleDeleteOption}
                        />
                        <AddOption 
                        handleAddOption = {this.handleAddOption}
                        />
                    </div>
                    
                </div>

                <OptionModal 
                    selectedOption = {this.state.selectedOption}
                    handleClearSelectedOption = {this.handleClearSelectedOption}
                />
            </div>
        )
    }
}




// IndecisionApp.defaultProps = {                              Not required to set up default props since the data is being fetched from local storge.
//     options:[]
// }

