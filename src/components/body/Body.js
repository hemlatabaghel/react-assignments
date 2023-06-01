import React from 'react'
import { Route, Routes } from 'react-router-dom';
import ListDemo1 from '../../listItem/ListDemo1';
import ListDemo2 from '../../listItem/ListDemo2';
import ProductListCard from '../../listItem/ProductListCard';
import ProductListTable from '../../listItem/ProductListTable';
import UserList from '../../listItem/UserList';
import Category from '../categories/Category';
import Parent from '../comp-communication/Parent';
import UseCallBacl from '../hooks/UseCallBacl';
import UseEffect from '../hooks/UseEffect';
import UseEffectDemo2 from '../hooks/UseEffectDemo2';
import UseMemoHook from '../hooks/UseMemoHook';
import MemoParent from '../memo/MemoParent';
import Greet from '../props/Greet';
import AboutUs from '../routing/AboutUs';
import Authenticate from '../routing/Authenticate';
import Careers from '../routing/Careers';
import ContactUs from '../routing/ContactUs';
import Home from '../routing/Home';
import NotFound from '../routing/NotFound';
import ShowHidePassword from '../state/ShowHidePassword';
import StateDemo1 from '../state/StateDemo1';
import StateDemo2 from '../state/StateDemo2';

export default function Body({name}) {
    return (
        <div style= {{height:"1000px"}}>
            {/* <ListDemo1/> */}
            {/* <ListDemo2/> */}
            {/* <UserList/> */}
            {/* <ProductListCard/> */}
            {/* <ProductListTable/> */}
            {/* <Category/> */}
            {/* <StateDemo1/> */}
            {/* <Greet name = {name} age ="30">
                <h2>Hello this is a children</h2>
                </Greet> */}
            {/* <StateDemo2/> */}
            {/* <ShowHidePassword /> */}
            {/* <Parent/> */}
            {/* <MemoParent/> */}
            {/* <UseMemoHook/> */}
            {/* <UseCallBacl/> */}
            {/* <UseEffect/> */}
            {/* <UseEffectDemo2/> */}
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/aboutus" element={
                        <AboutUs /> 
                } />
                <Route exact path="/careers" element={<Careers />} />
                <Route exact path="/contactus" element={<ContactUs />} />
                    <Route exact path="/productlist" element={
                        <Authenticate>
                            <ProductListCard />
                        </Authenticate>
                    } />
                <Route path="*" element={<NotFound />} /> (No Match Route)
            </Routes>	
        </div>
    )
}
