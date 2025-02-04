// import React, { useState } from 'react'
// import axios from 'axios';

// function Form() {
//     const[id,setId]=useState('')
//     const[name,setName]=useState('');
//     const[data,getData]=useState([])
//     function update1(e){
//         setId(e.target.value)
//     }
//     function update2(e){
//         setName(e.target.value)
//     }

//     function handleHost(){
//         axios.post("http://localhost:3002/data",{id,name})
//         .then(()=>{
//             alert("Data Vandhurchu")
            
//         })

//         .catch(()=>{
//             alert("Data varala")
            
//         })
//     }
//     function Get(){
//         axios.get("http://localhost:3002/data")
//         .then((response)=>{
//             getData(response.data)
//             console.log(data);
//             setId('')
//             setName('')
            
//         })
//         .catch(()=>{
//             alert("Data varala")
            
//         })
    
//     }
//   return (
//     <div >
        
//     <form />
//         <center>
//             <h1>Student Details</h1>
//            </center>
//         <fieldset/>
//             <legend>Sign in</legend>
//             <br/>
//             First Name:
//             <input type="text" placeholder="First Name" value={id} onChange={update1}/>
//             <br/>
//             <br/>
//             Last Name:
//             <input type="text" placeholder="Last Name"  value={name} onChange={update2}/>
//             <br/>
//             <br/>
//             <label>Gender</label>
//             <input type="radio" name="male"/>Male
//             <input type="radio" name="male"/>Female
//             <br/><br/>
//             <label>Study</label>
//             <input type="checkbox"/>10th
//             <input type="checkbox"/>12th
//             <input type="checkbox"/>UG
//             <br/><br/>
//             <label>Country</label>
//             <select placeholder="select">
//                 <option></option>
//                 <option>US</option>
//                 <option>UK</option>
//                 <option>Canada</option>
//             </select>
//             <br/><br/>
//             <input type="button" value="Sign in" onClick={handleHost}/>
//             <button onClick={Get}>Get</button>
//             {
//                 data && data.map((i)=>(
//                     <ul>
//                     <li key={i}>
//                     id:{i.id}
//                     name:{i.name}
//                     </li></ul>
//                 ))
                
//             }


//     </div>
//   )
// }

// export default Form
