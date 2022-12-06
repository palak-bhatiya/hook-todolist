// import React from 'react';
// import logo from './logo.svg';
// import {useState} from 'react'
// import './App.css';


// function App() {
//   const [name,setname] = useState('');
//   const [email,setemail] = useState('');

//   function display(){
//     var n = name;
//     var e = email;
//   }
//   return (
//     <div className="App">
//       <center>
//         <div className="main-section">
//           <div className="name">
//             <input type="text" placeholder='Enter name' size="80"/>
//           </div>
//           <div className="email">
//             <input type="email" placeholder="Enter email" size="80"/>
//           </div>
//           <div className="sub">
//             <input type="submit" value="Submit" onClick={display}/>
//           </div>
//         </div>
//         <div className="display-section">
//           <input type="text" size="50"/><br />
//           <input type="text" size="50"/>
//         </div>
//       </center>
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
// import Tudo from "../img/logo1.webp"
import './App.css';
const Todu = () => {
    const [inputdata, setinputdata] = useState('');
    const [items, setitems] = useState([]);
    const [Einputdata, setEinputdata] = useState('');
    const [Eitems, setEitems] = useState([]);
    const [Pinputdata, setPinputdata] = useState('');
    const [Pitems, setPitems] = useState([]);


    const adata = () => {
        if (!inputdata) { }
        else {
            setitems([...items, inputdata]);
            setinputdata('')
        }

        // email
        if (!Einputdata) { }
        else {
            setEitems([...Eitems, Einputdata]);
            setEinputdata('')
        }

        // password
        if (!Pinputdata) { }
        else {
            setPitems([...Pitems, Pinputdata]);
            setPinputdata('')
        }
    }
    const edit = () => {

    }
    return (
        <>

            <center>
                <div className="main-section">
                    <figure>
                        {/* <img src={require('../img/logo1.webp')} alt="login logo" srcset="" className="logo1" /> */}
                        <figcaption>Add Your Details</figcaption>
                    </figure>
                    <div className="name">
                        <input type="text" placeholder=" Name" value={inputdata} onChange={(e) => setinputdata(e.target.value)} size="80" />
                    </div>
                    <div className="email">
                        <input type="text" placeholder=" Email" value={Einputdata} onChange={(e) => setEinputdata(e.target.value)} size="80" />
                    </div>
                    {/* <div>
                        <input type="text" placeholder=" Password" value={Pinputdata} onChange={(e) => setPinputdata(e.target.value)} size="80" />
                    </div> */}

                    <div className="sub">
                        <input type="submit" placeholder="submit" onClick={adata} value="submit" />
                    </div>


                </div>
            </center>
            
            <div className="display-section flex">
                <div className="name-div">
                    {
                        items.map((elem, ind) => {
                            return (
                                <div className="">
                                    <center>
                                        <input type="text" size="50" value={elem} />
                                    </center>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="email-div">
                    {
                        Eitems.map((elem, ind) => {
                            return (
                                <div>
                                    <center>
                                        <input type="text" size="50" value={elem} />
                                    </center>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="sub">
                    {  
                        items.map((elem, ind) => {
                            return(
                                <div>
                                    <center>
                                        <input type="button" placeholder="Edit" value="Edit" />
                                    </center>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
       </> 
         
    )
}
export default Todu