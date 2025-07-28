import React, { useState } from "react";
import { Link } from "react-router";
import styles from "./header.module.scss";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search.svg";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img className={styles.logoIcon} src={logo} alt={"logo"} />
        </div>
        <nav className={styles.nav}>
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
          <Link to="/shop" className={styles.navLink}>
            Shop
          </Link>
          <Link to="/products" className={styles.navLink}>
            Products
          </Link>
          <Link to="/contact" className={styles.navLink}>
            Contact Us
          </Link>
        </nav>
        <div className={styles.searchWrapper}>
          <button
            className={styles.searchIconBtn}
            onClick={() => setShowSearch((v) => !v)}
            aria-label="Open search"
          >
            <img className={styles.searchIcon} src={searchIcon} alt="search" />
          </button>
          {showSearch && (
            <div className={styles.searchPanel}>
              <input
                type="text"
                className={styles.searchInput}
                placeholder="Search..."
                autoFocus
              />
              <button className={styles.searchButton}>
                <img src={searchIcon} alt="search" />
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
