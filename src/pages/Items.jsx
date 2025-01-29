import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import Nav from "../components/Nav";
import arrowLeft from "../assets/arrow_left.svg";
import arrowRight from "../assets/arrow_right.svg";
import { ReactComponent as SearchIcon } from "../assets/SearchIcon.svg";
import favorit_img from "../assets/heart_favorit.png";
import noImage from "../assets/no-image.png";
import { getProductData } from "../api/api";
import styles from "./Items.module.css";

const Home = () => {
  const [data, setData] = useState([]);
  const [bestData, setBestData] = useState([]);
  const [sortType, setSortType] = useState("new"); // 정렬 기준 상태 추가

  const productList = useCallback(async () => {
    const productData = await getProductData();
    setData(productData.list || []);
  }, []);

  const bestItems = useCallback(async () => {
    const bestData = await getProductData();
    if (bestData.list) {
      // 좋아요 순으로 정렬 후 상위 4개 데이터만 추출
      const topLikedItems = bestData.list
        .sort((a, b) => b.favoriteCount - a.favoriteCount)
        .slice(0, 4); // 상위 4개만 가져오기

      setBestData(topLikedItems);
    }
  }, []);

  useEffect(() => {
    productList();
    bestItems();
  }, [productList, bestItems]);

  // 정렬 함수
  const sortedData = [...data].sort((a, b) => {
    if (sortType === "new") {
      return new Date(b.createdAt) - new Date(a.createdAt); // 최신순 정렬
    } else if (sortType === "like") {
      return b.favoriteCount - a.favoriteCount; // 좋아요순 정렬
    }
    return 0;
  });

  return (
    <div>
      <Nav />
      <div className={styles.Container}>
        <section className={styles.bestItems}>
          <div className={styles.items_title}>베스트 상품</div>
          <div className={styles.bestItemsBox}>
            {bestData.map((item) => (
              <div key={item.id} className={styles.bestItemsContainer}>
                <div className={styles.itemImg}>
                  <img
                    src={
                      item.images.some(
                        (image) => image === "https://example.com/..."
                      )
                        ? noImage
                        : item.images[0]
                    }
                    alt="상품 사진"
                  />
                </div>
                <div className={styles.itemName}>{item.name}</div>
                <div className={styles.itemPrice}>
                  {item.price.toLocaleString()}원
                </div>
                <div className={styles.itemFavorit}>
                  <img src={favorit_img} alt="좋아요 수" />
                  {item.favoriteCount}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className={styles.totalItems}>
          <div className={styles.item_bar}>
            <div className={`${styles.items_title} ${styles.item}`}>
              전체 상품
            </div>
            <div className={`${styles.searchBox} ${styles.item}`}>
              <input
                className={styles.item_input}
                placeholder="검색할 상품을 입력해주세요"
              />
              <SearchIcon className={styles.search_icon} />
            </div>
            <Link to={"/additem"} className={styles.item}>
              <button className={styles.itemAdd_button}>상품 등록하기</button>
            </Link>
            <select
              className={`${styles.item_select} ${styles.item}`}
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
            >
              <option value="new">최신순</option>
              <option value="like">좋아요순</option>
            </select>
          </div>
          <div className={styles.totalItemsBox}>
            {sortedData.map((item) => (
              <div key={item.id} className={styles.totalItemsContainer}>
                <div className={styles.itemImg}>
                  <img
                    src={
                      item.images.some(
                        (image) => image === "https://example.com/..."
                      )
                        ? noImage
                        : item.images[0]
                    }
                    alt="상품 사진"
                  />
                </div>
                <div className={styles.itemName}>{item.name}</div>
                <div className={styles.itemPrice}>
                  {item.price.toLocaleString()}원
                </div>
                <div className={styles.itemFavorit}>
                  <img src={favorit_img} alt="좋아요 수" />
                  {item.favoriteCount}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      {/* 페이지네이션 영역 구현하지않음 */}
      <section className={styles.pagenation_box}>
        <button className={styles.page_button}>
          <img src={arrowLeft} alt="페이지 이전 화살표" />
        </button>
        <button className={`${styles.page_button} ${styles.active}`}>1</button>
        <button className={styles.page_button}>2</button>
        <button className={styles.page_button}>3</button>
        <button className={styles.page_button}>4</button>
        <button className={styles.page_button}>5</button>
        <button className={styles.page_button}>
          <img src={arrowRight} alt="페이지 다음 화살표" />
        </button>
      </section>
    </div>
  );
};

export default Home;
