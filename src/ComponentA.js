import "./index.css";
export default function ComponentA({name,color}){
    return(
        <div className="decoration" style={{backgroundColor:color}}>
          <p>{name}</p>
          <p>{color}</p>
        </div>
    )
}