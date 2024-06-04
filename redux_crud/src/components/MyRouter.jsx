import ReadDisplay from "./ReadDisplay";
import Create from "./Create";
import { Route } from "react-router-dom";

const MyRouter = () => {
    return (

        <>
            <Route path="/create"> <Create></Create> </Route>
            <Route path="/display"> <ReadDisplay></ReadDisplay> </Route>
        </>
    )
}

export default MyRouter;