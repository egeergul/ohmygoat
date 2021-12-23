import React, {useEffect, useState} from 'react'
import "./Profile.css"
import {StNav, Event, Club} from "../../../Components"


const events = [
    {
        club: "ACM",
        name: "Tech Summit",
        mode: "Only Club Members",
        description: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.",
        img: "https://render.fineartamerica.com/images/rendered/default/poster/10/8/break/images/artworkimages/medium/1/retro-travel-autumn-landscape-sassan-filsoof.jpg"
    }, {
        club: "YES",
        name: "YES BT",
        mode: "Public",
        description: "Adipisicing eu laborum ad ullamco exercitation deserunt sit deserunt veniam adipisicing.",
        img: "https://thumbs.dreamstime.com/z/green-garden-park-landscape-architecture-poster-landscaping-gardening-service-template-tree-plant-grass-120301540.jpg"
    }, {
        club: "OR",
        name: "OR Fest",
        mode: "Only Director Board",
        description: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.",
        img: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGiLoVwdejIfbG4sqBQ1XLOWTod5pb3PIUGA&usqp=CAU"
    }, {
        club: "TDP",
        name: "Yürüyüş Yapalım",
        mode: "Public",
        description: "Yürüyüş yapalım spor spor!",
        img: "https://productimages.hepsiburada.net/s/50/375/11037982130226.jpg"
    }

]

const Profile = (props) => {
    const [clubs, setmyClubs] = useState([]);
    console.log(localStorage.getItem("id"));
    console.log(localStorage.id);
    const a = localStorage.getItem("id");
    useEffect(() => {

        fetch(
            "http://localhost:8080/club/getStudentClub?id=" + a,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.token
                    }`,
                },
                credentials: "include",
            })
            .then((r) => {
                if (r.ok) {
                    console.log(r);
                    return r;
                }
                if (r.status === 401 || r.status === 403 || r.status === 500) {
                    return Promise.reject(new Error("Bir hata oluştu " + r.status ));
                } else {
                    return Promise.reject(new Error("Bilinmeyen bir hata oluştu."));
                }
            })
            .then((r) => r.json())
            .then((r) => {
                console.log(r);
                setmyClubs(r)

            })
            .catch((e) => {
                console.log(e.message);
            });
    }, []);

    const [events, setmyEvents] = useState([]);
    const b = localStorage.getItem("id");
    useEffect(() => {

        fetch(
            "http://localhost:8080/event/myEvents?id=" + b,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.token
                    }`,
                },
                credentials: "include",
            },
            console.log("olmayan"))
            .then((r) => {
                if (r.ok) {
                    console.log(r);
                    return r;
                }
                if (r.status === 401 || r.status === 403 || r.status === 500) {
                    return Promise.reject(new Error("Bir hata oluştu " + r.status ));
                }
                return Promise.reject(new Error("Bilinmeyen bir hata oluştu."));
            })
            .then((r) => r.json())
            .then((r) => {
                console.log(r);
                setmyEvents(r)
            })
            .catch((e) => {
                console.log(e.message);
            });
    }, []);

    return (
        <div className="st-body-grid">
            <div className="flex_cont">
                <button className="btn btn-primary btn-block del_my_acc">
                    Delete My Account
                </button>
                <div className="container">
                    <div className="row header_bio">
                        <div className="col-md-4 header_left">
                            <img className="pp_class"
                                src={
                                    localStorage.pp
                                }/>
                        </div>
                        <div className="col-md-8 ">
                            <div className="header_right">
                                <h3>{
                                    localStorage.name
                                }</h3>
                                <p>GE 250: {
                                    localStorage.ge250_251
                                }</p>
                                <p>
                                    <span>bio:
                                    </span>
                                    {
                                    localStorage.bio
                                }</p>
                                <button className="btn btn-primary btn-block">Edit Profile</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="profile_clubs col-lg-6">
                        {
                        clubs.map((club) => (
                            //TODO
                            //if (club.description.length() > 15)
                            //    club.description = club.description[0:15] + "...";

                            <Club name={
                                    club.name
                                }
                                upcoming_events={
                                    club.upcoming_events
                                }
                                total_events={
                                    club.total_events
                                }
                                description={
                                    club.description
                                }
                                pp={
                                    club.pp
                                }/>
                        ))
                    } </div>
                    <div className="profile_events col-lg-6">
                        {
                        events.map((event) => (
                            <Event club={
                                    event.club
                                }
                                name={
                                    event.name
                                }
                                mode={
                                    event.mode
                                }
                                description={
                                    event.description
                                }
                                img={
                                    event.img
                                }/>
                        ))
                    } </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
