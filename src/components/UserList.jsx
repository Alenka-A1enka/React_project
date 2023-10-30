import React, { useState } from "react";
import UserItem from "./UserItem";
import classes from '../styles/UsersStyle.module.css'
import MyModal from "./UI/modal/MyModal";
import ModalContent from "./ModalContent";

const UserList = ({users, modal, setModal, info}) => {

    const [user, setUser] = useState({})

    return (
        <div className={classes.users}>
            {users.map(u =>
                <UserItem 
                    user={u} 
                    setUser={setUser}
                    setModal={setModal} 
                    key={u.id} 
                />    
            )}
            <MyModal visible={modal} setVisible={setModal}>
                <ModalContent 
                    user={user} 
                    info={info}
                    setVisible={setModal}
                />
            </MyModal>
        </div>
    )
}

export default UserList;