function Feature({title,content,pictures}){

    return(
        <>
            <div className="feature-item">
            <img src ={pictures}  className="feature-icon" alt="#" />
            <h3 className="feature-item-title">{title}</h3>
            <p>{content}</p>
          </div>
        </>
    )
    }
    
    export default Feature