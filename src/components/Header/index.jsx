import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img
        className={styles.coverImg}
        src="https://clinicascoppo.com.br/wp-content/uploads/2021/06/blog-23_06-1140x500.png"
        alt="avatar"
      />
      <h1 className={styles.pageTitle}>Calculadora de IMC</h1>
    </header>
  );
};

export default Header;
