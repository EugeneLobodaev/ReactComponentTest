import css from "./Cryptocurrencies.module.css";
import profilePhoto1 from "../../assets/icons/profilePhoto1.svg";
import profilePhoto2 from "../../assets/icons/profilePhoto2.svg";
import profilePhoto3 from "../../assets/icons/profilePhoto3.svg";
import profilePhoto4 from "../../assets/icons/profilePhoto4.svg";
import bitcoin from "../../assets/icons/Bitcoin.svg";
import etherium from "../../assets/icons/Ethereum.svg";
import litecoin from "../../assets/icons/Litecoin.svg";
import apple from "../../assets/icons/app-store-svgrepo-com 1.svg";
import google from "../../assets/icons/google-play-svgrepo-com (1) 1.svg";

export const Cryptocurencies = () => {
  return (
    <>
      <div className={css.parent}>
        <h1 className={css.header__title}>
          DO YOU WANT TO LEARN MORE ABOUT CRYPTOCURRENCIES
          <br />
          <span className={css.colored__text}>QUICKLY AND EASILY ?</span>
        </h1>
        <h3 className={css.header__description}>
          Subscribe to our channel to learn more
        </h3>
        <div className={css.stats__wrapper}>
          <div className={css.stats__item}>
            <span className={css.stats__number}>20K+</span>
            <span className={css.stats__text}>subscribers</span>
          </div>
          <div className={css.stats__item}>
            <span className={css.stats__number}>19,5K</span>
            <span className={css.stats__text}>successful cases</span>
          </div>
          <div className={css.stats__item}>
            <span className={css.stats__number}>4.8/5</span>
            <span className={css.stats__text}>rating</span>
          </div>
        </div>
        <button className={css.button} onClick={() => {}}>
          JOIN WHATSAPP
        </button>
        <footer>
          <div className={css.footer__wrapper}>
            <button className={css.footer__button}>
              <img src={google} alt="" />
              <div className={css.button_text__wrapper}>
                <span className={css.footer__text__small}>get in on</span>
                <span className={css.footer__text__big}>Google Play</span>
              </div>
            </button>
            <button className={css.footer__button}>
              <img src={apple} alt="" />
              <div className={css.button_text__wrapper}>
                <span className={css.footer__text__small}>Avaiable on the</span>
                <span className={css.footer__text__big}>App Store</span>
              </div>
            </button>
          </div>
        </footer>
        <div
          className={`${css.comment__item} ${css["comment__item--absolute1"]}`}
        >
          <div className={css.profile__wrapper}>
            <img src={profilePhoto1} alt="" className={css.profile__photo} />
            <div className={css.name__wrapper}>
              <span className={css.name__actual}>Lorenzo</span>
              <span className={css.name__twitter}>@lorenzo</span>
            </div>
          </div>
          <span className={css.comment__text}>
            Amazing Telegram bot! Provides real-time crypto prices and news
          </span>
        </div>
        <div
          className={`${css.comment__item} ${css["comment__item--absolute2"]}`}
        >
          <div className={css.profile__wrapper}>
            <img src={profilePhoto2} alt="" className={css.profile__photo} />
            <div className={css.name__wrapper}>
              <span className={css.name__actual}>ADALINA</span>
              <span className={css.name__twitter}>@ada</span>
            </div>
          </div>
          <span className={css.comment__text}>
            Must-have bot for crypto traders. Accurate signals and analysis
          </span>
        </div>
        <div
          className={`${css.comment__item} ${css["comment__item--absolute3"]}`}
        >
          <div className={css.profile__wrapper}>
            <img src={profilePhoto3} alt="" className={css.profile__photo} />
            <div className={css.name__wrapper}>
              <span className={css.name__actual}>ALEXANDER</span>
              <span className={css.name__twitter}>@alex_x</span>
            </div>
          </div>
          <span className={css.comment__text}>
            Superb cryptocurrency bot! Quick updates and reliable data
          </span>
        </div>
        <div
          className={`${css.comment__item} ${css["comment__item--absolute4"]}`}
        >
          <div className={css.profile__wrapper}>
            <img src={profilePhoto4} alt="" className={css.profile__photo} />
            <div className={css.name__wrapper}>
              <span className={css.name__actual}>RUSHANA</span>
              <span className={css.name__twitter}>@Hana</span>
            </div>
          </div>
          <span className={css.comment__text}>
            Efficient and user-friendly bot. Simplifies crypto trading tasks
          </span>
        </div>
      </div>
      <img
        src={bitcoin}
        alt=""
        className={css.background__icon_absolute1}
        aria-label="background__image--absolute"
      />
      <img
        src={etherium}
        alt=""
        className={css.background__icon_absolute2}
        aria-label="background__image--absolute"
      />
      <img
        src={litecoin}
        alt=""
        className={css.background__icon_absolute3}
        aria-label="background__image--absolute"
      />
    </>
  );
};
