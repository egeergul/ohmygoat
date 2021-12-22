import React, {useState} from 'react'
import "./CreateClub.css"
import {AdminNavMid, ScrollableList, AdminClub} from "../../../Components"


const advisors = [
    {
        name: "eray.t",
        department: "CS"
    }, {
        name: "ali.b",
        department: "CS"
    }, {
        name: "noire.k",
        department: "CS"
    }, {
        name: "vavava.z",
        department: "CS"
    },
    {
        name: "eray.t",
        department: "CS"
    }, {
        name: "ali.b",
        department: "CS"
    }, {
        name: "noire.k",
        department: "CS"
    }, {
        name: "vavava.z",
        department: "CS"
    },
    {
        name: "eray.t",
        department: "CS"
    }, {
        name: "ali.b",
        department: "CS"
    }, {
        name: "noire.k",
        department: "CS"
    }, {
        name: "vavava.z",
        department: "CS"
    },
    {
        name: "eray.t",
        department: "CS"
    }, {
        name: "ali.b",
        department: "CS"
    }, {
        name: "noire.k",
        department: "CS"
    }, {
        name: "vavava.z",
        department: "CS"
    },
    {
        name: "eray.t",
        department: "CS"
    }, {
        name: "ali.b",
        department: "CS"
    }, {
        name: "noire.k",
        department: "CS"
    }, {
        name: "vavava.z",
        department: "CS"
    }
];

const my_clubs = [
{
    name: "my club",
    upcoming_events: 3,
    total_events: 13,
    description: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.",
    pp: "https://thumbs.dreamstime.com/z/green-garden-park-landscape-architecture-poster-landscaping-gardening-service-template-tree-plant-grass-120301540.jpg"
}, {
    name: "YES",
    upcoming_events: 3,
    total_events: 13,
    description: "Adipisicing eu laborum ad ullamco exercitation deserunt sit deserunt veniam adipisicing.",
    pp: "https://render.fineartamerica.com/images/rendered/default/poster/10/8/break/images/artworkimages/medium/1/retro-travel-autumn-landscape-sassan-filsoof.jpg"


}, {
    name: "OR",
    upcoming_events: 3,
    total_events: 13,
    description: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.",
    pp: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGiLoVwdejIfbG4sqBQ1XLOWTod5pb3PIUGA&usqp=CAU"
}, {
    name: "TDP",
    upcoming_events: 3,
    total_events: 13,
    description: "Yürüyüş yapalım spor spor!",
    pp: "https://productimages.hepsiburada.net/s/50/375/11037982130226.jpg"
}];
let listItems = []
for (let i = 0; i < 10000; i++) {
  listItems.push({ id: i, content: i })
}

const CreateClub = (props) => {
return (
    <div>
        <div className="stm-body-grid">
            <AdminNavMid/>
            <div className="bbbx"> 
            <div className="createclub-container">
            <div className="createclub-header">
            <p><b>
                Create Club
        </b>
            </p>
            </div>

                <div className="createclub-body">
                <div className="dflex m-3 d-flex justify-content center">
                    <div className='circle'>1<></>
                    </div>
                    <p>Specify Club Name</p>
                    
                    <div className='midcircle'>2<></>
                    </div>
                    <p>Assign An Available Advisor</p>
                    <div className='midcircle'>3<></>
                    </div>
                    <p>Click create club</p>
                    </div>
                    <div className="dflex m-3 d-flex justify-content center">
                    <div className="mt-3 clubbox center"> 
                    <input type="searchclub" className="create-name" name="" placeholder="Write Club Name"/> 
                    </div>
                    <div className="container">
                <div className="row">
                    <div className="col-md-6005 body-right-club" >
                        {
                        advisors.map((advisor) => (
                            <div className = "nameButton" >
                                <input type="checkbox" id="advname" name="advname" value="Paneer" />{advisor.name} </div>   ))
                    } </div>
                </div>
            </div>
            <div className= "centered"><b>OR</b></div>
            <div className="mt-3 mailbox center"> 
                    <input type="searchclub" className="create-name" name="" placeholder="advisor email"/> 
                    </div>
            </div>
            <button className="btn btn-primary btn-block create-button">
                    Create Club
                </button>

                </div>

            </div>


               
        </div>
    </div>
        </div>
)
}
export default CreateClub