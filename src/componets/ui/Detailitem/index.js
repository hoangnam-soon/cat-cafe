import React,{useState,useEffect} from 'react';
import {makeStyles} from '@material-ui/core';
import BreadCrumbs from '../../common/BreadCrumbs';
import { Grid } from '@material-ui/core';
import {itemHome} from '../../../assets/images/Item';
import { Link } from 'react-router-dom';
import {getFromLocal} from '../../../ulits';
import { useHistory } from "react-router-dom";
import {saveToLocal} from '../../../ulits';



const useStyles = makeStyles({
    root : {
        backgroundColor: '#f5f5f5',
        marginTop: -6,
       padding: 20,
    '@media (max-width :576px)': {
        padding : 10
    }
    },
    img : {
        width : "100%",
    },
    spacing : {
        margin:'auto',
    },
    overimg : {
      overflow : 'hidden'
    },
    images : {
      maxWidth : 280,
  
      width : '100%',
      // transition : 'all 0.4s',
      // "&:hover" : {
      //   transform: "scale(1.04)"
      // }, 
      '@media (max-width : 1024px)':{
        maxWidth : 400
    
      },
      '@media (max-width : 768px)':{
        maxWidth : 280
    
      },
      

      '@media (max-width : 576px)':{
        maxWidth : 165
    
      },
     
    },
  titleItem1 :{
    color : 'black',
    fontSize:22,
    fontFamily: 'Charm',
     textTransform : 'capitalize',
     fontWeight:'600',
    marginLeft : 10,
    transition : 'all 0.4s',
    '&:hover' : {
      color : '#EA8025'
    },
    // "@media (max-width:768px)":{
    //   margin : '10px '
      
    // },
    "@media (max-width:1200px)":{
      margin : '10px '
      
    },
    

  },
  titleItem2 :{
    fontSize:20,
    // textTransform : 'uppercase',
    margin:'15px 10px',
    color: '#EA8025',
    fontFamily: 'Charm',
    textTransform : 'capitalize',
    fontWeight:'600',
    "@media (max-width:768px)":{
      margin : '10px 10px'
      
    },
    "@media (max-width:1200px)":{
      margin : '10px '
      
    },
    

  },
  buyButton :{
    '&:hover':{
      // backgroundPosition: 'left',
      background : 'white',
      color : 'black',

    },
    fontFamily : 'Bebas Neue',
    display: 'inline-block',
    padding: '8px 15px',
    border: '1px solid #666666',
    color: 'white',
    borderRadius: '3px',
    background : '#EA8025',
    // background: 'linear-gradient(to left, #EA8025 50%, #fff 50%) right',
    // backgroundSize: '200%',
    transition: 'all 0.7s',
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
       
//   backgroundItem : {
//   backgroundColor : 'white',
//   margin : 'auto'

// },

      allDetail : {
            margin : '30px 0px'
      },
      divimg : {
        marginTop : 20,
      },
      inputCart : {
        display: 'grid',
        /* text-align: -webkit-auto; */
        padding: '60px 0px 0px 40px',
        "@media (max-width:768px)":{
          padding : '15px 30px',
          margin : 'auto'
        },
      },
      nameitem: {
        fontSize:30,
        fontFamily: 'Charm',
        textTransform : 'capitalize',
        fontWeight:'600',
      },
     titleitem : {
        fontWeight: 500,
        fontSize: "18px",
        fontFamily: "'Oswald'",
        // textTransform: "uppercase"
        opacity : 0.9,
        "@media (max-width:768px)":{
          margin : '10px 0px'

          
        },
      },
      priceitem : {
        fontWeight: 500,
        fontSize: "18px",
        fontFamily: "'Oswald'",
        textTransform: "uppercase",
        color : "#EA8025",
        
      },

      iconitem : {
        fontSize: 24,
        color: '#ea8025',
        opacity : '0.8',
        marginRight : 10,
        cursor: 'pointer'
       }, 
       iconnumber : {
        marginRight : 10,
        fontSize: 24,
       },
      putinButton :{
        '&:hover':{
          // backgroundPosition: 'left',
          background : 'white',
          color : 'black',
    
        },
        fontWeight: 500,
        fontSize: "18px",
        fontFamily: "'Oswald'",
        textTransform: "uppercase",
        display: 'inline-block',
        // padding: '10px',
        border: '1px solid #666666',
        color: 'white',
        borderRadius: '3px',
        cursor: 'pointer',
        background : '#ea8025',
        // background: 'linear-gradient(to left, #EA8025 50%, #fff 50%) right',
        // backgroundSize: '200%',
        transition: 'all 1s',
        // marginRight: 200,
        justifySelf: 'flex-start',
          padding: '0px 20px',
        
        
        // "@media (max-width:768px)":{
        //   margin : '10px 20px'
          
        // },
        // "@media (max-width:1200px)":{
        //   margin : '20px 10px'
          
        // }, '@media (max-width : 768px)':{
        //   fontSize:'14px',
         
      
        // },
        '@media (max-width : 768px)':{
          // marginRight : 120,
          padding : '20px',
          marginTop : 10
         
        }
      
    },
    wrapinfor : {
        margin :'40px 0px',
        padding : '10px 20px',
        backgroundColor : 'white',
        borderRight: '1px black solid',
         "@media (max-width:768px)":{
          borderRight : 'none',
          
          
        },
    },
    titleinfor : {
            color: "#EA8025",
            width: "fit-content",
            fontSize: "24px",
            fontFamily: "'Oswald'",
            textTransform: "uppercase",
            fontWeight: 500
    },
    another : {
      marginTop :40,
      padding :'10px 0px',
      "@media (max-width:768px)":{
        padding : '10px 50px'
       },
       "@media (max-width:576px)":{
        padding : ' 0px'
       },

    },
    h3 : {

      // color: "#EA8025",
      width: "fit-content",
      fontSize: "24px",
      fontFamily: "'Oswald'",
      textTransform: "uppercase",
      fontWeight: 500
    },
    h3title:{
      marginBottom: 0,
      marginTop :10,
      maxHeight :60,
      // height : 60,
      lineHeight:1.4,
      "@media (max-width:576px)":{
       height:50,
      //  height :50,
      marginTop:5,
      marginBottom: 20,
        display: 'grid'
      },
    }


})
   






const Detailitem = () => {

      const classes = useStyles();
      let history = useHistory();
  
      const handClick = (item) => {
    
        saveToLocal('detail-item',item);
        let newData = getFromLocal('detail-item');
        // history.push("/Detail-item/");
        setDataItem(newData)
      }
      const [dataItem, setDataItem] = useState({});


      useEffect(() => {
       
            let newData = getFromLocal('detail-item');
            setDataItem(newData)

      }, [])

      const renderDetailitem = () =>{

          return(<>
               <Grid className={classes.divimg} item lg={6} sm={6} xs={12}>
                   <img className={classes.img} src={dataItem.img} alt="" />
               </Grid>
               <Grid className={classes.inputCart} item lg={6} sm={6}  xs={12}>
                   <div className={classes.nameitem}>{dataItem.title}</div>
                   <div className={classes.titleitem}>Giá bán : <span className={classes.priceitem}>{dataItem.price}</span></div>
                   <div className={classes.titleitem} >Đơn vị : {dataItem.unit}</div>
                   <div className={classes.titleitem}>Tình trạng : <span className={classes.priceitem}>Còn hàng</span></div>
                   <div>
                       <span className={classes.iconitem}><i class="fas fa-minus-circle"></i></span>
                       <span className={classes.iconnumber}>1</span>
                       <span className={classes.iconitem}><i class="fas fa-plus-circle"></i></span>
                   </div>
                   <button className={classes.putinButton}>thêm vào giỏ hàng</button>
               </Grid>
          </>

          )

      };
      const anotherItem = () => {


        return(<>
            {
              itemHome.length && itemHome.map((item,index)=>{
                    return(
                      <>
                      <Grid  item xs={6} sm={6} lg={4} >
                            <div className={classes.backgroundItem} onClick={()=> handClick(item)}>
                                <div className={classes.overimg}><Link><img className={classes.images} src={item.img} alt="" /></Link></div>
                                <div className={classes.inforTitle}>
                                    <h3 className={classes.h3title} onClick={()=> handClick(item)}><Link className={classes.titleItem1}>{item.title}</Link></h3>
                                    <div className={classes.titleItem2}>{item.price}</div>
                                    <Link className={classes.buyButton} onClick={()=> handClick(item)}>mua ngay</Link>
                                </div>

                            </div>
                    </Grid>
                    </>
                        
                    )
                })
            }
            </>)
      };

    return (<div>
              {/* <div><img className={classes.img} src="https://github.com/hoangnam-soon/hoangnam-soon.github.io/blob/main/Cat-Cafe/img/Banner/banner-taycoffee-3.jpg?raw=true" alt="" /></div> */}
              
              <div className={classes.root}>
                    <Grid container spacing={0}>
                        <Grid  className={classes.spacing} item lg={8} xs={12} >
                          <BreadCrumbs/>


                          <Grid className={classes.allDetailpetitem} container spacing ={0}>
                                    {renderDetailitem()}

                               
                                <Grid className={classes.another}  item xs={12}>
                                <h3 className={classes.h3}> Một số sản phẩm khác</h3>
                              <Grid container spacing={0}>
                              <Grid  item xs={12} >
                                
                              </Grid>
                                  {
                                      anotherItem()
                                  }
                              </Grid>
                          </Grid>
                          </Grid>
                          

                          
                        </Grid>
                        
                       
                    </Grid>
                </div>
           </div>
        
    )
}
export default Detailitem