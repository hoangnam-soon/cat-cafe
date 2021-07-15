import React from 'react';
import Header from '../../componets/common/Header';
import Slidebanner from '../../componets/common/Slidebanner';
import Footer from '../../componets/common/Footer';
import Itemhomepage from '../../componets/ui/Itemhomepage';
import Petitemhomepage from '../../componets/ui/Petitemhomepage';
import Slidecat from '../../componets/ui/Slidecat';
import Bloghomepage from '../../componets/ui/Bloghomepage';
import Khonggianquan from '../../componets/ui/Khonggianquan';

 
const Home = () => {
    return( <>
        <Header />
        <Slidebanner/>
        <Itemhomepage />
        <Slidecat/>
        <Petitemhomepage />
        <Bloghomepage/>
        <Khonggianquan />
        
        <Footer />
        
        
        
    
        </>
        )
}
export default Home