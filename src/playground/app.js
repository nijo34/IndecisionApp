class IndecisionApp extends React.Component{
    constructor(props){
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state = {
            options :[]
        }
    }

    componentDidMount(){

        try {                                                                    //to check whether the data iS valid JSON
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)                                    //since local storage stores only string data.
            
            if(options){                                                        //calling this.setState for options only if there is some valid data within the local storage        
                this.setState(() => ({options }))}                              //implicitly returning an object and using the shorthand object definition since the key and the value share the same name.    
        }
        catch(e){

        }
   }

    componentDidUpdate(prevProps , prevState){
        if(prevState.options.length!==this.state.options.length)
        {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options',json)
        }
    }

    componentWillUnmount(){
        console.log('COmponent will unmount')
    }
    // handleDeleteOptions() {
    //     this.setState(()=>{
    //         return {
    //             options: []
    //         }
    //     })
    // }

    handleDeleteOption(optToRemove){
        this.setState((prevState)=>({
            options: prevState.options.filter((option)=>optToRemove!==option)
        }))
    }

    handleDeleteOptions(){
        this.setState(()=>({options:[]}))
    }

    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length); 
        const option = this.state.options[randomNum]
        alert(option)
    }

    handleAddOption(option){
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
                <Action 
                hasOptions = {this.state.options.length>0}
                handlePick = {this.handlePick}
                />
                <Options 
                options = {this.state.options} 
                handleDeleteOptions = {this.handleDeleteOptions}
                handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOption 
                handleAddOption = {this.handleAddOption}
                />
            </div>
        )
    }
}

// IndecisionApp.defaultProps = {                              Not required to set up default props since the data is being fetched from local storge.
//     options:[]
// }

const Header = (props)=>{
    return (
        <div>
            <h1>{props.title}</h1>         
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title:'Indecision'
}

const Action = (props)=>{                           //stateless component
    return (
        <div>
            <button
             onClick = {props.handlePick}
             disabled = {!props.hasOptions}
            >
            What to do?</button>
        </div>
    );
}

const Options = (props)=>{
    return (
        <div>
            <button onClick = {props.handleDeleteOptions}>Remove all options</button>
            {props.options.length===0 && <p>Please add an option to get started!</p>}
             {
                 props.options.map((option) => (
                    <Option 
                        key={option}                                                        //creating a key prop since array requires keys.
                        optionText = {option}
                        handleDeleteOption = {props.handleDeleteOption}
                    />                                              
                 ))                 
             }
        </div>
    )
}

const Option = (props)=>{
    return (
        <div>
          Option:  {props.optionText}     
          <button 
            onClick = {(e)=>{                                //passing an inline arrow function instead of directly calling the event handler
                props.handleDeleteOption(props.optionText)
            }}
          >
            Remove
        </button>        
        </div>
    )
}

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {                                              //error state is required only within this component, so everytime the option gets rendered, if there's an error, it'll be rendered.
            error: undefined
        }
    }

    handleAddOption(e){
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
                {this.state.error && <p>{this.state.error}</p>}     
                <form onSubmit = {this.handleAddOption}>
                    <input type = "text" name="option" autoComplete = "off"/>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}
 
ReactDOM.render(<IndecisionApp />,document.getElementById('app'))           //redering a component instead of a JSX template.