import "./styles.css"
import { useRouteError } from "react-router-dom";

const ErrorPage = ()=>{
  const error = useRouteError();
  console.error(error);

  return(
    <div className="container">
      <h1 className="error_title">Ops...</h1>
      <h3 className="error_messsage">Page not found!</h3>
    </div>
  )
}

export default ErrorPage