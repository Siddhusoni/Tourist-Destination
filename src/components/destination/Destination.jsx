import React from 'react'
import './destination.css'
import DestinationData from './DestinationData'
import Image from '../../assets/2.jpg'
import Rishi1 from '../../assets/rishi1.jpg'
import Rishi2 from '../../assets/rishi2.jpg'
const Destination = () => {
  return (
    <>
      <div className="destination">
        <h1>Popular Destination</h1>
        <p>Tours give you the opportunity to see a lot,within a time frame.</p>

        <DestinationData className="first-des"

          heading='Shimla, Himachal Pradesh'
          text="Shimla is often covered along with nearby towns of Kufri, a hill-station almost always covered by snow and Chail, famous
                for a huge palace and the highest cricket ground in the world. 
               Tourists also visit the famous Jakhu Temple and engage in sightseeing at various viewpoints during their trip to Shimla."

          img1="https://w0.peakpx.com/wallpaper/438/103/HD-wallpaper-snowfall-himachal-shimla-shashank-india.jpg"
          img2="https://media.istockphoto.com/id/530844529/photo/shimla-mountains-and-houses.jpg?s=612x612&w=0&k=20&c=aV8TWZ9fsCLhKRxTaP9xiSq0srmWHG8yhK9NDr7WgvI="
        />

        <DestinationData className="first-des-reverse"

          heading='Rishikesh, Uttarakhand'
          text="Rishikesh, also spelt as Hrishikesh, is a city near Dehradun in Dehradun district of the Indian state Uttarakhand. It is situated 
            on the right bank of the Ganges River and is a pilgrimage town for Hindus, with ancient sages and saints meditating here in search of higher 
            knowledge."

          img1="https://t4.ftcdn.net/jpg/02/68/06/03/360_F_268060371_nFgoQQSnlBxODiV4pDpfq5vqXeavzisd.jpg"
          img2="https://png.pngtree.com/thumb_back/fh260/background/20230308/pngtree-rishikesh-at-night-river-india-photo-image_1867472.jpg"
        />


        <DestinationData className="first-des"

          heading='Manali, Himachal Pradesh
              '
          text="A gift of the Himalayas to the world, Manali is a beautiful township nestled in the picturesque Beas River valley. It is a rustic enclave
             known for its cool climate and snow-capped mountains, offering respite to tourists escaping scorching heat of the plains."

          img1="https://gos3.ibcdn.com/aa79f8d4da7c11eca0380a58a9feac02.jpg"
          img2="https://www.savaari.com/blog/wp-content/uploads/2021/12/Travel-Manali-view-point-87239-pixahive.jpg"
        />



        <DestinationData className="first-des-reverse"

          heading='Taj Mahal, Agra'
          text="The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor,
 Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal."

          img1="https://images.asiahighlights.com/allpicture/2019/10/21827d2fa0344e4cbaf1e4e0_cut_600x800_315.jpg"
          img2="https://www.travelandleisure.com/thmb/wdUcyBQyQ0wUVs4wLahp0iWgZhc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/taj-mahal-agra-india-TAJ0217-9eab8f20d11d4391901867ed1ce222b8.jpg"
        />


      </div>
    </>
  )
}

export default Destination
