import React from "react";
import MenuLink from "./menuLink";
import * as UrlConstants from "../../../constants/urlConstants";

const Home = () => {
    return (
        <div>
        <h1>Home Page</h1>
            <ul>
                <MenuLink to={UrlConstants.INDEX()}>Home</MenuLink>
            </ul>
           
            <ul>
                <MenuLink to="/">Quit</MenuLink>
            </ul>
        </div>
    );
};

export default Home;