class Counter extends React.Component {

    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.state  = {
            count: 0
        }
    }

    componentDidMount(){
        const scount = localStorage.getItem('count')

        const count = parseInt(scount,10)

        if(!isNaN(count)){
            this.setState(()=>({count}))
        }
      
        
    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.count!==this.state.count)
        {
            const count = this.state.count
            localStorage.setItem('count',count)
        }
    }

    handleAddOne(){
        this.setState((prevState)=>{
            return {
                count: prevState.count +1
            }
        })
    }

    handleMinusOne(){
        this.setState((prevState)=>{
            return {
                count: prevState.count -1
            }
        })
    }

    handleReset(){                      //while resetting, no need of the previous state, because it doesn't matter.
        this.setState(()=>{             //simply return an object which updates the state value.    
            return {
                count:0
            }
        })
    }

    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick = {this.handleAddOne}>+1</button>
                <button onClick = {this.handleMinusOne}>-1</button>
                <button onClick = {this.handleReset}>Reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />,document.getElementById('app'))

// let count= 0;
// const addOne= ()=>{
//     count++;
//     renderCounterApp();
// }

// const minusOne = ()=>{
//     count--;
//     renderCounterApp();
// }

// const reset = ()=>{
//     count=0;
//     renderCounterApp();

// }

// const appRoot= document.getElementById('app')
// //const me= document.getElementById('me')

// //ReactDOM.render(templateTwo,me)

// const renderCounterApp= () => {
//     const templateTwo= (
//         <div> 
//             <h1> Count: {count}</h1>
//             <button onClick={addOne}> +1</button>
//             <button onClick = {minusOne}>-1</button>
//             <button onClick = {reset}>Reset</button>
            
//         </div>
//     );
//     ReactDOM.render(templateTwo,appRoot)           //renders the template. Takes in the template and the element in the html at which it needs to be rendered.
// }

// renderCounterApp();


