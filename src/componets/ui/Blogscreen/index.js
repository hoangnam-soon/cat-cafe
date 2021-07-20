import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';



const useStyles =makeStyles ({
    root:{
        padding:30,
        "@media(max-width:768px)":{
            padding: '0px',
            
          },

    },
    spacing : {
        width : '100%',
        padding : 0,
        margin : 0,
    },
   
    images : {
        width : '100%'
    },
    wrapTitle : {
        padding: '30px 25px !important',
        alignItems: 'center',
        margin: 'auto',
        display: 'inline-flex',
        justifyContent: 'space-between',
        "@media(max-width:768px)":{
          padding: '25px',
          
        },
        // "@media(max-width:1200px)":{
        // padding : '25px 20px'
        // },
        
      },
      titleLeft : {
        '&:after':{
          content: '""',
          width: '50%',
          height: '4px',
          backgroundColor: 'black',
          display: 'block',
       
          
      },
      fontSize: '30px',
      textTransform: 'uppercase',
      fontFamily: 'Oswald',
      color: '#EA8025',
      width: 'fit-content',
      margin : '30px 20px',
      '@media (max-width : 576px)':{
        fontSize:'20px',
        margin : '30px 10px'
    
      },
      // '@media (max-width : 568px)':{
      //   fontSize:'20px'
      // }
    
      
      
      },
      wrapbloginfor : {
          margin :'auto !important',
          

      },  wrapblogmore : {
        margin :'auto !important',
        backgroundColor : '#f2f2f2'
        

    },
    h3title : {
        margin: 10,
        color : 'black',
        textTransform : 'none',
        transition: 'all 0.4s',
        display : 'grid',
        '@media (max-width : 576px)': {
               fontSize :14
            },
            

        '&:hover':{
            color : '#EA8025'
        }
    },
    backgroundBlog : {
        backgroundColor : 'white',
        padding :3,
        
    },
    h3 : {
        height :80,
        // '@media (max-width : 576px)': {
        //    Height : 130
        // }
        
    }

});


const listBlog = [
    {
        img : 'https://github.com/hoangnam-soon/hoangnam-soon.github.io/blob/main/Cat-Cafe/img/BLOG/blog-de-meo-bot-bu%E1%BB%93n.jpg?raw=true',
        title : 'Cách để "Hoàng thượng" quên đi sự cô đơn',
    },
    {
        img : 'https://github.com/hoangnam-soon/hoangnam-soon.github.io/blob/main/Cat-Cafe/img/BLOG/anh-2.jpg?raw=true',
        title : 'Các phương pháp loại bỏ mùi cơ thể cho mèo',
    },
    {
        img : 'https://github.com/hoangnam-soon/hoangnam-soon.github.io/blob/main/Cat-Cafe/img/BLOG/anh-3.jpg?raw=true',
        title : 'Bạn có biết mèo là loài động vật như thế nào không',
    },
    {
        img : 'https://github.com/hoangnam-soon/hoangnam-soon.github.io/blob/main/Cat-Cafe/img/BLOG/anh-4.jpg?raw=true',
        title : 'Học cách mát xa cho Boss',
    },
    {
        img : 'https://github.com/hoangnam-soon/hoangnam-soon.github.io/blob/main/Cat-Cafe/img/BLOG/anh-5.jpg?raw=true',
        title : ' Giúp Boss có cơ thể khỏe mạnh',
    },
    {
        img : 'https://github.com/hoangnam-soon/hoangnam-soon.github.io/blob/main/Cat-Cafe/img/BLOG/anh-6.jpg?raw=true',
        title : 'Để Boss yêu bạn nhiều hơn',
    },


]




