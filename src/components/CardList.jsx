import React, { useEffect, useState } from "react";
import CardImg from "../assets/cardimg.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router";

const CardList = ({title,category}) => {
  const [data,setData]=useState([])
 

 

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZmY5MGUzODQwZThiYThkYzRkYTUzZWZlMTE0NzlkZSIsIm5iZiI6MTc2OTk0MDUyOC4wMDQsInN1YiI6IjY5N2YyNjJmMTcyOGY5ZTg5MWQ0NDYzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oYZdjSwXbj-jkdGt6M3EwyAe8lqeWVm-_CeCoNk5AJE'
  }
};
useEffect(
  ()=>{
fetch(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`, options)

  .then(res => res.json())
  .then(res => setData(res.results))
  .catch(err => console.error(err));
  },[]
)


 console.log("Data in CardList:",data);
  console.log("Title",title, "Category",category);
  

  return (
    <div className="text-white md:px-4 ">
      <h2 className="pt-10 pb-5 text-lg font-medium">{title}</h2>
      <Swiper slidesPerView={"auto"} spaceBetween={10} className="mySwiper">
     
        {data.map((item,index) => (
         <SwiperSlide key={index} className="max-w-72">
          <Link to={`/movie/${item.id}`}>
          <img  src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
            alt="card_img" className="h-44 w-full object-center object-cover "/>
          </Link>
            
            <p className="text-center pt-2">{item.original_title}</p>
         </SwiperSlide>
        ))}
     </Swiper>
    </div>
  );
};

export default CardList;
