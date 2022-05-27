import "./style.css";
function News() {
  return (
    <section id="news_item">
      <img width="100px" src="/images/grass.jpg" alt="green grass" />
      <section id="news_item_right">
        <p>
          <span>Business</span> Bloomberg . 12 hours ago
        </p>
        <h1>
          <a href="">Fertilizer Prices Drop 30% Following Demand Destruction</a>
        </h1>
        <p>
          (Bloomberg) -- Fertilizer prices that had hit records are now plunging
          as buyers reel from sticker shock. Most Read from Bloomberg
        </p>
      </section>
    </section>
  );
}

export default News;