const Blogscreen = () => {


    const classes = useStyles();

    const renderListBlog = () => {

        return(<>
            {
                listBlog.length && listBlog.map((item,index)=>{

                    return(
                        <Grid item xs={12} lg= {4}>
                            <div className={classes.backgroundBlog}>
                               <div><Link><img className={classes.images} src={item.img} alt="" /></Link></div>
                                <h3 className={classes.h3} ><Link className={classes.h3title}>{item.title}</Link></h3>
                                
                            </div>
                        </Grid>
                    )
                })
            }
        </>)
    }


    return(
        <div>
             <div><img className={classes.images} src="https://raw.githubusercontent.com/hoangnam-soon/hoangnam-soon.github.io/main/Cat-Cafe/img/BLOG/banner-blog.webp" alt="" /></div>
             <div className={classes.root}>
                <Grid container spacing={0}>  
                    <Grid classes={{"root":classes.wrapbloginfor}} item xs={8}>
                    <div>
                        <h2>Những thứ không nên cho "Hoàng thượng" của bạn ăn</h2>
                        <div><img className={classes.images}  src="https://github.com/hoangnam-soon/hoangnam-soon.github.io/blob/main/Cat-Cafe/img/BLOG/blog-nh%E1%BB%AFng-th%E1%BB%A9-kh%C3%B4ng-n%C3%AAn.jpg?raw=true" alt="" /></div>
                        <div>
                            <h3>Khoai tây sống</h3>
                            <p>Khoai tây là loại rau củ thường được sử dụng để chế biến các món ăn trong gia đình. Đây là thực phẩm có nhiều giá trị đối với con người. Tuy nhiên, đối với mèo, khoai tây không phải là thực phẩm tốt, đặc biệt là khoai tây chưa chín. Các hóa chất được tìm thấy trong lá và vỏ của khoai tây gây độc cho mèo và có thể ảnh hưởng đến hệ thống tiêu hóa gây ra các vấn đề về dạ dày cho hoàng thượng. Nên nếu sen thích khoai tây thì hãy “ăn mảnh” thôi nhé.</p>
                            <h3>Tỏi và hành tây</h3>
                            <p>Hành và tỏi có thể gây hại cho cả mèo và chó. Nhưng mèo thường nhạy cảm với hai loại gia vị này hơn. Một lượng nhỏ hành tây và tỏi cũng có thể khiến cục cưng của bạn bị nôn mửa, suy nhược và tiêu chảy. Nếu cho mèo ăn nhiều hoặc lặp đi lặp lại có thể dẫn đến thiếu máu thậm chí là tử vong. </p>
                            <h3>Thịt sống và cá sống</h3>
                            <div><img className={classes.images}  src="https://github.com/hoangnam-soon/hoangnam-soon.github.io/blob/main/Cat-Cafe/img/BLOG/thit-ca.jpg?raw=true" alt="" /></div>
                            <p>Tuy mèo có thể ăn được thịt sống và cá sống nhưng “hoàng thượng” vẫn có nguy cơ bị ngộ độc vì các vi khuẩn có trong đó. Nên tốt nhất sen hay nấu chín thức ăn trước khi cho mèo cưng ăn nhé.</p>
                            <h3>Chocolate</h3>
                            <p>Chocolate có nhiều lợi ích đối với sức khỏe con người nhưng đối mèo đây thực sự là độc dược. Một số yếu tố trong chocolate có thể có hại cho mèo, đặc biệt là Theobromine và Caffeine. Những yếu tố này có thể gây ra các tình trạng như nôn mửa, thở nhanh, tăng nhịp tim và co giật. Nếu “hoàng thượng” ăn nhiều chocolate chúng có thể sẽ gặp phải nhiều vấn đề nghiêm trọng. </p>
                            <h3>Các chế phẩm từ sữa</h3>
                            <p>Nhiều bạn sen nghĩ rằng sữa là thực phẩm yêu thích và rất tốt cho mèo nhưng thực tế thì ngược lại. Các loại đường trong sữa có thể ảnh hưởng đến sức khỏe chúng, đặc biệt là mèo trưởng thành. Lượng đường Disaccarit trong các sản phẩm sữa cao hơn so với lượng đường cơ thể mèo có thể xử lý một cách hiệu quả. Vì vậy, việc sử dụng thường xuyên các sản phẩm từ sữa có thể gây hại cho mèo.</p>
                            <h3>Kết luận</h3>
                            <p>Nhu cầu dinh dưỡng của mỗi loài vật là khác nhau. Trước khi cho mèo cưng sử dụng bất cứ thực phẩm nào sen hãy tìm hiểu kỹ xem chúng có phù hợp và tốt với “hoàng thượng” không nhé. Nếu bạn không có thời gian để chuẩn bị thức ăn có thể cho mèo sử dụng thức ăn khô, vừa giàu dinh dưỡng lại an toàn với bé.</p>
                        </div>
                    </div>
                    </Grid>
                    
                        <Grid className={classes.wrapblogmore} item xs={8}>
                           <div className={classes.titleLeft}> bài viết liên quan</div>
                           <Grid container spacing={0} className={classes.wrapblogmore} > 
                            {
                                renderListBlog()
                            }
                           </Grid>
                          
                        </Grid>
                    
                </Grid>
             </div>
        </div>
    )
}

export default Blogscreen
