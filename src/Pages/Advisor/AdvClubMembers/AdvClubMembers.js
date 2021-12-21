import React, {useState} from 'react'
import {StudentPreview} from "../../../Components"
import "./AdvClubMembers.css"


const AdvClubMembers = () => {

    const members = [
        {
            name: "egrtgrt rtrtre",
            id: "21902240",
            department: "CS",
            position: 1
        },
        {
            name: "egertrtrt rtrrt",
            id: "21902240",
            department: "CS",
            position: 1
        },

        {
            name: "ege",
            id: "21902240",
            department: "CS",
            position: 1
        },

        {
            name: "ege er ",
            id: "21902240",
            department: "CS",
            position: 4
        }, {
            name: "eg ere",
            id: "21902240",
            department: "CS",
            position: 2
        }, {
            name: "ege gerg ",
            id: "21902240",
            department: "CS",
            position: 1
        }, {
            name: "ege ge erg  e",
            id: "21902240",
            department: "CS",
            position: 3
        }, {
            name: "egeerg  ererg erge re",
            id: "21902240",
            department: "CS",
            position: 2
        }, {
            name: "egeere er",
            id: "21902240",
            department: "CS",
            position: 2
        }, {
            name: "egeereg erergger",
            id: "21902240",
            department: "CS",
            position: 3
        }, {
            name: "egeergerg rerergrger",
            id: "21902240",
            department: "CS",
            position: 3
        }, {
            name: "ege",
            id: "21902240",
            department: "CS",
            position: 1
        }, {
            name: "ege",
            id: "21902240",
            department: "CS",
            position: 2
        }
    ];

    const [check1 , setCheck1] = useState(true);
    const [check2, setCheck2] = useState(true);
    const [check3, setCheck3] = useState(true);
    const [check4, setCheck4] = useState(true);
    return (
        <div className='adv-club-members'>
            <div className="container w-100">
                <div className="row w-100">
                    <div className="column col-sm-12 col-lg d-flex flex-column  align-items-center">
                        <div className="adv-st-filter">
                            <div className="adv-st-filter-head">
                                <h4>Filter Students</h4>
                            </div>
                           <div className="adv-st-filter-body">
                           <form>
                                <input onChange={()=>setCheck1(!check1)} type="checkbox" checked={check1} />
                                <label>Regular Members</label><br/><hr/>
                                <input onChange={()=>setCheck2(!check2)} type="checkbox" checked={check2} />
                                <label>Active Members</label><br/><hr/>
                                <input onChange={()=>setCheck3(!check3)} type="checkbox" checked={check3}  />
                                <label>Director Board Members</label><br/><hr/>
                                <input onChange={()=>setCheck4(!check4)} type="checkbox" checked={check4} />
                                <label>The President</label><br/>
                               
                            </form>
                           </div>
                        </div>
                    </div>
                    
                    <div className="column col-sm col-lg d-flex flex-column justify-content-center align-items-center">
                        {
                        members.filter(student=> 
                            (student.position == 1 && check1)
                            || (student.position == 2 && check2)
                            || (student.position == 3 && check3)
                            || (student.position == 4 && check4)
                            )
                        
                        
                        .map((student) => (
                             <StudentPreview name={
                                    student.name
                                }
                                id={
                                    student.id
                                }
                                department={
                                    student.department
                                }
                                position={
                                    student.position
                                }/> 
                        ))
                    } </div>
                </div>
            </div>

        </div>
    )
}

export default AdvClubMembers
//d-flex flex-column justify-content-center align-items-center