import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { getActions } from "../store";

const ReadDisplay = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        console.log(getActions());
        dispatch(getActions());
    }, []);

    return (
        <>
            <h1> Get or Display Data from Server </h1>
            <form>
                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </form>

        </>
    )
}

export default ReadDisplay