import React from 'react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ColorList = () => {

    const [colorData, setColorData] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const url = "http://localhost:3000/colors";

    useEffect(() => {
        setLoading(true);
        getColorData();
    }, []);

    const getColorData = async () => {
        let response = await fetch(url);
        response = await response.json();
        setColorData(response);
        setLoading(false);
    }
    const deleteUser = async(id)=>{
        let response = await fetch(url+"/"+id,{
            method:"delete",

        });
        response = await response.json();
        if(response){
            alert("Record Deleted");
            getColorData();
        }
    }

    const editUser=(id)=>{
        navigate("/edit/"+id);
    }

  return (
    <div style={{textAlign:"center"}}>
            <ul className='user-list user-list-head'>
                <li>Name</li>
                <li>Age</li>
                <li>Email</li>
                <li>Action</li>
            </ul>
            {
                !loading ?
                    userData.map((user) => (
                        <div>
                            <hr />
                            <ul key={user.id} className='user-list'>
                                <li>{user.name}</li>
                                <li>{user.age}</li>
                                <li>{user.email}</li>
                                <li><button onClick={()=>deleteUser(user.id)}>Delete</button>
                                    <button onClick={()=>editUser(user.id)}>Edit</button>
                                </li>
                            </ul>
                        </div>
                    )) : "Data Loading"
            }
        </div>
  )
}

export default ColorList
