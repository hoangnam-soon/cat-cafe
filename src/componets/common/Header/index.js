import React,{useState} from 'react';
import { makeStyles,Icon } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Menu from '../Menu';
import SearchBox from '../Searchbox';
import Login from '../Login';

const useStyles =makeStyles({
 mainHeader :{
    display: "flex",
    position: "sticky",
    top: "0",
    width: "100%",
    zIndex: 1300,
    height: "60px",
    justifyContent: "space-evenly",
    backgroundColor: "black"
 },
 logo : {
     height : 60,
 },
 headerRight : {
    margin: '15px',
    display : 'inline-flex',
    "@media (max-width : 768px)": {
        display: 'none',
    }
 },
 headerIcon : {
     fontSize : 18,
     color : 'white',
     overflow: 'inherit',
     width: 'auto',
     margin : '5px',
 },
 login : {
    '&:hover':{
        backgroundPosition: 'left',
        color : 'white',
  
      },
      display: 'inline-block',
      padding: '6px 10px',
      border: '1px solid #666666',
      color: 'black',
      borderRadius: '3px',
      background: 'linear-gradient(to left, #fff 50%, #cf4d24 50%) right',
      backgroundSize: '200%',
      transition: 'all 0.7s cubic-bezier(0.5,1.6,0.4,0.7)',
      marginLeft: '5px !important',
      "@media (max-width : 768px)": {
        display: 'none',
    }
 },
 barIcon : {
    color : 'white',
    display : 'none',
    position : "absolute",
    top : 15,
    left :25,
    "@media (max-width : 768px)": {
        display: 'block',
    }
  

},



});




const Header = ({activeMenu}) => {
    const classes = useStyles();


    const [showSearchBox, setShowSearchBox] = useState(false)
    const [isOpenLogin, setIsOpenLogin] = useState(false)
    const [isShowBar, setIsShowBar] = useState(false)
    

    const menu = [
        {
            label: 'cửa hàng ',
            link: '/Store/',
        },
        {
            label: 'sản phẩm',
            link : '/Item/'
        },
        {
            label: 'phụ kiện pet',
            link : '/Pet-item/'
        },
        {
            label: 'blog',
            link : '/Blog/'
        }
    ]

    return(
        <div className = {classes.mainHeader}>
        <Icon onClick={()=> setIsShowBar(!isShowBar)} classes={{root:classes.barIcon}} className="fas fa-bars"></Icon>
            <div><Link to='/'><img className={classes.logo} src='https://hoangnam-soon.github.io/Cat-Cafe/img/logo4.png'></img></Link></div>
            <Menu activeMenu={activeMenu} isShowBar={isShowBar} closeBar={()=>setIsShowBar(!isShowBar)} dataList={menu}/>
            {
                showSearchBox && <SearchBox/>
            }
            
            <div className={classes.headerRight}>
            <Icon className="fas fa-search default-icon" classes ={{root:classes.headerIcon}} style={{color:'white'}}  onClick={() =>setShowSearchBox(!showSearchBox)}/>
            <Link to ='/Cart/'><Icon className= "fas fa-shopping-cart default-icon" classes ={{root:classes.headerIcon}} style={{color:'white'}}   /></Link> 
            <button  onClick={()=>setIsOpenLogin(!isOpenLogin)} className={classes.login}>Đăng nhập</button>
            
             <Login open={isOpenLogin} closeLogin={()=>setIsOpenLogin(!isOpenLogin)}/>
            
            </div>
           
           
            
   
        </div>
    )
}

export default Header
