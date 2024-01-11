const AddArticle = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card w-4/5 shrink-0 shadow-2xl bg-base-100">
        <form className="card-body">
          {/* title and image */}
          <div className="w-full gap-5 flex justify-between ">
            <div className="w-1/2 form-control">
              <label className="label ">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="w-1/2 form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* publisher and tags */}
          <div className="w-full gap-5 flex justify-between ">
            {/* publisher */}
            <div className="w-1/2 form-control">
              <label className="label ">
                <span className="label-text">Publisher</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            {/* tags */}
            <div className="w-1/2 form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* description ---done*/}
          <div className="w-full">
              <label className="label ">
                <span className="label-text">Description</span>
              </label>
              <textarea
                placeholder="description"
                name="description"
                className="textarea textarea-bordered textarea-md w-full "
              ></textarea>
            
          </div>
          {/*special button */}
        </form>
      </div>
    </div>
  );
};

export default AddArticle;
