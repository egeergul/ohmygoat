import React from 'react'
import "./ClubProfile.css"
import {Event} from "../"

const ClubProfile = () => {

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

    return (
        <div>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center mt-5">
                    <div className="column col-md d-flex flex-row justify-content-center align-items-center ">
                        <img className="club-pp d-flex r" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Association_for_Computing_Machinery_%28ACM%29_logo.svg/1024px-Association_for_Computing_Machinery_%28ACM%29_logo.svg.png" alt="club profile picture"/>

                    </div>
                    <div className="column col-md d-flex flex-row justify-content-center align-items-center">
                        <div className="club-bio d-flex flex-column ">
                            <div className="club-bio-header d-flex flex-row justify-content-around">
                                <h3>Club name</h3>
                                <p className='ms-3'>100 members</p>
                            </div>
                            <div className="club-bio-body d-flex flex-column ">
                                <p>socials</p>
                                <p>bio</p>
                                <p>branches</p>
                                <button>Edit Profile</button>
                                <button>See Assignments</button>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="pin">
                        Magna adipisicing voluptate anim cillum officia occaecat pariatur duis ipsum irure id mollit id in. Cillum exercitation adipisicing minim ea incididunt aute amet. Cupidatat cillum do eiusmod eiusmod. Deserunt veniam exercitation tempor est cillum consectetur aliquip elit mollit nulla. Officia dolore cupidatat irure mollit. Amet exercitation aliquip mollit eiusmod consequat commodo labore. Ea voluptate labore ut incididunt eiusmod ut sint enim aliquip ut labore ut.
                    </div>
                </div>
                <div className="row mt-5">
                    <h3>CLub's Events</h3>
                    <div className='d-flex flex-row club-events'>
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

export default ClubProfile
