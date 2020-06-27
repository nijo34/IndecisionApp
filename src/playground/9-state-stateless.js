
// class Header extends React.Component {              //this gives all of the features of react within the custom made class.
//     render(){                                       //gets access to all the props on the props object
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>         
//                 <h2>{this.props.subTitle}</h2>
//             </div>
//         )
//     }
// }

// class Action extends React.Component {
//    render(){
//         return (
//             <div>
//                 <button
//                  onClick = {this.props.handlePick}
//                  disabled = {!this.props.hasOptions}
//                 >
//                 What to do?</button>
//             </div>
//         );
//     }
// }


// class Options extends React.Component{
//     render(){
//         return (
//             <div>
//                 <button onClick = {this.props.handleDeleteOptions}>Remove all options</button>
//                  {
//                      this.props.options.map((option)=> <Option key={option} optionText = {option}/>)                 //creating a key prop since array requires keys.
//                  }
                 

//             </div>
//         )
//     }
// }


// class Option extends React.Component {              //cannot access the key prop since it is a keyword and hence a seperate prop needs to be created.
//     render(){
//         return (
//             <div>
//               Option:  {this.props.optionText}             
//             </div>
//         )
        
//     }
// }

// const User = (props)=>{
//     return (
//         <div> 
//             <p>Name: {props.name}</p>
//             <p>Age: </p>
//         </div>
//     )
// }