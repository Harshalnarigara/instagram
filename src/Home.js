import React from 'react'
import { useSelector, useDispatch } from "react-redux";

function Home() {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()
  
    const increment = () => {
        dispatch({ type: "INCREMENT" })
    }
    
    return (
        <>
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </head>
            <div className='main'>
                <div className='id_name'>
                    <p>12:35</p>
                    <img src="https://t4.ftcdn.net/jpg/06/42/31/29/360_F_642312929_CaJZXQFHqKH6DUbWmU5ZbrYXsGDrkdNd.jpg" />
                </div>
                <div className='insta_name'>
                    <img src='https://blackhillsballoons.com/wp-content/uploads/2021/01/Instagram-Logo.png' />
                    <div className='add_btn'>
                        <img src='https://cdn.iconscout.com/icon/free/png-256/free-add-2047234-1730129.png' style={{cursor:'pointer'}}/>
                        <img src='https://cdn-icons-png.flaticon.com/128/5728/5728145.png' style={{ paddingRight: '10px' , cursor:'pointer' }} />
                    </div>
                </div>

                <div className='story'>
                    <div className='story_img'>
                        <img src='https://cdn.pixabay.com/photo/2024/03/13/19/06/ai-generated-8631634_1280.jpg' />
                    </div>
                    <div className='story_img'>
                        <img src='https://cdn.pixabay.com/photo/2024/02/12/14/56/woman-8568693_640.jpg' />
                    </div>
                    <div className='story_img'>
                        <img src='https://cdn.pixabay.com/photo/2024/03/08/09/55/cat-8620369_640.png' />
                    </div>
                    <div className='story_img'>
                        <img src='https://cdn.pixabay.com/photo/2024/04/03/20/06/ai-generated-8673761_640.jpg' />
                    </div>
                </div>
                <div className='str_id'>
                    <p style={{ paddingLeft: '5px' }}>Your Story</p>
                    <p>Dermot</p>
                    <p>Olivia</p>
                    <p>Gavin</p>
                </div>

                <div className='id'>
                    <div className='id_name1'>
                        <div className='id_imgs1'>
                            <img src='https://cdn.pixabay.com/photo/2024/03/13/19/06/ai-generated-8631634_640.jpg' className='img_id'/>
                        </div>
                        <div>
                        <p style={{marginTop:'8px',marginBottom:'3px'}}>mr_hasuu_a_1308a</p>
                        <p style={{fontSize:'10px',marginTop:'0px',textAlign:'left'}}>Rajkot, Gujarat</p>
                        </div>
                    </div>
                    <div>
                        <img src='https://static.thenounproject.com/png/1380510-200.png' style={{cursor:'pointer'}}/>
                    </div>
                </div>

                <div className='post'>
                    <img src='https://cdn.pixabay.com/photo/2024/01/20/07/51/ai-generated-8520530_640.png'/>
                </div>

                <div className='like'>
                    <div className='like1'>
                    <i class="fa-solid fa-heart" onClick={increment} style={{color:'red',fontSize:'22px'}}></i>
                    <i class="fa-regular fa-comment"></i>
                    <img src='https://cdn-icons-png.flaticon.com/128/5728/5728145.png'/>
                    </div>
                    <div className='like2'>
                    <i class="fa-regular fa-bookmark"></i>
                    </div>
                </div>


                <div className='comment'>
                    <p>Liked by <b>harshil_gajera007</b> and <b>{count} others</b></p>
                    <p><b>@mr_hasuu_a_1308a</b> ❤️‍🔥🥀🦅</p>
                </div>
                
                <div className='bottom'> 
                </div>

            </div>
        </>
    )
}

export default Home
