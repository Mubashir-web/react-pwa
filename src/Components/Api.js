import Axios from 'axios'
import React, { Component } from 'react'

export default class Api extends Component {
    constructor(){
        super()
        this.state={
        
            items : []
        }
    }
    
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=> 
          this.setState({items:response.data})
            
          
        )
        
        }
    
    render() {
        var {items}= this.state
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>name</td>
                            <td>email</td>
                            <td>Address</td>
                           
                        </tr>
                        </thead>
                        <tbody>
                        { items.map((itm,k)=>{
                            return(
                            
                                <tr>
                            <td>{itm.id}</td>
                            <td>{itm.name}</td>
                            <td>{itm.email}</td>
                            <td>{itm.address.street}</td>
                            </tr> )
                            
    
                        })
                    }
                    </tbody>
                </table>
              
    
              <API />
                
            </div>
        )
    }
    }
    
    
    
        
//         this.state={
//             isLoaded : false,
//             items1 : []
//         }
//     }

//     componentDidMount(){
//         Axios.get('https://jsonplaceholder.typicode.com/users')
//         .then(response=> 
        
//             this.setState({
//                 isLoaded: true,
//                 items1 : response.data

//             })
//         )
//         }
    
//     render() {
//         var {items1}= this.state
//         return (
//             <div>
//                 {/* <table>
//                     <thead>
//                         <tr>
//                             <td>Name</td>
//                             <td>Address</td>
//                             <td>Email</td>
//                         </tr>
//                         </thead>
//                         <tbody>
//                         {this.state.items.map((itm,k)=>{
//                             return(
                            
//                                 <tr>
//                             <td>{itm.name}</td>
//                             <td>{itm.address.street}</td>
//                             <td>{itm.email}</td></tr> )
                            

//                         })
//                     }
//                     </tbody>
//                 </table> */}
//               <ul>
//                   {items1.map(itm=> {
//                       <li key={itm.id}>
//                       Name:{itm.name} | Email:{itm.email}
//                       </li>
//                   })}
//               </ul>
                
//             </div>
//         )
//     }
// }

