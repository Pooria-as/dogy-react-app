import React from "react"
import reactDom from "react-dom"
import { BrowserRouter } from "react-router-dom";
import App from './App'
import "./App.css"
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';

reactDom.render(
<BrowserRouter>
<App/>
</BrowserRouter>
,document.querySelector("#root"))