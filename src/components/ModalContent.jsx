import React, { useState } from 'react'
import classes from '../styles/ModalStyle.module.css'
import icon from './images/icon.png'

const ModalContent = ({user, info, setVisible}) => {

    return (
        <div>
            <div className={classes.username_block}>
                <div className={classes.username}>
                    <h2>{user.name}</h2>
                </div>
                <div className={classes.icon}>
                    <img src={icon} alt="" onClick={() => setVisible(false)} />
                </div>
            </div>
            <div className={classes.user_info}>
                <div className={classes.title}>
                    <p>Телефон: </p><br/>
                    <p>Почта: </p><br/>
                    <p>Дата приема: </p><br/>
                    <p>Должность: </p><br/>
                    <p>Подразделение: </p><br/>
                </div>
                <div className={classes.body}>
                    <p>{user.phone}</p><br/>
                    <p>{user.email}</p><br/>
                    <p>{user.hire_date}</p><br/>
                    <p>{String(user.position_name).slice(0, 15)}</p><br/>
                    <p>{user.department}</p>
                </div>
            </div>
            <div className={classes.user_dopinfo}>
                <div className={classes.info_title}>
                    {info.info_title}
                </div>
                <div className={classes.info_body}>
                    {info.info_body}
                </div>
            </div>
        </div>
    )
}

export default ModalContent;