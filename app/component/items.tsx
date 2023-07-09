"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react";


interface Props{
    user : {
      id: number;
      title: string | null;
      color:string
      activity: string;
  }
}



export default function Items({user}:Props){

const router=useRouter()

const handleDelete=async (id:number)=>{
  await fetch("api/users?id="+id,{
    method:"DELETE"
  })
  router.refresh()
}



const updateHandler=(id:number)=>{
  router.push("/update/"+id)
}


    return(
     <div style={{background:`${user.color}`}} className="bingkai">
        <div className="title-item">
          <h1>{user.title}</h1>
          <span onClick={()=>{handleDelete(user.id)}}>X</span>
        </div>
        <p>{user.activity}</p>
        <div className='tombol'>
          <div onClick={()=>updateHandler(user.id)} className="update-card-button">
            &#128221;
          </div>
        </div>
      </div>
    )
}