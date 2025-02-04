import React, { useEffect, useState } from "react";
import { Link, useParams,useNavigate } from "react-router-dom";
import { ContactService } from "../../../services/ContactService";
import Spinner from "../../Spinner/Spinner";
let EditContact = () =>{
    let {contactId}= useParams();
    let navigate=useNavigate()
    let submitForm= async(e)=>{
            e.preventDefault();
            try{
                let response=await ContactService.updateContact(state.contact,contactId);
                if(response){
                    navigate('/contacts/list',{replace:true});
                }
            }
            catch(error){
                setState({
                    ...state,errorMessage:error.message});
                    navigate(`/contacts/edit/${contactId}`,{replace:false});
                }
    }
    let[state,setState]=useState({
        loading : false,
        contact : {
            name :'',
            photo : '',
            mobile : '',
            email :'',
            company : '',
            title:'',
            groupId:''
        },
        groups : [],
        errorMessage :''
    });
    useEffect(() => {
        async function fetchData() {

         try{
            setState({...state,loading:true});
          let response = await ContactService.getContact(contactId);
          let groupResponse=await ContactService.getGroups();
            setState({
                ...state,
                loading:false, 
                contact:response.data,
                groups:groupResponse.data
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
      }, [contactId]); 
      let updateInput=(e)=>{
        setState({
            ...state,
            contact:{
                ...state.contact,
                [e.target.name]:e.target.value
            }
        })
      }
      let { loading , contact,groups,errorMessage}=state;
    return(
        <>
        {
            loading ? <Spinner/>:<>
                <section classNam="add-contact p-3">
            <div className="container">
                <div className="row">
                    <div className="col">
                    <p className="h4 text-primary fw-bold">Edit Contact</p>
                    <p className="fst-italic">update existing {contact.name} information, such as name, phone number, and email address.</p>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <form onSubmit={submitForm}>
                            <div className="mb-2">
                                <input 
                                value={contact.name}
                                required="true"
                                name="name"
                                onChange={updateInput}
                                type="text" className="form-control" placeholder="Name"/>
                            </div>
                            <div className="mb-2">
                                <input 
                                value={contact.photo}
                                required="true"
                                name="photo"
                                onChange={updateInput}
                                type="text" className="form-control" placeholder="Photo URL"/>
                            </div>
                            <div className="mb-2">
                                <input 
                                value={contact.mobile}
                                required="true"
                                name="mobile"
                                onChange={updateInput}
                                type="text" className="form-control" placeholder="Mobile"/>
                            </div>
                            <div className="mb-2">
                                <input 
                                value={contact.email}
                                required="true"
                                name="email"
                                onChange={updateInput}
                                type="text" className="form-control" placeholder="E-mail"/>
                            </div>
                            <div className="mb-2">
                                <input 
                                value={contact.company}
                                required="true"
                                name="company"
                                onChange={updateInput}
                                type="text" className="form-control" placeholder="Company"/>
                            </div>
                            <div className="mb-2">
                                <input 
                                value={contact.title}
                                required="true"
                                name="title"
                                onChange={updateInput}
                                type="text" className="form-control" placeholder="Title"/>
                            </div>
                            <div className="mb-2">
                            <select 
                            value={contact.groupId}
                            required="true"
                            name="groupId"
                            onChange={updateInput}
                            className="form-control">
                                <option value="">Select a Group</option>
                                {groups.length>0 && 
                                    groups.map(group => {
                                        return(
                                            <option key={group.id} value={group.id}>{group.name}</option>
                                        )
                                    })}
                            </select>
                                
                            </div>
                            <div className="mb-2">
                                <input type="submit" className="btn btn-primary" value="Update" style={{width:"75px"}}/>
                                <Link to={'/contacts/list'} className="btn btn-dark ms-2">Cancel</Link>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <img src={contact.photo} className="contact-img" style={{width:"250px"}}/>
                    </div>
                </div>
            </div>            
        </section>    
            </>
        }
        
        
        </>
    )};
export default EditContact




