import React from 'react'
import {Event} from "../../../Components"
import "./AdvHome.css"

const AdvHome = () => {

    const feed = [
        {club:"ACM", name:"Tech Summit", mode: "Only Club Members",
         description: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.",
         img: "https://render.fineartamerica.com/images/rendered/default/poster/10/8/break/images/artworkimages/medium/1/retro-travel-autumn-landscape-sassan-filsoof.jpg" 
        },
        {club:"YES", name:"YES BT", mode: "Public",
         description: "Adipisicing eu laborum ad ullamco exercitation deserunt sit deserunt veniam adipisicing.",
         img: "https://thumbs.dreamstime.com/z/green-garden-park-landscape-architecture-poster-landscaping-gardening-service-template-tree-plant-grass-120301540.jpg"  },
        {club:"OR", name:"OR Fest", mode: "Only Director Board", 
          description: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.",
        img:" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGiLoVwdejIfbG4sqBQ1XLOWTod5pb3PIUGA&usqp=CAU"  },
        {club:"TDP", name:"Yürüyüş Yapalım", mode: "Public", 
         description: "Yürüyüş yapalım spor spor!" ,
         img: "https://productimages.hepsiburada.net/s/50/375/11037982130226.jpg" }
       
    ]

    return (
        <div> 
            <div className="adv-home">
            {
            feed.map((event) => (
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
            } 
            </div>
        </div>
    )
}

export default AdvHome
