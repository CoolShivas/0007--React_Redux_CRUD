const Create = () => {
    return (
        <>
            <form className="w-50 mx-auto my-5">
                <div className="mb-3">

                    <label for="exampleInputEmail1" className="form-label"> Name </label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>

                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label"> Email </label>
                    <input type="email" className="form-control" id="exampleInputPassword1" />
                </div>

                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label"> Age </label>
                    <input type="number" className="form-control" id="exampleInputPassword1" />
                </div>

                <div className="mb-3">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1"> Male </label>
                </div>
                <div className="mb-3">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1"> Female </label>
                </div>
                <button type="submit" className="btn btn-primary"> Submit </button>
            </form>
        </>
    )
}

export default Create;