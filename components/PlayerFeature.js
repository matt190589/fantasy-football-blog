import featureStyles from "../styles/playerfeature.module.css";
import Head from "next/head";

export default function PlayerFeature() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
      </Head>
      <div className={featureStyles.cards}>
        <div className={featureStyles.card}>
          <img
            src="/images/ben-mee.png"
            className={featureStyles.card__image}
          ></img>
          <div className={featureStyles.card__content}>
            <p>Stats </p>
            <p>Stats 2</p>
          </div>
          <div className={featureStyles.card__info}>
            <div>
              <span class="material-symbols-outlined">thumb_up</span>199
            </div>
            <div>
              <a href="./" className={featureStyles.card__link}>
                {" "}
                Player info
              </a>
            </div>
          </div>
        </div>
        <div className={featureStyles.card}>
          <img
            src="/images/ben-mee.png"
            className={featureStyles.card__image}
          ></img>
          <div className={featureStyles.card__content}>
            <p>Stats </p>
            <p>Stats 2</p>
          </div>
          <div className={featureStyles.card__info}>
            <div>
              <span class="material-symbols-outlined">thumb_up</span>199
            </div>
            <div>
              <a href="./" className={featureStyles.card__link}>
                {" "}
                Player info
              </a>
            </div>
          </div>
        </div>
        <div className={featureStyles.card}>
          <img
            src="/images/ben-mee.png"
            className={featureStyles.card__image}
          ></img>
          <div className={featureStyles.card__content}>
            <p>Stats </p>
            <p>Stats 2</p>
          </div>
          <div className={featureStyles.card__info}>
            <div>
              <span class="material-symbols-outlined">thumb_up</span>199
            </div>
            <div>
              <a href="./" className={featureStyles.card__link}>
                {" "}
                Player info
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
