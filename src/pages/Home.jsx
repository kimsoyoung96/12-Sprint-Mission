import { Link } from "react-router-dom";
import Button from "../components/Button";
import "./Home.css";
import HomePageSection from "../components/HomePageSection";

const Home = () => {
  return (
    <div>
      <nav className="logo">
        <Link to={"/"}>
          <img src="/image/HomePageLogoImg.png" alt="판다마켓홈페이지 로고" />
        </Link>
        <Link to={"/login"}>
          <Button
            className="homepage-logo-right"
            text={"로그인"}
            type={"Home"}
          />
        </Link>
      </nav>
      <hero>
        <div className="hero_backgroundcolor">
          <div className="hero_container">
            <div className="hero_info">
              <h1>일상의 모든 물건을 거래해 보세요</h1>
              <Link to={"/items"}>
                <Button text={"구경하러 가기"} type={"itemsMove"} />
              </Link>
            </div>
            <img src="/image/heroImage.png" alt="판다가 인사하는 사진" />
          </div>
        </div>
      </hero>
      <main className="display">
        <HomePageSection
          image={"/image/Img_home_01.png"}
          alt={"인기상품 확인 코너"}
          info={"Hot item"}
          title={"인기 상품을 확인해 보세요"}
          text={"가장 HOT한 중고거래 물품을 판다 마켓에서 확인해 보세요"}
          type={"forward"}
        />
        <HomePageSection
          image={"/image/Img_home_02.png"}
          alt={"상품 검색 코너"}
          info={"Search"}
          title={"구매를 원하는 상품을 검색하세요"}
          text={"구매하고 싶은 물품은 검색해서 쉽게 찾아보세요"}
          type={"reverse"}
        />
        <HomePageSection
          image={"/image/Img_home_03.png"}
          alt={"상품 등록 코너"}
          info={"Register"}
          title={"판매를 원하는 상품을 등록하세요"}
          text={"어떤 물건이든 판매하고 싶은 상품을 쉽게 등록하세요"}
          type={"forward"}
        />
      </main>
      <section>
        <div className="hero_backgroundcolor">
          <div className="hero_container">
            <div className="hero_info">
              <h1>믿을 수 있는 판다마켓 중고 거래</h1>
            </div>
            <img src="/image/bottomImg.png" alt="판다가 거래하는 사진" />
          </div>
        </div>
      </section>
      <footer>
        <div className="footerContainer">
          <div className="footerBox">
            <span className="codeit">ⓒcodeit-2024</span>
            <div className="sitelink">
              <a href="/privacy" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
              <a href="/faq" target="_blank" rel="noopener noreferrer">
                FAQ
              </a>
            </div>
            <div className="sns_link">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/image/ic_facebook.png" alt="facebook" />
              </a>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/image/ic_twitter.png" alt="twitter" />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/image/ic_youtube.png" alt="youtube" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/image/ic_instagram.png" alt="instagram" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
