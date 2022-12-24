import React from 'react';
import {useDispatch, useSelector} from "react-redux"
import {Link, useNavigate} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { delet, update } from '../../redux/actions/userAction';


function Profile() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(((state)=>state.userReducer.user))
  
  const handelSubmit=(e)=>{
    e.preventdefault(e);
    dispatch(update(),navigate("/register"))
  }

  const handSubmit=(e)=>{
    e.preventdefault(e);
    dispatch(delet(),navigate("/"))
  }

  return (
    <Card style={{ width: '85rem' , height:'5rem' , justifyContent:"center"}}>
    <Card.Img variant="top" src="https://img-19.commentcamarche.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg" />
    <Card.Body>
      <Card.Title>welcome {user &&user.name}</Card.Title>
  <div style={{display:"flex" ,justifyContent:"center"}}>
      <Button variant="light"><Link to="/CV">create CV</Link></Button>
      <Button variant="light" onClick={handelSubmit}><Link>modify your account</Link></Button>
      <Button variant="light" onClick={handSubmit}><Link>delete your account</Link></Button>
      </div>
    </Card.Body>
  </Card>    
  );
}

export default Profile