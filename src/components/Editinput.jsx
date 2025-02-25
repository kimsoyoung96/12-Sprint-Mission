import styles from "./Editinput.module.css";
import { useRef, useState } from "react";
import Image from "next/image";

const Editinput = ({ type, info, placeholder }) => {
  const [imgFile, setImgFile] = useState("");
  const imgRef = useRef();

  const saveImgFile = () => {
    if (!imgRef.current || !imgRef.current.files[0]) {
      console.error("파일이 선택되지 않았습니다.");
      return;
    }

    const file = imgRef.current.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      if (reader.result) {
        setImgFile(reader.result); // reader.result는 base64 데이터 URL
      }
    };

    reader.onerror = () => {
      console.error("파일을 읽는 도중 에러가 발생했습니다.");
    };
  };

  if (type === "img") {
    return (
      <div className={styles.imageSection}>
        <div className={styles.image_upload}>
          <label className={styles.upload_input} for="file_input">
            <Image
              src="/image/img_upload.png"
              width={200}
              height={200}
              alt="이미지를 등록하세요"
            />
            이미지 등록
          </label>
          <input
            id="file_input"
            className={styles.hidden_input}
            type="file"
            onChange={saveImgFile}
            ref={imgRef}
          />
        </div>
        <div className={styles.image_preview}>
          <Image
            src={imgFile || "/image/no-image.png"}
            width={200}
            height={200}
            alt="등록된 이미지"
          />
        </div>
      </div>
    );
  } else {
    return (
      <textarea
        className={`${styles.Editinput} ${styles[`Editinput_${info}`]}`}
        placeholder={placeholder}
      ></textarea>
    );
  }
};

export default Editinput;
