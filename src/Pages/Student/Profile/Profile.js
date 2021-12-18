import React from 'react'
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

const clubs = [
    {
        name: "ACM",
        upcoming_events: 3,
        total_events: 13,
        description: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.",
        pp: "https://render.fineartamerica.com/images/rendered/default/poster/10/8/break/images/artworkimages/medium/1/retro-travel-autumn-landscape-sassan-filsoof.jpg"
    }, {
        name: "YES",
        upcoming_events: 3,
        total_events: 13,
        description: "Adipisicing eu laborum ad ullamco exercitation deserunt sit deserunt veniam adipisicing.",
        pp: "https://thumbs.dreamstime.com/z/green-garden-park-landscape-architecture-poster-landscaping-gardening-service-template-tree-plant-grass-120301540.jpg"
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
    }

]


const Profile = (props) => {


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
                                    props.pp
                                }/>
                        </div>
                        <div className="col-md-8 ">
                            <div className="header_right">
                                <h3>{
                                    props.name
                                }</h3>
                                <p>GE 250: {
                                    props.ge250_251
                                }</p>
                                <p>
                                    <span>bio:
                                    </span>
                                    {
                                    props.bio
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
