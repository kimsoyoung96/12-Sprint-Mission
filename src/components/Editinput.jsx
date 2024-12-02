import './Editinput.css';
import img_up from '../assets/img_up.png';
import { useRef, useState } from 'react';

const Editinput = ({ type, info, placeholder }) => {
  const [imgFile, setImgFile] = useState('');
  const imgRef = useRef();

  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

  if (type === 'img') {
    return (
      <div className="imageSection">
        <div className="image_upload">
          <label className="upload_input" for="file_input">
            <img src={img_up} />
            이미지 등록
          </label>
          <input
            id="file_input"
            className="hidden_input"
            type="file"
            onChange={saveImgFile}
            ref={imgRef}
          />
        </div>
        <div className="image_preview">
          <img src={imgFile ? imgFile : ''} />
        </div>
      </div>
    );
  } else {
    return (
      <textarea
        className={`Editinput Editinput_${info}`}
        placeholder={placeholder}
      ></textarea>
    );
  }
};

export default Editinput;
