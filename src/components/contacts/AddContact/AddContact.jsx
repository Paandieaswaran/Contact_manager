import React, { useEffect, useState } from "react";
import { Link, replace, useNavigate } from "react-router-dom";
import { ContactService } from "../../../services/ContactService";
let AddContact = () =>{
    let navigate=useNavigate();
    let submitForm= async (e)=>{
        e.preventDefault();
        try{
            let response=await ContactService.createContact(state.contact);
            if(response){
                navigate('/contacts/list',{replace:true});
            }
        }
        catch(error){
            setState({
                ...state,errorMessage:error.message});
                navigate('/contact/add',{replace:false});
            }
        
    };
    let[state,setState]=useState({
        loding :false,
        contact:{
            name:'',
            photo:'',
            mobile:'',
            email:'',
            company:'',
            title:'',
            groupId:''
        },
        groups:[],
        errorMessage:''
    });
    let updateInput=(e)=>{
        setState({
            ...state,
            contact:{
                ...state.contact,
                [e.target.name]:e.target.value
                    }
        });

    };
    useEffect(() => {
        async function fetchData() {

         try{
            setState({...state,loading:true});
            let response =await ContactService.getGroups();
            setState({
                ...state,
                loading:false,
                
                groups:response.data 
            });     
        }
        catch(error){
            setState({
                ...state,
                loading:false,
                errorMessage:error.message,
                 
            }); 
        }       
     }
        fetchData();
      }, []);
      

let { loading , contact,groups,errorMessage}=state;
    return(
        <>
        <section className="add-contact p-3">
            <div className="container">
                <div className="row">
                    <div className="col">
                    <p className="h4 text-success fw-bold">Create Contact</p>
                    <p className="fst-italic">create a new contact by entering details like name, phone number, and email address.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <form onSubmit={submitForm}>
                            <div className="mb-2">
                                <input 
                                required={true}
                                name="name"
                                value={contact.name}
                                onChange={updateInput}
                                type="text" className="form-control" placeholder="Name"/>
                            </div>
                            <div className="mb-2">
                                
                                <input 
                                 required={true}
                                 name="photo"
                                 value={contact.photo}
                                 onChange={updateInput}
                                 type="text" className="form-control" placeholder="Photo URL"/>
                            </div>
                            <div className="mb-2">
                                <input 
                                 required={true}
                                 name="mobile"
                                 value={contact.mobile}
                                 onChange={updateInput}
                                 type="text" className="form-control" placeholder="Mobile"/>
                            </div>
                            <div className="mb-2">
                                <input 
                                 required={true}
                                 name="email"
                                 value={contact.email}
                                 onChange={updateInput}
                                 type="text" className="form-control" placeholder="E-mail"/>
                            </div>
                            <div className="mb-2">
                                <input required={true}
                                name="company"
                                value={contact.company}
                                onChange={updateInput}                                
                                type="text" className="form-control" placeholder="Company"/>
                            </div>
                            <div className="mb-2">
                                <input 
                                 required={true}
                                 name="title"
                                 value={contact.title}
                                 onChange={updateInput}
                                type="text" className="form-control" placeholder="Title"/>
                            </div>
                            <div className="mb-2">
                            <select className="form-control"
                             required={true}
                             name="groupId"
                             value={contact.groupId}
                             onChange={updateInput}>
                                <option value="">Select a Group</option>
                                {
                                    groups.length>0 && 
                                    groups.map(group => {
                                        return(
                                            <option key={group.id} value={group.id}>{group.name}</option>
                                        )
                                    })
                                }
                            </select>
                                
                            </div>
                            <div className="mb-2">
                                <input type="submit" className="btn btn-success" value="Create" style={{width:"75px"}}/>
                                <Link to={'/contacts/list'} className="btn btn-dark ms-2">Cancel</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>            
        </section>
        </>
    )};
export default AddContact


