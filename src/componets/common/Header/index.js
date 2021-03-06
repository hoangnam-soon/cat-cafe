import React,{useState, useRef } from 'react';
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
 divlog : {
     "@media (max-width : 768px)": {
            margin : 'auto',
        }
 },
 logo : {
     height : 60,
 },
 headerRight : {
    margin: '15px',
    display : 'inline-flex',
    
 },
 searchIcon : {
     fontSize : 18,
     color : 'white',
     overflow: 'inherit',
     width: 'auto',
     cursor : 'pointer',
     margin : '7px',
     "@media (max-width : 768px)": {
        display: 'none',
    }
     
 },
 cartIcon : {
    fontSize : 18,
    color : 'white',
    overflow: 'inherit',
    width: 'auto',
    margin : '5px',
    "@media (max-width : 768px)": {
       position : 'absolute',
       right : 20
    }
},
 login : {
    '&:hover':{
       // backgroundPosition: 'left',
      backgroundColor : '#EA8025',
        // color : 'white',
  
      },
      display: 'inline-block',
      padding: '6px 10px',
      border: '1px solid #666666',
      color: 'black',
      borderRadius: '3px',
      cursor : 'pointer',
      background : 'white',
    // background: 'linear-gradient(to left, #EA8025 50%, #fff 50%) right',
    // backgroundSize: '200%',
    transition: 'all 0.4s ',
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
            label: 'c???a h??ng ',
            link: '/Store/',
        },
        {
            label: 's???n ph???m',
            link : '/Item/'
        },
        {
            label: 'ph??? ki???n pet',
            link : '/Pet-item/'
        },
        {
            label: 'blog',
            link : '/Blog/'
        }
    ]

    const onClickOutSideSearchBox = (e) => {
        var dom = e.target
        var search = document.getElementById("search-icon");
        const isContain = dom.contains(search)
        // check xem co phai nut search ko , neu ko th?? set la false

        if(!isContain) {
            setShowSearchBox(false)
        }
        

        // e.value.path[0] == setShowSearchBox() ? setShowSearchBox(true)
    }
    return(
        <div className = {classes.mainHeader}>
        <Icon onClick={()=> setIsShowBar(!isShowBar)} classes={{root:classes.barIcon}} className="fas fa-bars"></Icon>
            <div className={classes.divlog}><Link to='/'><img className={classes.logo} src='https://hoangnam-soon.github.io/Cat-Cafe/img/logo4.png'></img></Link></div>
            <Menu activeMenu={activeMenu} isShowBar={isShowBar} closeBar={()=>setIsShowBar(!isShowBar)} dataList={menu}/>
            {
                showSearchBox &&  <SearchBox closeSearch={(e) => onClickOutSideSearchBox(e)}/> 
            }
            
            <div className={classes.headerRight}>
            <Link to ='/Cart/'><Icon  className= "fas fa-shopping-cart default-icon" classes ={{root:classes.cartIcon}} style={{color:'white'}}   /></Link> 
            <Icon id="search-icon" className="fas fa-search default-icon" classes ={{root:classes.searchIcon}} style={{color:'white'}}  onClick={() =>setShowSearchBox(!showSearchBox)}/>
            <button  onClick={()=>setIsOpenLogin(!isOpenLogin)} className={classes.login}>????ng nh???p</button>
            
             <Login open={isOpenLogin} closeLogin={()=>setIsOpenLogin(!isOpenLogin)}/>
            
            </div>
           
           
            
   
        </div>
    )
}

export default Header
