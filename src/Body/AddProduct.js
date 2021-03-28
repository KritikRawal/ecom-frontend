// import { Component } from "react";
// import axios from 'axios';
// class AddProduct extends Component{
   
//     state = {
//         pname : '',
//         pprice : '',
//         pdesc : '',
//         config :{
//         headers :{
//                 'authorization' :`Bearer ${localStorage.getItem('token')}`}
//             }
//         }
//                 changeHandler=(e)=>{
//                     this.setState({
//                             [e.target.name] : e.target.value
//                     })
//                 }
//                 submitData= (e)=>{
//                     e.preventDefault();
//                     const data ={
//                         pname : this.state.pname,
//                         pprice : this.state.pprice,
//                         pdesc : this.state.pdesc

//                     }
//                         axios.post("http://localhost:90/product/insert"+this.state)
            
//                         .then((response)=>{
//                             console.log(response)
//                         }).catch((err)=>{
            
//                         })
//                     }
                
            
//                 render(){
//                     return(
//                         <div>
//                         <form>
//                             <p>
//                                 Product Name
//                                 <input type = "Text" name="pname" value={this.state.pname}
//                                 onChange = {this.changeHandler}
//                                 />
//                             </p>
        
//                             <p>
//                                 Product Price
//                                 <input type = "Text" name="pprice" value={this.state.pprice}
//                                 onChange = {this.changeHandler}
//                                 />
//                             </p>
        
//                             <p>
//                                 Product Desc
//                                 <input type = "Text" name="pdesc" value={this.state.pdesc}
//                                 onChange = {this.changeHandler}
//                                 />
//                             </p>
//                             <p>
//                                 <button onclick={this.submitData}> Add</button>
//                             </p>
//                         </form>
//                     </div>
//                     )
//                 }
//             }

// export default AddProduct;