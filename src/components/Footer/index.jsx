import React from "react";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.maxWidth}>
        <div className={styles.footerContent}>
          {/* Newsletter */}
          <div className={styles.newsletterSection}>
            <h3 className={styles.newsletterTitle}>Stay Connected!</h3>
            <p className={styles.newsletterText}>subscribe to our newsletter</p>
            <form
              className={styles.newsletterForm}
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="your email address"
                className={styles.emailInput}
              />
              <button className={styles.subscribeButton}>subscribe</button>
            </form>
            <div className={styles.underline}></div>
          </div>
          {/* FAQ Columns */}
          <div className={styles.faqGrid}>
            {[1, 2, 3].map((col) => (
              <div className={styles.faqColumn} key={col}>
                <h4 className={styles.faqTitle}>FAQ</h4>
                <ul className={styles.faqList}>
                  <li>
                    <a href="#">Food deliverable</a>
                  </li>
                  <li>
                    <a href="#">Product</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Support</a>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
