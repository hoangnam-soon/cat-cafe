import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './index.css';
// import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
// import Button from '@material-ui/core/Button';
// import Divider from '@material-ui/core/Divider';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
import { Drawer } from '@material-ui/core';
import Login from '../Login';
import clsx from 'clsx';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import { Icon } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    // root: {
    //   flexGrow: 1,
    // },
    // menuButton: {
    //   marginRight: theme.spacing(2),
    // },
    // title: {
    //   flexGrow: 1,
    // },
   menuNone : {
    "@media (max-width : 768px)": {
        display: 'none',
    }
   },
   menuBar : {
    
        display: "grid",
        margin :'10px',
        '& a' : {
            color :'black',
            fontSize: "14px", 
            fontWeight: 500,
             marginLeft: "10px" ,
        },
       

        padding : 'inherit',

       
   },
   paper : {
       width : '50%',
       height :'50%',
       
   },
   login : {
    '&:hover':{
        backgroundPosition: 'left',
        color : 'black',
  
      },
      display: 'inline-block',
      padding: '7px 20px',
      border: '1px solid #666666',
      color: 'white',
      borderRadius: '3px',
      background: 'linear-gradient(to left, #000 50%, #fff 50%) right',
      backgroundSize: '200%',
      transition: 'all 0.7s cubic-bezier(0.5,1.6,0.4,0.7)',
      margin: 'auto',
      fontSize : 'smaller',
 },
 activeLi: {
     '& a':{ 
        color:'#EA8025'
     }

 },
 search : {
     margin : '30px 20px',
     padding : '2px 10px'

 }
  });

const Menu = ({dataList,isShowBar,closeBar, activeMenu}) => {


    const classes = useStyles();
    // const [isOpen, setIsOpen] = React.useState(false);
    const [isOpenLogin, setIsOpenLogin] = useState(false)

    const renderChildrenMenu = (list) => {

        return (
            <>
                {
                    list.map((item,index)=>{
                        return <>
                        <li key={index}>
                            <Link to ={`${item.link? item.link :''}`}>{item.label}</Link>
                            

                            </li>
                        </>
                            
                        
                    })
                }
            </>
        )
    }




    const renderMenu = () => {

        return (
            <>
                {
                    dataList.length && dataList.map((item,index) =>{
                        return (
                           
                                <li key={index} className={clsx({[classes.activeLi] : item.link === activeMenu})}>
                                <Link to={`${item.link? item.link : ''}`}>{item.label}
                                {
                                    item.children && item.children.length && <ul className='child-menu'>
                                       {renderChildrenMenu(item.children)} 
                                    </ul>
                                } </Link>
                                </li>


                                
                           
                        )
                    })
                }
            </>
        )
 


    }
    

    return (
        <div className={classes.menuNone} >
            <ul className='header-menu'>
                {
                    renderMenu()
                }
            </ul>
            <Drawer classes={{paper:classes.paper}} anchor={'left'} open={isShowBar} onClose={()=> closeBar()}>

            <input className={classes.search} type='text' placeholder="Search"></input>
            {/* <div>
            <form  noValidate autoComplete="off">
            
            <TextField id="outlined-basic" label="Outlined" variant="Search" />
            </form>
            </div> */}
            
            <ul className={classes.menuBar}>
                {
                    renderMenu()
                }
            </ul>
            <button  onClick={()=>setIsOpenLogin(!isOpenLogin)} className={classes.login}>Đăng nhập</button>
            
             <Login open={isOpenLogin} closeLogin={()=>setIsOpenLogin(!isOpenLogin)}/>
          </Drawer>
         
          
      
        </div>
    )
}


Menu.defaultProps = {
    dataList: []
}

Menu.propTypes = {
    dataList: PropTypes.array.isRequired,
}
export default Menu