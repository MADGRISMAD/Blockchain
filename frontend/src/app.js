import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../node_modules/tailwindcss/base.css";
import "./styles/app.css";
import $ from "jquery";

import header from "./components/header";
import footer from "./components/footer";
import user from "./components/user";
import {connect} from "./components/connect";
import subir from "./components/subir";
import landing from "./components/landingPage";


const app = async () => {
    $("#header").html(header());
    if (window.location.pathname === "/") {
        $("#content").html(await user());    
    }
    else if (window.location.pathname === "/transferir" ) {
        $("#content").html(await connect());
    }
    else if (window.location.pathname === "/Landing" ) {
        $("#content").html(await landing());
    }
    else if (window.location.pathname === "/subir" ) {
        $("#content").html(await subir());
    }
    else{
        $("#content").html("404 Not Found");
    }
    $("#footer").html(footer());
};

// Init app
app();