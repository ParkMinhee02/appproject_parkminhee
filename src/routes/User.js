import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import { CiUser } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";


const User = () => {
   const {id}=useParams();
   const [user, setUser]=useState(null);
   const [loading, setLoading]=useState(true);
   useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/users/'+id).then(res=>{
         //console.log(res)
         setUser(res.data);
         setLoading(false);
      })
   }, [id]);


   return (
      <div className='userWrap'>
         <h1>User</h1>
         <div className="detail">
            {
               loading ? (<div className='loading'>Loading...</div>) : (<div className='userDetail'>
                  <p><span><CiUser /></span> 이름 : {user.name}</p>
                  <p><span><IoIosPhonePortrait /></span> 전화번호 : {user.phone}</p>
                  <p><span><MdAlternateEmail /></span> 이메일 : {user.email}</p>
                  <p><span><LuMapPin /></span> 주소 : {user.address.street}</p>
               </div>)
            }
         </div>
      </div>
   );
};

export default User;