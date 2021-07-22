import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImage"
          src="https://images.pexels.com/photos/1508632/pexels-photo-1508632.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="food image"
        />
        <h1 className="singlePostTitle">
          Healthy Burrito
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="sinlePostAuthor">
            Author: <b>Anna Smith</b>
          </span>
          <span className="sinlePostDate">1 hour ago</span>
        </div>

        <div className="singlePostDescription ">
          <p className="par">
            STEP 1 To make the beans, heat the oil in a pan and fry the garlic
            for a minute, then stir in the chipotle paste. Tip in the tomatoes,
            stir and bring to a simmer. Season with salt. Simmer until thick,
            add the beans and cook briefly (make sure any water gets cooked
            off), then stir in the coriander.
          </p>
          <p className="par">
            STEP 2 If you are using cold cooked rice, then warm it through, stir
            in the lime juice, red onion and nuts and season well.
          </p>
          <p className="par">
            STEP 3 Lay out the tortillas and sprinkle over some spinach, add
            some avocado slices and some rice, then top with the bean mix. Add a
            shake of hot sauce, if you like. Roll the bottom up, then fold the
            sides in to stop the filling falling out as you roll. Wrap tightly
            in foil, if you like, and cut in half.
          </p>
        </div>
      </div>
    </div>
  );
}
