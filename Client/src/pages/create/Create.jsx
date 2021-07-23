import "./create.css";

export default function Create() {
  return (
    <div className="write">
      <img
        className="writeImage"
        src="https://images.pexels.com/photos/5220010/pexels-photo-5220010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="image"
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input type="text" placeholder="Title" className="writeInput" />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell us something good"
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
