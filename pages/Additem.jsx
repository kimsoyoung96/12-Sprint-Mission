import styles from "./Additem.module.css";
import Nav from "../src/components/Nav";
import Button from "../src/components/Button";
import Itemtitle from "../src/components/Itemtitle";
import Editsection from "../src/components/Editsection";
import Editinput from "../src/components/Editinput";

export default function Additem() {
  return (
    <div className={styles.Additem}>
      <Nav />
      {/* 아래는 상품등록 페이지 구현 */}
      <form className={styles.edit}>
        <div className={styles.edit_title}>
          <Itemtitle
            leftChild={"상품 등록하기"}
            rightChild={<Button text={"등록"} type={"register"} />}
          />
        </div>
        <div className={styles.edit_info}>
          <Editsection
            topChlid={"상품이미지"}
            center={<Editinput type={"img"} />}
          />
          <Editsection
            topChlid={"상품명"}
            center={
              <Editinput info={"name"} placeholder={"상품명을 입력해주세요"} />
            }
          />
          <Editsection
            topChlid={"상품 소개"}
            center={
              <Editinput
                info={"info"}
                placeholder={"상품 소개를 입력해주세요"}
              />
            }
          />
          <Editsection
            topChlid={"판매가격"}
            center={
              <Editinput
                info={"price"}
                placeholder={"판매 가격을 입력해주세요"}
              />
            }
          />
          <Editsection
            topChlid={"태그"}
            center={
              <Editinput info={"tag"} placeholder={"태그를 입력해주세요"} />
            }
            bottonChild={"태그달부분"}
          />
        </div>
      </form>
    </div>
  );
}
