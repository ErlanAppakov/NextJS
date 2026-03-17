


export default async function Home() {
  let response=await fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  console.log(response);
  
  return(
    response.map((user:any)=>{
      return(
        <div key={user.id}>{user.username}</div>
      )
    })
  )
}
