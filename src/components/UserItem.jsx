import React from "react";
import classes from '../styles/UsersStyle.module.css'
import phone from './images/phone.png'
import email from './images/email.png'

const UserItem = ({user, setModal, setUser}) => {

    const showUser = () => {
        setModal(true);
        setUser(user);
    }

    return (
        <div className={classes.user} onClick={() => showUser()}>
            <div className={classes.user__name} >
                <h2>{user.name}</h2>
            </div>
            <div className={classes.user__info}>
                <div className={classes.phone}>
                    <img src={phone} alt="" className={classes.image__phone} />
                    {user.phone} <br/>
                </div>
                <div className={classes.email}>
                    <img src={email} alt="" className={classes.image__email} />
                    {user.email} <br/>
                </div>
            </div>
            
        </div>
    );
};

export default UserItem;