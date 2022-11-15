import React from "react";
import { useState } from "react";

export default function Ready(props) {

    

    return (
    <div className="App">
      <div className="greeting">Nhân một ngày rất đặc biệt <br /> Anh có một món quà nhỏ muốn dành cho em</div>
      {/* <p className='ready'>Sẵn sàng rùi thì bấm vào nút dưới này nha</p> */}
      <button className='start' onClick={() => props.toggle()}>Bấm vào đây để nhận nha</button>
    </div>
    )
}