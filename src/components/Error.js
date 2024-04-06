import { useRouteError } from "react-router-dom";

function Error(){
    const err = useRouteError();
    return(
        <div>
            <h3>{err.status} : {err.statusText} {" => "} {err.error.message}</h3>
        </div>
    )
}

export default Error;