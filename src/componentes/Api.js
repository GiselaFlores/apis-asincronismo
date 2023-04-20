import React, {useState, useEffect} from "react";

const Api = () =>{

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://reqres.in/api/users")
            .then(data => data.json())
            .then(json => setUsers(json.data));
    }, []);

    console.log(users);

    return(
        <div>
            <h1 className="mb-5 mt-3 text-white">Usuarios de Api ejemplo</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {users.map(user => (
                    <div className="col">
                        <div className="card m-auto text-bg-dark" style={{width: "18rem"}}>
                        <img src={user.avatar} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{user.first_name} {user.last_name}</h5>
                            <p className="card-text"><span>E-mail:</span> {user.email} </p>
                        </div>
                        </div>
                    </div>
                ))};
            </div>
        </div>
        )
}

export default Api;