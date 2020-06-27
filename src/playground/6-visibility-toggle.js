class VisibilityToggle extends React.Component{

    constructor(props){
        super(props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
        this.state = {
            visibility:false
        }
    }

    handleToggleVisibility(){
        this.setState((prevState)=>{
           return {
            visibility: !prevState.visibility
           } 
        })
    }

    render()
    {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick = {this.handleToggleVisibility}>
                {this.state.visibility?'Hide the details':'Show the details'}
                </button>

                {this.state.visibility && (
                    <div>
                        <p>Here are the details</p>
                    </div>
                )}
                
            </div>
        )
    }


} 

ReactDOM.render(<VisibilityToggle />,document.getElementById('app'))


// let visibility=false;

// const toggle = {
//     title:'Visibility Toggle'
// }

// const toggleVisibility = ()=>{
//     visibility=!visibility;
//     render();
// }


// const appRoot = document.getElementById('app');

// const render = ()=>{
//     const template = (
//         <div>
//             <h1>{toggle.title}</h1>
//             <button id ="button1" onClick={toggleVisibility}>
//                 {
//                     visibility? 'Hide the details':'Show the details'
//                 }
//             </button>
//             {visibility && (
//                 <div>
//                     <p>This is some element</p>
//                     <button>Hi all </button>
//                 </div>
//             )

//             }    
//         </div>
//     );
//     ReactDOM.render(template,appRoot)
// }


// render()





