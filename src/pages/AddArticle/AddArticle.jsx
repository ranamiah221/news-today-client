import { useForm } from "react-hook-form";

const AddArticle = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <section>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* title or image */}
          <div className="flex w-full gap-5 mb-5">
            <div className="w-1/2">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Title</span>
                </div>
                <input
                  {...register("title")}
                  type="text"
                  placeholder="Title"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
            <div className="w-1/2">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Image</span>
                </div>
                <input {...register('image')}
                  type="file"
                  className="file-input file-input-bordered file-input-accent w-full "
                />
              </label>
            </div>
          </div>
          {/* publisher or category */}
          <div className="flex w-full gap-5 mb-5">
            <div className="w-1/2">
              <span className="label-text">Publisher</span>
              <select
                {...register("publisher")}
                className="select select-bordered w-full "
              >
                <option disabled selected>
                  You the Publisher
                </option>
                <option>Riyasad</option>
                <option>Dev</option>
                <option>Not Out Noman</option>
                <option>Tonoy</option>
              </select>
            </div>
            <div className="w-1/2">
              <span className="label-text">Category</span>
              <select
                {...register("publisher")}
                className="select select-bordered w-full "
              >
                <option disabled selected>
                  You the Publisher
                </option>
                <option>Riyasad</option>
                <option>Dev</option>
                <option>Not Out Noman</option>
                <option>Tonoy</option>
              </select>
              
            </div>
          </div>
          {/* text description  */}
          <div className="w-full">
            <span className="label-text">Description</span>
            <textarea
              {...register("description")}
              className="textarea w-full textarea-bordered"
              placeholder="description"
            ></textarea>
          </div>
          <button className="btn btn-primary w-full mt-5 mb-5">Add Article</button>
        </form>
      </div>
    </section>
  );
};

export default AddArticle;
