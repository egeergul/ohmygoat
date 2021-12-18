import React, {useState} from 'react'
import "./StClubs.css"
import {StNav, Club} from "../../../Components"

const clubs = [
    {
        name: "all club",
        upcoming_events: 1,
        total_events: 13,
        description: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.",
        pp: "https://render.fineartamerica.com/images/rendered/default/poster/10/8/break/images/artworkimages/medium/1/retro-travel-autumn-landscape-sassan-filsoof.jpg"
    }, {
        name: "OR",
        upcoming_events: 3,
        total_events: 15,
        description: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.",
        pp: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGiLoVwdejIfbG4sqBQ1XLOWTod5pb3PIUGA&usqp=CAU"
    }, {
        name: "YES",
        upcoming_events: 3,
        total_events: 3,
        description: "Adipisicing eu laborum ad ullamco exercitation deserunt sit deserunt veniam adipisicing.",
        pp: "https://thumbs.dreamstime.com/z/green-garden-park-landscape-architecture-poster-landscaping-gardening-service-template-tree-plant-grass-120301540.jpg"
    }, {
        name: "TDP",
        upcoming_events: 3,
        total_events: 12,
        description: "Yürüyüş yapalım spor spor!",
        pp: "https://productimages.hepsiburada.net/s/50/375/11037982130226.jpg"
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

const StClubs = () => {
const [isMyClubs, setMyClubs] = useState(true);
var mapped = isMyClubs ? my_clubs : clubs;
return (
    <div>
        <div className="stm-body-grid">
            

            <div className="dflex m-3 d-flex justify-content-center">
                <button className="btn btn-primary btn-block mx-3" onClick={
                        () => {
                            setMyClubs(true)
                        }
                    }
                    >My Clubs</button>

                <button className="btn btn-primary btn-block"  onClick={
                    () => {
                        setMyClubs(false)
                    }
                }>All Clubs</button>
            </div>

            <div className="bbb">
                {

                mapped.map((club) => (
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


        </div>
    </div>
)}

export default StClubs
