import React from "react";
import { Slide } from "react-slideshow-image";
import { Cats } from "../../../assets/images/Cats";
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles({
 images : {
   width: '100%'
 },
 nameCats : {
  fontSize: "30px",
  position: "absolute",
  top: "30px",
  margin: "15px",
  fontFamily: "'Oswald', sans-serif",
  fontWeight: 500,
  "@media (max-width:1400px)":{
    fontSize: "25px",
    top: "25px",
    margin: "15px",
    fontWeight: 500,
    
  },
  "@media (max-width:1200px)":{
    fontSize: "25px",
    top: "25px",
    margin: "15px",
    fontWeight: 400,
    
  },
  "@media (max-width:992px)":{
    fontSize: "20px",
    top: "20px",
    margin: "15px",
    fontWeight: 400,
    
  },
  "@media (max-width:768px)":{
    fontSize: "18px",
    top: "18px",
    margin: "10px",
    fontWeight: 300,
    
  },
  "@media (max-width:576px)":{
    fontSize: "14px",
    top: "10px",
    margin: "7px",
    fontWeight: 100,
    
  },

 },
 spacing :{
   margin:' 3px'
 }

});

const MultipleSlidesExample = () => {
  
  const classes = useStyles();

  const properties = {
    duration: 30000,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    indicators: false,
    "@media (max-width:768px)":{
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      indicators: false,
    },
    "@media (max-width:576px)":{
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      indicators: false,
    },
  };

  return (
    <div >
      
        <Slide {...properties}>
            {

              Cats.length && Cats.map((item,index)=>{

                return(
                  <div className={classes.spacing}>
                  <div ><img className={classes.images}  src={item.img} alt="" /></div>
                  <div className={classes.nameCats}>{item.title}</div>

                  </div>
                )
              })

            }

        
         
        </Slide>
      
    </div>
  );
};

export default MultipleSlidesExample;