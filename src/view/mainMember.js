import React from "react";
import "../styles/main_member.css";

import Footer from "../component/footer";
import Header from "../component/header";
import Member from "../component/member/member.component"

import 'boxicons';

const Main_member = () => {

    return (
        <>
            <Header />
            <Member />
            <Footer />
        </>
    )
};

export default Main_member;