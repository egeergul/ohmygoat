import React, {useState} from 'react';
import {Notification} from "../../../Components"
import "./ClNotifications.css"

const ClNotifications = () => {
    const notifications = [
        {
            club: "ACM",
            date: "10/10/2021",
            isReq: true,
            pending: "pending",
            notification: "Ea incididunt aute minim minim ipsum aliquip magna dolore enim ut elit occaecat."
        },
        {
            club: "YES",
            date: "3/9/2021",
            isReq: false,
            pending: "pending",
            notification: "Ea incididunt aute minim minim ipsum aliquip magna dolore enim ut elit occaecat."
        },
        {
            club: "OR",
            date: "7/12/2021",
            isReq: false,
            pending: "pending",
            notification: "Ea incididunt aute minim minim ipsum aliquip magna dolore enim ut elit occaecat."
        },
        {
            club: "TDP",
            date: "1/14/2021",
            isReq: true,
            pending: "approved",
            notification: "Ea incididunt aute minim minim ipsum aliquip magna dolore enim ut elit occaecat."
        }, {
            club: "Chess",
            date: "9/7/2021",
            isReq: false,
            pending: "pending",
            notification: "Ea incididunt aute minim minim ipsum aliquip magna dolore enim ut elit occaecat."
        }, {
            club: "ACM",
            date: "2/7/2021",
            isReq: true,
            pending: "pending",
            notification: "Ea incididunt aute minim minim ipsum aliquip magna dolore enim ut elit occaecat."
        }, {
            club: "YES",
            date: "23/6/2021",
            isReq: true,
            pending: "approved",
            notification: "Ea incididunt aute minim minim ipsum aliquip magna dolore enim ut elit occaecat."
        }, {
            club: "Chess",
            date: "9/7/2021",
            isReq: false,
            pending: "pending",
            notification: "Ea incididunt aute minim minim ipsum aliquip magna dolore enim ut elit occaecat."
        }, {
            club: "OR",
            date: "9/7/2021",
            isReq: false,
            pending: "pending",
            notification: "Ea incididunt aute minim minim ipsum aliquip magna dolore enim ut elit occaecat."
        }, {
            club: "ACM",
            date: "12/11/2021",
            isReq: true,
            pending: "pending",
            notification: "Ea incididunt aute minim minim ipsum aliquip magna dolore enim ut elit occaecat."
        }
    ]

    return (
        <div >
            <div className="cl-notifications">
                {
                notifications.map((notification) => ( <Notification club={
                        notification.club
                    }
                    date={
                        notification.date
                    }
                    isReq={
                        notification.isReq
                    }
                    pending={
                        notification.pending
                    }
                    notification={
                        notification.notification
                    }/> ))
            } </div>
        </div>
    )
}

export default ClNotifications
