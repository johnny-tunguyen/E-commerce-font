import React,{useState} from 'react';
import {Modal} from 'antd';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { StarOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';



const RatingModal = ({children}) => {
    const {user}= useSelector((state)=>({...state}))
    const [modalVisible, setModalVisible] = useState(false);
    let history = useHistory()
    let params = useParams()
    const modelChangedHandler = ()=>{
        if (user && user.token){
            //if the user is login then the modal is visible
            setModalVisible(true)
        }else{
            //else send them to login and then come back using history object from react-router-dom
            history.push({
                pathname:"/login",
                state:{from:`/product/${params.slug}`}
            })
        }

    }
  return (
    <>
    <div onClick={modelChangedHandler}>
        <StarOutlined className='text-danger'/> <br/>{" "}
        {user? "Leave rating":"Login to leave a rating"}
    </div>
    <Modal title="Leave your rating" 
    centered 
    visible={modalVisible}
    onOk={()=>{
        setModalVisible(false)
        toast.success(`Thanks for your review`)
    }}
    onCancel={()=>{
        setModalVisible(false)
    }}
    >{children}</Modal>
    </>
  )
} 

export default RatingModal