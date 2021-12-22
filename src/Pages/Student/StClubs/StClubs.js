import React, {useState, useEffect} from 'react'
import "./StClubs.css"
import {Club} from "../../../Components"
import { useHistory } from 'react-router-dom';

//TODO 
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

const StClubs = (props) => { 
    const [clubs, setClubs] = useState(null);
    useEffect(() => {

        fetch(
            "http://localhost:8080/club/allClubs",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.token}`,
              },
              credentials: "include",
            }
          )
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
              setClubs(r)
              
            })
            .catch((e) => {
                console.log(e.message);
            });

    }, []);


    const [isMyClubs, setMyClubs] = useState(true);
    let history = useHistory();
    var mapped = isMyClubs ? my_clubs : clubs;
    return (
        <div>
            <div>

                <button onClick={
                    () => {
                        localStorage.setItem("onclub", "true");
                        history.push("/club/home");
                        window.location.reload();

                    }
                }>click</button>
                <div className="dflex m-3 d-flex justify-content-center">
                    <button className="btn btn-primary btn-block mx-3"
                        onClick={
                            () => {
                                setMyClubs(true)
                            }
                    }>My Clubs</button>

                    <button className="btn btn-primary btn-block"
                        onClick={
                            () => {
                                setMyClubs(false)
                            }
                    }>All Clubs</button>
                </div>

                <div className="st-clubs">
                    {
                        clubs && 

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
