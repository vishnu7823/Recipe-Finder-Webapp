import React , {useState} from 'react'
import "./Slideshow.css";
import Choices from '../Choices/Choices';


const Slideshow = ()=> {

    const slides = [

        {image:'f1.jpg', text: " Discover Healthy Recipe"},
        {image:'f2.jpg', text: " Discover Healthy Recipe"},
        {image:'f3.jpg', text: " Discover Healthy Recipe"},
        {image:'f4.jpg', text: " Discover Healthy Recipe"},
        {image:'f5.jpg', text: " Discover Healthy Recipe"}
        ]

    const[currentslide,setCurrentslide] = useState(0);

    const handleprev = ()=>{
        
        setCurrentslide((prev)=> (prev===0 ? slides.length-1 : prev-1));
    }

    const handlenext = ()=>{
        setCurrentslide((prev)=> (prev===slides.length-1 ? 0 : prev+1));
    }
  return (
    <>
    <div className='slideshow'>
        <div className='slides'>
            <img src={slides[currentslide].image}/>
            <div className='text-overlap'>{slides[currentslide].text}</div>

        </div>
        <div className='arrow'>
        <button className='left-arrow' onClick={handleprev}>&#8592;</button>
        <button className='right-arrow' onClick={handlenext}>  &#8594;</button>
        </div>
       
      
    </div>
 
    <Choices/>

    </>
  )
}

export default Slideshow;