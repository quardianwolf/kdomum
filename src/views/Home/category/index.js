import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const genre = [
  {
    id: 1,
    name: "genre",
    child: [
      {
        id: 1,
        name: "pop",
        image: "../../kategoriresimleri/genre/pop.jpg",
        link: "genre/pop",
      },
      {
        id: 2,
        name: "rock",
        image: "../../kategoriresimleri/genre/rock.jpg",
        link: "genre/rock",
      },
      {
        id: 3,
        name: "hip-hop",
        image: "../../kategoriresimleri/genre/hiphop.jpg",
        link: "genre/hip-hop",
      },
      {
        id: 4,
        name: "classical",
        image: "../../kategoriresimleri/genre/classical.jpg",
        link: "genre/classical",
      },
      {
        id: 5,
        name: "electronic",
        image: "../../kategoriresimleri/genre/electronic.jpg",
        link: "genre/electronic",
      },
      {
        id: 6,
        name: "epic",
        image: "../../kategoriresimleri/genre/epic.jpg",
        link: "genre/epic",
      },
      {
        id: 7,
        name: "underscore",
        image: "../../kategoriresimleri/genre/underscore.jpg",
        link: "genre/underscore",
      },
      {
        id: 8,
        name: "vocal",
        image: "../../kategoriresimleri/genre/vocal.jpg",
        link: "genre/vocal",
      },
      {
        id: 9,
        name: "worldmusic",
        image: "../../kategoriresimleri/genre/worldmusic.jpg",
        link: "genre/worldmusic",
      },
      {
        id: 10,
        name: "beats",
        image: "../../kategoriresimleri/genre/beats.jpg",
        link: "genre/beats",
      },
      
    ],
  },
];

const mood = [
  {
    id: 1,
    name: "mood",
    child: [
      {
        id: 1,
        name: "feelgood",
        image: "../../kategoriresimleri/mood/feelgood.jpg",
        link: "mood/feelgood",
      },
      {
        id: 2,
        name: "gaming",
        image: "../../kategoriresimleri/mood/gaming.jpg",
        link: "mood/gaming",
      },
      {
        id: 3,
        name: "haunting",
        image: "../../kategoriresimleri/mood/haunting.jpg",
        link: "mood/haunting",
      },
      {
        id: 4,
        name: "innerpeace",
        image: "../../kategoriresimleri/mood/innerpeace.jpg",
        link: "mood/innerpeace",
      },
      {
        id: 5,
        name: "loverules",
        image: "../../kategoriresimleri/mood/loverules.jpg",
        link: "mood/loverules",
      },
      {
        id: 6,
        name: "podcast",
        image: "../../kategoriresimleri/mood/podcast.jpg",
        link: "mood/podcast",
      },
      {
        id: 7,
        name: "summervibes",
        image: "../../kategoriresimleri/mood/summervibes.jpg",
        link: "mood/summervibes",
      }
    ],
  }
]


const index = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };
  
  return (
    <div className="genre-mood-category">
      <h4 className="title">
        discover our favorite playlists by genre or mood
      </h4>
      {genre.map((item,index)=>(
     <div className="slider-wrapper" style={{ width: "100%" }}>
     <Slider {...settings}>
       {item.child.map((item, index) => (
         <div key={index}>
           <img src={item.image} className="slider-img" />
         </div>
       ))}
     </Slider>
     
   </div>
    ))}
        {mood.map((item,index)=>(
     <div className="slider-wrapper" style={{ width: "100%" }}>
     <Slider {...settings}>
       {item.child.map((item, index) => (
         <div key={index}>
           <img src={item.image} className="slider-img" />
         </div>
       ))}
     </Slider>
     
   </div>
    ))}
    
    </div>
  );
};

export default index;
