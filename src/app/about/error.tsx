"use client"
type ErrorType={
    error:Error,
    reset:()=>void
}
export default function Error({error,reset}:ErrorType){
    return(
        <div>
            <h1>Ошибка, бум!</h1>
            <p>{error.message}</p>
            <button onClick={()=> reset()}>Попробовать снова</button>
        </div>
    )
}