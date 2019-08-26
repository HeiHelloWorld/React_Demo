import React from "react";

import logo from "./logo.svg";
import './App.css'

export default function App(){
  return (
    <div>
      <img className="img" src={logo} alt="logo"/>
      <h2 className="title">第一个React应用组件</h2>
    </div>
  )
}