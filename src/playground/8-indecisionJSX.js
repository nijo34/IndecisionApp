 //JSX

 const app = {
    title:'Indecision App',
    subtitle:'Whats Up',
    options:[]
};

//&& returns the latter operand if the conditon is true. Used to hide a tag when it is not required.

const onFormSubmit = (e)=>{
    e.preventDefault();

   const option = e.target.elements.option.value

   if(option){
    app.options.push(option);
    e.target.elements.option.value= ''
    render()                             //re-renders the page with minimal modifications.
   }
}

const removeOptions = () =>{
    app.options = [];
    render();
}

const onMakeDecision = () =>{
    const randomNum = Math.floor(Math.random() * app.options.length);       //random creates a number bw 0&1.
    const option = app.options[randomNum]                                   //multiplied by the length of the options array and then rounded off.
    alert(option);
};

const appRoot= document.getElementById('app');


const render = ()=>{
    const template = (
        <div> 
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}                
            <p>{app.options.length>0 ? 'Here are the options:': 'No options available.'}</p>
            <button disabled = {app.options.length===0 } onClick = {onMakeDecision}>What should I do</button>
            <button onClick = {removeOptions}>Remove All</button>
            <ol>
                {
                    app.options.map((option)=><li key={option}>{option}</li>)     //adding keys allows JSX to optimise the rendering process.
                }
            </ol>
            <form onSubmit ={onFormSubmit}>
                <input type="text" name="option" autoComplete="off"/>
                <button>Add Option </button>
            </form>
        </div>
        );   //this is jsx syntax
    ReactDOM.render(template,appRoot)
}

render();

    
