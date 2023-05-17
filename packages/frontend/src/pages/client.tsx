import Logos from "components/atoms/logos";
import Button from "components/atoms/button";
import style from "styles/app.module.css";
import { submitClick } from "services/client";

const ClientPage = (): JSX.Element => {
  const handleClick = (color: string) => {
    submitClick({
      color,
    });
  };
  return (
    <main className={style.main}>
      <header className={style.header}>
        <h1 className={style.headerTitle}>SEC Test Demo Frontend</h1>
        <p className={style.headerDescription}>
          This web application comes with:{" "}
          <code className={style.headerDescriptionCode}>CSS-Modules</code>,{" "}
          <code className={style.headerDescriptionCode}>Jest</code>,{" "}
          <code className={style.headerDescriptionCode}>Commit-lint</code>,{" "}
          <code className={style.headerDescriptionCode}>ESLint</code>,{" "}
          <code className={style.headerDescriptionCode}>Prettier</code> and{" "}
          <code className={style.headerDescriptionCode}>
            Atomic organization for components
          </code>
        </p>
        <div className={style.viteLogoContainer}>
          <Logos.Vite className={style.viteLogo} />
        </div>
      </header>
      <section className={style.copy}>
        <div className={style.copyInner}>
          <Button color="orange" onClick={() => handleClick("orange")}>
            Orange
          </Button>
          <Button onClick={() => handleClick("blue")}>Blue</Button>
        </div>
      </section>

      <footer className={style.footer}>
        <a href="https://github.com/AnTruongQuoc/SECTest">
          An Zhang @ {new Date().getFullYear()}
        </a>
      </footer>
    </main>
  );
};

export default ClientPage;
