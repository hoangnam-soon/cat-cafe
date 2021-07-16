import React from 'react';
import {makeStyles} from '@material-ui/core';
import BreadCrumbs from '../../common/BreadCrumbs';
import { Grid } from '@material-ui/core';
import {petItemhomepage} from '../../../assets/images/Petitem';
import { Link } from 'react-router-dom';



const useStyles = makeStyles({
    root : {
        backgroundColor: '#f2f2f2',
        marginTop: -6,
    paddingTop: 20,
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
    titleItem1 :{
        color : 'black',
        fontSize:14,
        textTransform : 'uppercase',
        fontFamily: 'Oswald',
        // fontWeight:'500',
        marginLeft : 10,
        transition: 'all 0.4s',
        '&:hover' : {
             color : '#EA8025',
            //  transform :
        },
        // "@media (max-width:768px)":{
        //   margin : '10px '
          
        // },
        "@media (max-width:1200px)":{
          margin : '10px '
          
        },
        
    
      },
      titleItem2 :{
        fontSize:14,
        textTransform : 'uppercase',
        margin:'15px 10px',
        color: '#EA8025',
        fontFamily: 'Oswald',
        // fontWeight:'500',
        "@media (max-width:768px)":{
          margin : '10px 10px'
          
        },
        "@media (max-width:1200px)":{
          margin : '10px '
          
        },
        
    
      },
      allDetail : {
            margin : '30px 0px'
      },
      inputCart : {
        display: 'grid',
        /* text-align: -webkit-auto; */
        padding: '60px 20px'
      },
      nameitem: {
        fontWeight: 500,
        fontSize: "20px",
        fontFamily: "'Oswald'",
        textTransform: "uppercase"
      },
     titleitem : {
        fontWeight: 500,
        fontSize: "18px",
        fontFamily: "'Oswald'",
        // textTransform: "uppercase"
        opacity : 0.9,
      },
      priceitem : {
        fontWeight: 500,
        fontSize: "18px",
        fontFamily: "'Oswald'",
        textTransform: "uppercase",
        color : "#EA8025",
        
      },

      iconitem : {
        fontSize: "x-large",
        marginRight : 10,
        cursor: 'pointer'
       }, 
       iconnumber : {
        marginRight : 10,
       },
      putinButton :{
        '&:hover':{
          backgroundPosition: 'left',
          color : 'black',
    
        },
        fontWeight: 500,
        fontSize: "20px",
        fontFamily: "'Oswald'",
        textTransform: "uppercase",
        display: 'inline-block',
        padding: '10px',
        border: '1px solid #666666',
        color: 'white',
        borderRadius: '3px',
        background: 'linear-gradient(to left, #EA8025 50%, #fff 50%) right',
        backgroundSize: '200%',
        transition: 'all 0.7s cubic-bezier(0.5,1.6,0.4,0.7)',
        marginRight: 150,
        
        
        // "@media (max-width:768px)":{
        //   margin : '10px 20px'
          
        // },
        // "@media (max-width:1200px)":{
        //   margin : '20px 10px'
          
        // }, '@media (max-width : 768px)':{
        //   fontSize:'14px',
         
      
        // },
        // '@media (max-width : 576px)':{
        //   fontSize:'10px',
         
        // }
      
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
        position :'sticky',
        top : 60

    }


})
   






const Detailitem = () => {

      const classes = useStyles();


      const renderDetailitem = () =>{

          return(<>
               <Grid item lg={6} sm={4} xs={12}>
                   <img className={classes.img} src="https://github.com/hoangnam-soon/hoangnam-soon.github.io/blob/main/Cat-Cafe/img/Item/cat-food/thuc-an-cho-meo-bao-ve-rang-mieng-royal-canin-oral-care-400x400.jpg?raw=true" alt="" />
               </Grid>
               <Grid className={classes.inputCart} item lg={6} sm={8} xs={12}>
                   <div className={classes.nameitem}>Bảo vệ răng</div>
                   <div className={classes.titleitem}>Giá bán : <span className={classes.priceitem}>200,000 Đ</span></div>
                   <div className={classes.titleitem} >Đơn vị : túi</div>
                   <div className={classes.titleitem}>Tình trạng : <span className={classes.priceitem}>Còn hàng</span></div>
                   <div>
                       <span className={classes.iconitem}><i class="far fa-minus-square"></i></span>
                       <span className={classes.iconnumber}>1</span>
                       <span className={classes.iconitem}><i class="far fa-plus-square"></i></span>
                   </div>
                   <button className={classes.putinButton}>thêm vào giỏ hàng</button>
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
                      <Grid  item lg={6} xs={6} >
                            <div className={classes.backgroundItem}>
                                <div><Link><img className={classes.img} src={item.img} alt="" /></Link></div>
                                <div className={classes.inforTitle}>
                                    <h3 className={classes.h3title}><Link className={classes.titleItem1}>{item.title}</Link></h3>
                                    <div className={classes.titleItem2}>{item.price}</div>
                                    {/* <Link className={classes.buyButton}>mua ngay</Link> */}
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
              <div><img className={classes.img} src="https://github.com/hoangnam-soon/hoangnam-soon.github.io/blob/main/Cat-Cafe/img/BLOG/cropped-wallpaper-black-and-yellow-desktop-5.jpg?raw=true" alt="" /></div>
              
              <div className={classes.root}>
                    <Grid container spacing={0}>
                        <Grid  className={classes.spacing} item lg={8} xs={12} >
                          <BreadCrumbs/>


                          <Grid className={classes.allDetailpetitem} container spacing ={0}>
                                    {renderDetailitem()}

                                <Grid className={classes.wrapinfor} item lg={8}>
                                    <div className={classes.titleinfor}>
                                        Chi tiết sản phẩm
                                    </div>
                                    <h3>Mô tả</h3>
                                    <p>Thức ăn cho mèo Royal Canin Indoor dành cho tất cả giống mèo sống trong nhà trên 7 tuổi.</p>
                                    <h3>Lợi ích chính</h3>
                                    <p>Thức ăn cho mèo Royal Canin Indoor được đặc chế riêng giúp duy trì sự dẻo dai cho mèo, hỗ trợ thận mèo hoạt động khỏe mạnh. Duy trì sức khỏe cho mèo già. Chất chống oxy hóa CELT: hỗ trợ hoạt động của cơ thể mèo. Duy trì sự ổn định của thận và hệ tiết niệu. Phospho: giúp thận hoạt động hiệu quả khi mèo đã lớn tuổi.<br/>

        Thức ăn cho mèo Royal Canin Indoor là dạng viên thành phần được nghiên cứu hoàn toàn phù hợp với thói quen ăn uống của mèo già. Thành phần hạt giảm sự hình thành mảng bám, giúp răng chắc khỏe. Kích thước hạt phù hợp cấu tạo khoang miệng của mèo, thông qua việc ma sát với răng giúp mèo tự làm sạch răng miệng<br/>
        Thành phần của sản phẩm có albumin và probiotic có trong thức ăn giúp nhuận tràng, tốt cho hệ tiêu hóa. Men tiêu hóa L.I.P hỗ trợ mèo hấp thu chất dinh dưỡng, cân bằng hệ vi sinh đường ruột, giảm bớt lượng phân và mùi nhẹ hơn. Probiotic giúp gia tăng số lượng lợi khuẩn, bảo vệ đường ruột khỏi vi khuẩn có hại.</p>
                                    <h3>Thành phần dinh dưỡng</h3>
                                    <p>Thức ăn cho mèo Royal Canin Indoor giàu dinh dưỡng, đa dạng và phong phú. Bao gồm: Tinh chất thịt gia cầm, gạo, bắp, bắp vàng chứa glutin, mỡ động vật, chất xơ, từ rau quả, protein động vật, protein gia cầm, chất khoáng, thịt củ cải đường, men bia, dầu cá, muối, tinh chất trà xanh va nho( nguồn polyphenols) L-carnitine.</p>
                                    <h3>Hướng dẫn cho ăn</h3>
                                    <p>
                                    Thức ăn cho mèo Royal Canin Indoor tạo thói quen ăn uống cho mèo. Dựa theo tuổi của mèo, cần cho ăn một ngày 3 lần vào các giờ cố định. Cho ăn tại một chỗ để tạo thói quen tốt cho mèo. Nên cho mèo ăn thức ăn chế biến riêng, không cho ăn thức ăn thừa của người. Vì thức ăn của người có nhiều thành phần khiến chúng bị rối loạn tiêu hóa, dễ bị bệnh béo phì. Bảo đảm cung cấp đủ nước uống cho mèo. Nếu thấy nước bị mèo làm bẩn, cần thay nước mới ngay lập tức.

        Khi muốn đổi thức ăn mới cho mèo, có thể trộn lẫn thức ăn cũ và mới khi cho ăn. Tăng dần tỉ lệ trong vòng 7 ngày. Đột ngột thay đổi loại thức ăn mới có thể gây mất cân bằng hệ tiêu hóa. Mèo dễ bị khó tiêu và đi ngoài.

        Công thức phân chia lượng thức ăn theo cân nặng có thể tham khảo trên bao bì. Hạn sử dụng 18 tháng kể từ ngày sản xuất.
                                    </p>
                                </Grid>
                                <Grid className={classes.another} item lg={4}>
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
export default Detailitem