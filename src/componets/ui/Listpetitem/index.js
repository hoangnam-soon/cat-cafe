import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { petitem } from '../../../assets/images/Petitem';

const useStyles =makeStyles({

     

    images : {
        maxWidth : 255,
        width : '100%',
        transition : 'all 0.5s',
        "&:hover": {
          transform: "scale(1.03)"
        },
        "@media (max-width:1475px)":{
          maxWidth : 210
           
         },
         "@media (max-width:1200px)":{
          maxWidth : 255
           
         },
        "@media (max-width:768px)":{
         maxWidth : 210
          
        },
        "@media (max-width:576px)":{
          maxWidth : 160
           
         },
        "@media (max-width:400px)":{
          maxWidth : 162
           
         },
        



    },
    overimg : {
      overflow : 'hidden'
    },
    inforTitle:{
        padding: '12px 15px',
        
         "@media (max-width:768px)":{
          padding: '7px 10px',
          marginTop : -15
            
          }

    },
    h3title:{
      marginBottom: 0,
      marginTop :0,
      maxHeight :60,
      // height : 60,
      lineHeight:1.4,
      "@media (max-width:576px)":{
       display :'grid',
      //  height :50,
        marginTop:20
      },
      // "@media (max-width:768px)":{
      //   maxHeight :
         
       
       
      
    },

    titleItem1 :{
        color : 'black',
        // textAlign: 'start',
        fontSize:16,
        fontFamily: 'Oswald',
        fontWeight:'500',
        textTransform: 'uppercase',
        transition : 'all 0.4s',
        '&:hover':{
          color : '#EA8025'
        },
        
        
        "@media (max-width:1200px)":{
          // margin : '10px 20px',
          fontSize :16
          
        },
        "@media (max-width:768px)":{
          // margin : '10px 40px'
          fontSize : 14
        },
        "@media (max-width:576px)":{
          // margin : '10px 10px',
          fontSize :12
          
        },
        
    
      },
      titleItem2 :{
        fontSize:16,
        margin : '10px 0px',
        // textAlign: 'start',
        color: '#EA8025',
        fontFamily: 'Oswald',
        fontWeight:'500',
        textTransform: 'uppercase',
       
        "@media (max-width:1200px)":{
          // margin : '10px 20px',
          fontSize :16
          
        },
        "@media (max-width:768px)":{
          // margin : '10px 40px'
          fontSize : 14
        },
        "@media (max-width:576px)":{
          // margin : '10px 10px',
          fontSize :12
          
        },
        
        
    
      },
      buyButton :{
        '&:hover':{
          backgroundPosition: 'left',
          color : 'black',
    
        },
        display: 'inline-block',
        padding: '8px 15px',
        border: '1px solid #666666',
        color: 'white',
        borderRadius: '3px',
        background: 'linear-gradient(to left, #EA8025 50%, #fff 50%) right',
        backgroundSize: '200%',
        transition: 'all 0.7s cubic-bezier(0.5,1.6,0.4,0.7)',
        margin: '30px 0px',
        float : 'left',
        "@media (max-width:1200px)":{
          margin : '20px 0px',
          fontSize : '14px'
          
        },
        
        "@media (max-width:768px)":{
          margin : '10px 0px',
          
          
        },
        
        "@media (max-width:576px)":{
          margin : '10px 0px',
          fontSize : '12px'
          
        },
    
    
    },
    wrapItem : {
        display : 'flex',
        flexWrap : 'wrap',
       
    },
    backgroundItem : {
        flexBasis : 'unset',
        margin: '10px',
        backgroundColor : '#f3c7c7',
        "@media (max-width:576px)":{
          margin : 5,
         
          
        },
        
    },
    titleLeft : {
        '&:after':{
          content: '""',
          width: '50%',
          height: '4px',
          backgroundColor: '#EA8025',
          display: 'block',
       
          
      },
      fontSize: '30px',
      textTransform: 'uppercase',
      fontFamily: 'Oswald',
      fontWeight:'500',
      color: 'black',
      width: 'fit-content',
      margin : '5px 10px',
      '@media (max-width : 768px)':{
        fontSize:'30px'
    
      },
      '@media (max-width : 568px)':{
        fontSize:'20px'
      }
    
      
      
      },

});




const Listpetitem = () => {

  const classes = useStyles();

    const renderlistData= (list) =>{
               
        return(<>
            {
                list.length && list.map((it,index)=>{
                    return(<><Grid classes={{"grid-xs-6":classes.backgroundItem}}  item xs={6} xxl={4}>
                            <div>
                                <div className={classes.overimg}><Link><img className={classes.images} src={it.img} alt="" /></Link></div>
                                <div className={classes.inforTitle}>
                                    <h3 className={classes.h3title}><Link className={classes.titleItem1}>{it.title}</Link></h3>
                                    <div className={classes.titleItem2}>{it.price}</div>
                                    <Link className={classes.buyButton}>mua ngay</Link>
                                </div>

                            </div>
                       
                            
                       
                    
                    </Grid>

                      
                    </>
                        
                    )
                })
            }
        </>)
    };

   const renderListpetitem = () => {

         return(
                <>
                        {
                            petitem.map((item,index)=>{

                                return(<>
                                    <div className={classes.titleLeft} >{item.name}</div>
                                    {
                                        item.data && item.data.length && 
                                       <Grid className={classes.wrapItem} item xs={12}>
                                       {renderlistData(item.data)}
                                       </Grid>
                                          
                                        
                                    }
                                </>)
                            })
                        }
                </>
         )
   };

   return(
   <div>
       {
           renderListpetitem()
       }
   </div>
        
   
   
      
   )

}

export default Listpetitem