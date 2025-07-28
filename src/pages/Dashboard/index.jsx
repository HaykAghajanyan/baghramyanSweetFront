import React from "react";
import styles from "./dashboard.module.scss";

// Placeholder images (replace with local assets if needed)
const cupcake =
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80";
const macaron =
  "https://www.pngall.com/wp-content/uploads/5/Macaron-PNG-Image.png";
const blueberry =
  "https://www.pngall.com/wp-content/uploads/5/Blueberry-PNG-Image.png";
const strawberry =
  "https://www.pngall.com/wp-content/uploads/5/Strawberry-PNG-Image.png";
const lavenderCake =
  "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80";
const berryTart =
  "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=600&q=80";
const muffin =
  "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80";
const icecream =
  "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=600&q=80";

function CurvedText({ text, radius = 120, startAngle = -90, className }) {
  // SVG arc text utility
  const chars = text.split("");
  const charDegrees = 180 / (chars.length - 1);
  return (
    <svg
      width={radius * 2}
      height={radius + 40}
      className={className}
      style={{ overflow: "visible" }}
    >
      {chars.map((char, i) => {
        const angle = startAngle + i * charDegrees;
        const x = radius + radius * Math.cos((angle * Math.PI) / 180);
        const y = radius + radius * Math.sin((angle * Math.PI) / 180);
        return (
          <text
            key={i}
            x={x}
            y={y}
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="Georgia, serif"
            fontSize="32"
            fill="#a16dc7"
            opacity="0.25"
            transform={`rotate(${angle + 90},${x},${y})`}
          >
            {char}
          </text>
        );
      })}
    </svg>
  );
}

const Dashboard = () => (
  <div className={styles.homeWrapper}>
    <div className={styles.maxWidth}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroLeft}>
          <h1 className={styles.heroTitle}>
            YOUR’S
            <br />
            CAKERY
          </h1>
          <div className={styles.heroPrice}>$47</div>
          <div className={styles.heroDesc}>
            Rich plum Lavender cake with delicious bite. Blueberry enriched
            cakes served with specially made homemade touch.
          </div>
          <button className={styles.menuBtn}>menu</button>
        </div>
        <div className={styles.heroRight}>
          <img
            src={cupcake}
            className={styles.heroCupcake}
            alt="Lavender Cupcake"
          />
          <img src={macaron} className={styles.heroMacaron} alt="Macaron" />
          <img
            src={blueberry}
            className={styles.heroBlueberry1}
            alt="Blueberry"
          />
          <img
            src={blueberry}
            className={styles.heroBlueberry2}
            alt="Blueberry"
          />
        </div>
      </section>

      {/* Cakes Section */}
      <section className={styles.cakesSection}>
        <div className={styles.cakeRow}>
          <div className={styles.cakeColLeft}>
            <div className={styles.cakeImageWrap}>
              <img
                src={lavenderCake}
                className={styles.cakeImage}
                alt="Lavender Cake"
              />
              <CurvedText
                text="LAVENDER"
                radius={90}
                className={styles.cakeCurvedText}
              />
            </div>
            <div className={styles.cakePrice}>$57</div>
            <div className={styles.cakeDesc}>
              Rich plum Lavender cake with delicious bite. Blueberry enriched
              cakes served with specially made homemade touch in rich color of
              lavender, freshly made pastries in blueberries/rich vanilla
              icecream.
            </div>
            <button className={styles.knowMoreBtn}>know more</button>
          </div>
          <div className={styles.cakeColRight}>
            <div className={styles.cakeImageWrap}>
              <img
                src={berryTart}
                className={styles.cakeImage}
                alt="Berry Tart"
              />
              <CurvedText
                text="BERRY TART"
                radius={90}
                className={styles.cakeCurvedText}
              />
            </div>
            <div className={styles.cakePrice}>$58</div>
            <div className={styles.cakeDesc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <button className={styles.knowMoreBtn}>know more</button>
          </div>
        </div>
        <div className={styles.cakeRow}>
          <div className={styles.cakeColLeft}>
            <div className={styles.cakeImageWrap}>
              <img src={muffin} className={styles.cakeImage} alt="Muffin" />
              <CurvedText
                text="MUFFIN"
                radius={90}
                className={styles.cakeCurvedText}
              />
            </div>
            <div className={styles.cakePrice}>$12</div>
            <div className={styles.cakeDesc}>
              Rich plum Lavender cake with delicious bite. Blueberry enriched
              cakes served with specially made homemade touch in color of
              lavender, freshly made pastries in blueberry/rich vanilla
              icecream.
            </div>
            <button className={styles.knowMoreBtn}>know more</button>
          </div>
          <div className={styles.cakeColRight}>
            <div className={styles.cakeImageWrap}>
              <img
                src={icecream}
                className={styles.cakeImage}
                alt="Ice Cream"
              />
              <CurvedText
                text="ICECREAM"
                radius={90}
                className={styles.cakeCurvedText}
              />
            </div>
            <div className={styles.cakePrice}>$12</div>
            <div className={styles.cakeDesc}>
              Rich plum Lavender cake with delicious bite. Blueberry enriched
              cakes served with specially made homemade touch in color of
              lavender, freshly made pastries in blueberry/rich vanilla
              icecream.
            </div>
            <button className={styles.knowMoreBtn}>know more</button>
          </div>
        </div>
      </section>

      {/* Special Tart Section */}
      <section className={styles.specialTartSection}>
        <h2 className={styles.specialTartTitle}>SPECIAL TART</h2>
        <div className={styles.specialTartContent}>
          <img
            className={styles.specialTartImage}
            src={berryTart}
            alt="Special Tart"
          />
          <img
            src={strawberry}
            className={styles.specialTartStrawberry}
            alt="Strawberry"
          />
          <div className={styles.specialTartDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
      </section>

      {/* Blog/Vlog Section */}
      <section className={styles.blogSection}>
        <h2 className={styles.blogTitle}>FROM THE VLOG</h2>
        <div className={styles.blogPosts}>
          {[1, 2, 3].map((_, idx) => (
            <div className={styles.blogPost} key={idx}>
              <div className={styles.blogDate}>30 Dec</div>
              <div className={styles.blogPostTitle}>
                Lorem ipsum dolor sit amet, consectetur
              </div>
              <div className={styles.blogPostDesc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit; sed do
                eiusmod tempor incididunt ut labore et
              </div>
              <a className={styles.blogMore} href="#">
                more
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  </div>
);

export default Dashboard;
