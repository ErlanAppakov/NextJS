export default async function AboutPage(){

    const data= await fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res=>res.json())
    console.log(data);
    

    return(
        <div>
            Hello About!
            {data.title}
        </div>
    )
}