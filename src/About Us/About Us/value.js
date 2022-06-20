import React from 'react'
import './value.css'
import image from './image.jpg'
import book from './book.png'
import comm from './comm.png'
import anno from './anno.png'
import deliver from './deliver.png'

const value = () => {
  return (
    <div className='main'>
        <div className='image'>
        <img src={image} alt="imgae" className="imageee" />

        <div className='text'>Our Company Values</div>
        <div className='Container'>
            <div className='one'>
            <img src={book} alt="imgae" className="book" />
            <h5>Self improvment</h5>
            <p className='paras'>Never stop learning, never stop evolving into
                who we want to be and where we want to be 
            </p>



            </div>
            <div className='two'>
            <img src={comm} alt="imgae" className="comm" />
            <h5>Commitment</h5>
            <p className='paras'>Our work and hard work is over everything
                else. Our customers and vision are our guiding 
                beacons.
            </p>

            </div>

            <div className='three'>
            <img src={anno} alt="imgae" className="anno" />
            <h5>Transparency</h5>
            <p className='paras'>Openess with our team and clients
                . We raise issues and provide solutiond promptly.
            </p>

            </div>
            <div className='four'>
            <img src={deliver} alt="imgae" className="deliver" />
            <h5>Over Deliver</h5>
            <p className='paras'>Deliver more value than our team and clients expect. Every day, over every deliver</p>

            </div>

        </div>


        </div>
    </div>
  )
}

export default value