import React from "react";

// import { HomePage, Portfolio } from "./home/Home.component";
import Header from "./header/Header.component";
import Footer from "./components/footer/Footer.component";

export default function AppRoot() {
    return (
        <>
            <Header sections={[{
                title: "Home",
                url: "/"
            }]} title="Gerson Aguiar" />
            Main
            <Footer description="Gérson Aguiar" title="Entre em contato" />
        </>

    );
};