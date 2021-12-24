import React from 'react'
import "./ClAssignments.css"
import { Assignment} from "../../../Components"
import { useHistory } from 'react-router-dom';


const assignments = [
    {
        club: "ACM",
        date: "13/10/2021",
        assigned_to: "ege",
        pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxciyGtNprXskRvTxL6sLgglWj5MXb5YQGcw&usqp=CAU",
        description: "Commodo mollit duis adipisicing duis magna occaecat."
    },
    {
        club: "YES",
        date: "13/9/2021",
        assigned_to: "ali",
        pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxciyGtNprXskRvTxL6sLgglWj5MXb5YQGcw&usqp=CAU",
        description: "Voluptate minim nisi dolor sit nostrud nisi minim pariatur cillum amet ut."
    },
    {
        club: "Chess",
        date: "01/10/2021",
        assigned_to: "arda",
        pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxciyGtNprXskRvTxL6sLgglWj5MXb5YQGcw&usqp=CAU",
        description: "Quis quis id ut consectetur nulla elit et. Quis sint in mollit et dolore laborum officia sunt. Veniam velit velit cupidatat id mollit eiusmod occaecat labore eiusmod proident ad ad. Eiusmod do non sit ipsum dolore fugiat. Veniam do eu excepteur amet occaecat laboris consectetur consectetur laborum."
    },
    {
        club: "OR",
        date: "30/09/2021",
        assigned_to: "efe",
        pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxciyGtNprXskRvTxL6sLgglWj5MXb5YQGcw&usqp=CAU",
        description: "Voluptate minim nisi dolor sit nostrud nisi minim pariatur cillum amet ut."
    }, {
        club: "YES",
        date: "12/10/2021",
        assigned_to: "batu",
        pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxciyGtNprXskRvTxL6sLgglWj5MXb5YQGcw&usqp=CAU",
        description: "Voluptate minim nisi dolor sit nostrud nisi minim pariatur cillum amet ut."
    },

];

const ClAssignments = (props) => {
    let history = useHistory();
    return (
        <div className='d-flex flex-column justify-content align-items-center'>
                <button 
                    onClick={()=>{props.setNav(2); history.push("create-assignment")}}
                
                className="m-4 btn btn-primary btn-block">Create New Assignment</button>

                <div className="cl-assignment">
                    {
                    assignments.map((assignment) => (
                        <Assignment club={
                                assignment.club
                            }
                            assigned_to={
                                assignment.assigned_to
                            }
                            date={
                                assignment.date
                            }
                            total_events={
                                assignment.total_events
                            }
                            description={
                                assignment.description
                            }
                            pp={
                                assignment.pp
                            }/>
                    ))
                } </div>


        </div>
    )
}

export default ClAssignments
