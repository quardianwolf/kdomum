import React, { useEffect, useRef  } from 'react'
import { useState } from 'react';

const Sfxplay = () => {
    
    const [category, setCategory] = useState('All');
    const allPlaylistRef = useRef(null);

    const handleClick = (name) => {
        setCategory(name);
      };

      useEffect(() => {
        function handleClick() {
          allPlaylistRef.current.click();
        }
        if (allPlaylistRef.current) {
          handleClick();
        }
      }, [allPlaylistRef]);
      
const categories = [
    {
        id: 1,
        name: 'All Playlists',
        children: [
            {
                id: 1,
                name: 'Jambox Selects',
                desc: 'A collection of our favorite tracks from the Jambox community',
                image: '../../kategoriresimleri/all/jamboxselect.jpg',
                button: 'view playlist',
                link: '/playlist/jamboxselects',
                class: 'playlist-list-img'
            },
            {
                id: 2,
                name: 'Upbeat & Good vibes',
                desc: 'A collection of our favorite tracks from the Jambox community',
                image: '../../kategoriresimleri/all/goodvibe.jpg',
                button: 'view playlist',
                link: '/playlist/jamboxselects',
                class: 'playlist-list-img'
            },
            {
                id: 3,
                name: 'Inspiring Epic Orchestra',
                desc: 'A collection of our favorite tracks from the Jambox community',
                image: '../../kategoriresimleri/all/jamboxselect.jpg',
                button: 'view playlist',
                link: '/playlist/jamboxselects',
                class: 'playlist-list-img'
            },
            {
                id: 4,
                name: 'Future Bass, Chillstep & Glitch Hop',
                desc: 'A collection of our favorite tracks from the Jambox community',
                image: '../../kategoriresimleri/all/chillstep.jpg',
                button: 'view playlist',
                link: '/playlist/jamboxselects',
                class: 'playlist-list-img'
            },
            {
                id: 5,
                name: 'Indie Dream Pop',
                desc: 'A collection of our favorite tracks from the Jambox community',
                image: '../../kategoriresimleri/all/indi.jpg',
                button: 'view playlist',
                link: '/playlist/jamboxselects',
                class: 'playlist-list-img'
            },
            {
                id: 6,
                name: 'Power Swagger Stadium Rock',
                desc: 'A collection of our favorite tracks from the Jambox community',
                image: '../../kategoriresimleri/all/unsplash.jpg',
                button: 'view playlist',
                link: '/playlist/jamboxselects',
                class: 'playlist-list-img'
            },
            {
                id: 7,
                name: 'Epic Hybrid Trailer Score',
                desc: 'A collection of our favorite tracks from the Jambox community',
                image: '../../kategoriresimleri/all/hybrid.jpg',
                button: 'view playlist',
                link: '/playlist/jamboxselects',
                class: 'playlist-list-img'
            },
            {
                id: 8,
                name: 'Neoclassical Underscore',
                desc: 'A collection of our favorite tracks from the Jambox community',
                image: '../../kategoriresimleri/all/romantic.jpg',
                button: 'view playlist',
                link: '/playlist/jamboxselects',
                class: 'playlist-list-img'
            },

        ]
    },
]






  return (
    <div className='play-list-container playlist-fade-effect'>
      
        <div className='title-container'>
            <div className='container-fluid'>
                <div className='align-items-center row'>
                    <div className='col-lg-3 col-md-4'><h3 className='title'>Playlists</h3></div>
                    <div className='col-lg-9 col-md-8'>
                        <div className='d-flex align-items-center justify-content-between category-search'>
                            
                            <ul className='category-list'>
                            {categories.map((category)=>(
                                <li ><button ref={allPlaylistRef} id="all-playlist" key={category.name} className='btn-category active' onClick={() => handleClick(category.name)}  style={{ fontWeight: category.name === category ? 'bold' : 'normal' }} >{category.name}</button></li>
                                ))}
                            </ul>
                     
                            <div className='search-box'>
                                <input type="text" name='searchKeyword' placeholder='Search' />
                                <button className='btn-search'>
                                    <span className='icon-moon icon-search_two'></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className='list-container'>
            <div className='container-fluid'>
                <div className='play-list-category-item'>
                    <div className='form-row row'>


                    {/* {categories.find((cat) => cat.name === category)?.children?.map((child) => (
                        <div key={child.id}>
                            <h1>{child.name}</h1>
                        </div>
                        ))} */}

<div className='form-row row'>
                        {categories.find((cat) => cat.name === category)?.children?.map((child) =>
                        <div className='col-lg-4 col-md-6' >
                           
                            <div className='item-container' >
                                <figure>
                                    <div className='item-image'>
                                        <img className={child.class} src={child.image} alt='cat-image'/>
                                    </div>
                                </figure>
                                <span className='last-update opacity-0'>{child.time}</span>
                                <div className='hover-content'>
                                    <h4 className='cat-name cursor-pointer'>{child.name}</h4>
                                    <p className='desc'>
                                    {child.desc}
                                    </p>
                                    <a href={child.link}>
                                    <button className='btn btn-view'>
                                       {child.button}
                                        <span className='icon-moon icon-arrow_go'></span>
                                    </button>
                                    </a>
                                </div>
                            </div>
                            
                        </div>
                        )}
                    </div>

                       
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>

   
  )
}
export default Sfxplay
