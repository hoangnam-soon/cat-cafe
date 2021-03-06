import React, {useEffect,useState} from 'react';
import {makeStyles} from '@material-ui/core';
import BreadCrumbs from '../../common/BreadCrumbs';
import { Grid } from '@material-ui/core';
import {petItemhomepage} from '../../../assets/images/Petitem';
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
    images : {
      maxWidth : 280,
  
      width : '100%',
      transition : 'all 0.4s',
      "&:hover" : {
        transform: "scale(1.04)"
      },
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
    overimg : {
      overflow : 'hidden'
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
        borderBottom: '1px black solid',
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
        "@media (max-width:1024px)":{
          padding :'10px 30px',
         },
        "@media (max-width:768px)":{
          padding :'10px 0px',
         },
        "@media (max-width:576px)":{
          padding : '0px'
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
   






const Detailpetitem = () => {

      const classes = useStyles();
      let history = useHistory();
  
      const handClick = (item) => {
    
        saveToLocal('detail-pet',item);
        let newData = getFromLocal('detail-pet');
        setDataItem(newData)
        // history.push("/Detail-pet-item/");
      }
      const [dataItem, setDataItem] = useState({});


      useEffect(() => {
       
            let newData = getFromLocal('detail-pet');
            setDataItem(newData)

      }, [])


      const renderDetailpetitem = () =>{

          return(<>
               <Grid className={classes.divimg} item lg={6} sm={6} xs={12}>
                   <img className={classes.img} src={dataItem.img} alt="" />
               </Grid>
               <Grid className={classes.inputCart} item lg={6} sm={6} xs={12}>
                   <div className={classes.nameitem}>{dataItem.title}</div>
                   <div className={classes.titleitem}>Gi?? b??n : <span className={classes.priceitem}>{dataItem.price}</span></div>
                   <div className={classes.titleitem} >????n v??? : {dataItem.unit}</div>
                   <div className={classes.titleitem}>T??nh tr???ng : <span className={classes.priceitem}>C??n h??ng</span></div>
                   <div>
                        <span className={classes.iconitem}><i class="fas fa-minus-circle"></i></span>
                       <span className={classes.iconnumber}>1</span>
                       <span className={classes.iconitem}><i class="fas fa-plus-circle"></i></span>
                   </div>
                   <button className={classes.putinButton}>th??m v??o gi??? h??ng</button>
               </Grid>
          </>

          )

      };
      const anotherItem = () => {


        return(<>
            {
              petItemhomepage.length && petItemhomepage.map((item,index)=>{
                    return(
                      <>
                      <Grid  item xs={6} lg={4}>
                            <div className={classes.backgroundItem} onClick={()=>handClick(item)}>
                                <div className={classes.overimg} onClick={()=>handClick(item)}><Link><img className={classes.images} src={item.img} alt="" /></Link></div>
                                <div className={classes.inforTitle}>
                                    <h3 className={classes.h3title} onClick={()=>handClick(item)}><Link className={classes.titleItem1}>{item.title}</Link></h3>
                                    <div className={classes.titleItem2}>{item.price}</div>
                                    <Link className={classes.buyButton} onClick={()=>handClick(item)}>mua ngay</Link>
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
              {/* <div><img className={classes.img} src="https://github.com/hoangnam-soon/hoangnam-soon.github.io/blob/main/Cat-Cafe/img/BLOG/cropped-wallpaper-black-and-yellow-desktop-5.jpg?raw=true" alt="" /></div> */}
              
              <div className={classes.root}>
                    <Grid container spacing={0}>
                        <Grid  className={classes.spacing} item lg={8} xs={12} >
                          <BreadCrumbs/>


                          <Grid className={classes.allDetailpetitem} container spacing ={0}>
                                    {renderDetailpetitem()}

                                <Grid className={classes.wrapinfor} item xs={12}>
                                    <div className={classes.titleinfor}>
                                        Chi ti???t s???n ph???m
                                    </div>
                                    <h3>M?? t???</h3>
                                    <p>Th???c ??n cho m??o Royal Canin Indoor d??nh cho t???t c??? gi???ng m??o s???ng trong nh?? tr??n 7 tu???i.</p>
                                    <h3>L???i ??ch ch??nh</h3>
                                    <p>Th???c ??n cho m??o Royal Canin Indoor ???????c ?????c ch??? ri??ng gi??p duy tr?? s??? d???o dai cho m??o, h??? tr??? th???n m??o ho???t ?????ng kh???e m???nh. Duy tr?? s???c kh???e cho m??o gi??. Ch???t ch???ng oxy h??a CELT: h??? tr??? ho???t ?????ng c???a c?? th??? m??o. Duy tr?? s??? ???n ?????nh c???a th???n v?? h??? ti???t ni???u. Phospho: gi??p th???n ho???t ?????ng hi???u qu??? khi m??o ???? l???n tu???i.<br/>

        Th???c ??n cho m??o Royal Canin Indoor l?? d???ng vi??n th??nh ph???n ???????c nghi??n c???u ho??n to??n ph?? h???p v???i th??i quen ??n u???ng c???a m??o gi??. Th??nh ph???n h???t gi???m s??? h??nh th??nh m???ng b??m, gi??p r??ng ch???c kh???e. K??ch th?????c h???t ph?? h???p c???u t???o khoang mi???ng c???a m??o, th??ng qua vi???c ma s??t v???i r??ng gi??p m??o t??? l??m s???ch r??ng mi???ng<br/>
        Th??nh ph???n c???a s???n ph???m c?? albumin v?? probiotic c?? trong th???c ??n gi??p nhu???n tr??ng, t???t cho h??? ti??u h??a. Men ti??u h??a L.I.P h??? tr??? m??o h???p thu ch???t dinh d?????ng, c??n b???ng h??? vi sinh ???????ng ru???t, gi???m b???t l?????ng ph??n v?? m??i nh??? h??n. Probiotic gi??p gia t??ng s??? l?????ng l???i khu???n, b???o v??? ???????ng ru???t kh???i vi khu???n c?? h???i.</p>
                                    <h3>Th??nh ph???n dinh d?????ng</h3>
                                    <p>Th???c ??n cho m??o Royal Canin Indoor gi??u dinh d?????ng, ??a d???ng v?? phong ph??. Bao g???m: Tinh ch???t th???t gia c???m, g???o, b???p, b???p v??ng ch???a glutin, m??? ?????ng v???t, ch???t x??, t??? rau qu???, protein ?????ng v???t, protein gia c???m, ch???t kho??ng, th???t c??? c???i ???????ng, men bia, d???u c??, mu???i, tinh ch???t tr?? xanh va nho( ngu???n polyphenols) L-carnitine.</p>
                                    <h3>H?????ng d???n cho ??n</h3>
                                    <p>
                                    Th???c ??n cho m??o Royal Canin Indoor t???o th??i quen ??n u???ng cho m??o. D???a theo tu???i c???a m??o, c???n cho ??n m???t ng??y 3 l???n v??o c??c gi??? c??? ?????nh. Cho ??n t???i m???t ch??? ????? t???o th??i quen t???t cho m??o. N??n cho m??o ??n th???c ??n ch??? bi???n ri??ng, kh??ng cho ??n th???c ??n th???a c???a ng?????i. V?? th???c ??n c???a ng?????i c?? nhi???u th??nh ph???n khi???n ch??ng b??? r???i lo???n ti??u h??a, d??? b??? b???nh b??o ph??. B???o ?????m cung c???p ????? n?????c u???ng cho m??o. N???u th???y n?????c b??? m??o l??m b???n, c???n thay n?????c m???i ngay l???p t???c.

        Khi mu???n ?????i th???c ??n m???i cho m??o, c?? th??? tr???n l???n th???c ??n c?? v?? m???i khi cho ??n. T??ng d???n t??? l??? trong v??ng 7 ng??y. ?????t ng???t thay ?????i lo???i th???c ??n m???i c?? th??? g??y m???t c??n b???ng h??? ti??u h??a. M??o d??? b??? kh?? ti??u v?? ??i ngo??i.

        C??ng th???c ph??n chia l?????ng th???c ??n theo c??n n???ng c?? th??? tham kh???o tr??n bao b??. H???n s??? d???ng 18 th??ng k??? t??? ng??y s???n xu???t.
                                    </p>
                                </Grid>
                                <Grid className={classes.another} item xs={12}>
                                <h3 className={classes.h3}>M???t s??? s???n ph???m kh??c</h3>
                              <Grid container spacing={0}>
                                
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
export default Detailpetitem