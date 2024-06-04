import { useState } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../store";

const Create = () => {

    const dispatch = useDispatch();

    const [users, setUsers] = useState({});

    const getUserData = () => {
        setUsers({ ...users, [event.target.name]: event.target.value });
        // Therefore, event.target.name is name i.e, mention on the mockapi where data appears as {
        //     "name": "Cindy Hane", 
        //     "age": "Chicken",
        //     "gender": "Samarium",
        //     "id": "1"
        //   }, and that is connect by this Create Form input filds with similar way;
        // Whereas the event.target.value will provide the value that is enter in the field;

        console.log({ ...users, [event.target.name]: event.target.value })
        // Here, we are getting the data on console screen;
    }

    const handlerOnSubmitForm = (event) => {
        event.preventDefault();
        console.log("users", users);
        // Submitting the form or data i.e, filled by the user on server with the help of dispatch function of reduxToolKit;
        dispatch(userActions(users));

    }

    return (
        <>
            <center><h1 className="my-2"> Fill the data </h1></center>
            <form className="w-50 mx-auto my-5" onSubmit={handlerOnSubmitForm}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name="name"
                        onChange={getUserData}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputPassword1"
                        name="email"
                        onChange={getUserData}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Age
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="exampleInputPassword1"
                        name="age"
                        onChange={getUserData}
                    />
                </div>

                <div className="mb-3">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                        name="gender"
                        value="Male"
                        onChange={getUserData}
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        Male
                    </label>
                </div>
                <div className="mb-3">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                        name="gender"
                        value="Female"
                        onChange={getUserData}
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        Female
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </>
    );
};

export default Create;
