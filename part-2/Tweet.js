function Tweet({name,username,date,message})
{
    return(
        <div className="tweet">
            <span className="name"> {name} </span>
            <span className="username"> {username} </span>
            <span className="date"> {date} </span>
            <p className="message"> {message} </p>
        </div>
    );
}