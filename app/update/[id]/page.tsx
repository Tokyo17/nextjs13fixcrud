'use client'
import Form from "@/app/component/form"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"



export default function Update({params}:{params:{id:string}}){

    
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [color,setColor]=useState('')
    const [isLoading,setIsLoading]=useState(false)
    const [isLoadingGetUpdate,setIsLoadingGetUpdate]=useState(false)

    const router=useRouter()
    const id=params.id

    const getData= async ()=>{
        setIsLoadingGetUpdate(true)
        try{
            const res =await fetch("/api/users/"+id)
            const json=await res.json()
            // console.log(json)
            handleName( json.lists.title||'')
            setEmail(json.lists.activity||'')
            setColor(json.lists.color||'')
        }catch(err){
            console.log(err)
        }finally{
            setIsLoadingGetUpdate(false)
        }
    }

    const sendHandler=async(e:any)=>{
        e.preventDefault()
        setIsLoading(true)
        await fetch("/api/users/",{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                id,name,email,color
            })
        }).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
        handleName( '')
            setEmail('')
        setIsLoading(false)
        router.refresh()
        router.push('/')
    }

    const handleName=(e:string)=>{
        
        setName(e)
    }
    const handleColor=(e:string)=>{
        setColor(e)
    }

    useEffect(()=>{
        // console.log(id)
        getData()
    },[])


    return(
        <div>

            <Form color={color} handleColor={handleColor} textButton={"Update Note"} isLoadingGetUpdate={isLoadingGetUpdate} sendHandler={sendHandler} handleName={handleName} name={name}  setEmail={setEmail} email={email} isLoading={isLoading} />
            {color}
        </div>
    )
}