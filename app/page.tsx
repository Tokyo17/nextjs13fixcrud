import Items from "./component/items"

const getUsers=async()=>{
  try{
    const res=await fetch(process.env.BASE_URL+'/api/users',{cache:"no-store"})
  const json=await res.json()
  return json
  }catch(err){
    console.log("errornya :",err)
  }
  
}

export default async function Home() {

  const users=await getUsers()


  
  return (
      <div className='content-home'>
        {/* {JSON.stringify(users)} */}
        {users?.lists?.map((user:any,index:number)=>(
          <Items key={index} user={user} />
        ))}
      </div>
  )
}
