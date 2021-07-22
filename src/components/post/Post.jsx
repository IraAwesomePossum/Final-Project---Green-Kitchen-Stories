import "./post.css";

export default function Post(props) {
  return (
    <div className="post">
      <img className="postImage" src={props.image} alt="salad" />
      <div className="postInfo">
        <div className="postCategories">
          <span className="postCategories">Quick Meals</span>
          <span className="postCategories">Big family friendly</span>
        </div>
        <span className="postTitle"> Easy to make salad</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDescription">
        Salads aren’t just for the warm weather months, but when I get my
        vegetable cravings in the winter I change up my salads with heartier
        vegetables and ingredients that have warm, smoky flavors, like roasted
        vegetables and smoked paprika. This Roasted Cauliflower Salad is
        actually a play on one of my other favorite salads, Mediterranean Farro
        Salad. I used the same Lemon Tahini Dressing (because it’s so good that
        I want to pour it on everything) and spiced chickpeas because I thought
        they would provide just the right punch to complement the mellow roasted
        cauliflower. The combination of roasted cauliflower, sweet red onions,
        spiced chickpeas, and tangy lemon tahini dressing might be my favorite
        yet!
      </p>
    </div>
  );
}
