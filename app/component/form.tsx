"use client"

import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { convertToObject } from "typescript"


interface Props{
    sendHandler:(values:any)=>void,
    handleName:(values:string)=>void,
    handleColor:(values:string)=>void,
    name:string,
    setEmail: Dispatch<SetStateAction<string>>
    email:string,
    isLoading:boolean,
    textButton:string,
    isLoadingGetUpdate?:boolean,
    color?:string

}

export default function Form({color,handleColor,textButton,isLoading,sendHandler,handleName,name,setEmail,email,isLoadingGetUpdate}:Props){

    const [slectColor,setSlectColor]=useState([false,false,false,false,false,false])
    const [updateColor,setUpdateColor]=useState(color)

    const colorHandler=(e:number,color:string)=>{
        handleColor(color)
        
        let newColor = [...slectColor]; // Salin nilai slectColor ke array bar
        slectColor.map((v,i)=>{
            if(i==e){
                newColor[i]=true
            }else{
                newColor[i]=false
            }
        })
        // console.log(newColor)
        setSlectColor(newColor)
    }

    
    return(
    <form onSubmit={sendHandler} >
        <input maxLength={16} onChange={(e)=>{handleName(e.target.value)}} value={name}  required type="text"  placeholder={isLoadingGetUpdate?"Loading...":"Title"} className="mt-1 px-3 py-2 border  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500  focus:ring-1"/>
        <textarea maxLength={263} onChange={(e)=>{setEmail(e.target.value)}} value={email}   required  placeholder={isLoadingGetUpdate?"Loading...":"Activity or plan"}  className="mt-1 px-3 py-2 border  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500  focus:ring-1"/>
        <div className="color-sticy">
            <span onClick={()=>{colorHandler(0,"#FDF3B4")}} style={{border:slectColor[0]||color=="#FDF3B4"? "1px solid black":""}}></span>
            <span onClick={()=>{colorHandler(1,"#fdb1b1")}} style={{border:slectColor[1]||color=="#fdb1b1"? "1px solid black":""}}></span>
            <span onClick={()=>{colorHandler(2,"#FFD4AA")}} style={{border:slectColor[2]||color=="#FFD4AA"? "1px solid black":""}}></span>
            <span onClick={()=>{colorHandler(3,"#9af3ff")}} style={{border:slectColor[3]||color=="#9af3ff"? "1px solid black":""}}></span>
            <span onClick={()=>{colorHandler(4,"#ffffff")}} style={{border:slectColor[4]||color=="#ffffff"? "1px solid black":""}}></span>
            <span onClick={()=>{colorHandler(5,"#9affab")}} style={{border:slectColor[5]||color=="#9affab"? "1px solid black":""}}></span>
        </div>
        {/* {updateColor} + {color} */}
        <button className="add">{isLoading ?"Loading..": textButton}</button>
    </form>
    )
}