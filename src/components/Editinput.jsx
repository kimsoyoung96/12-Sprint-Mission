import './Editinput.css';
import img_up from '../assets/img_up.png';

const Editinput = ({ type, info, placeholder }) => {
  if (type === 'img') {
    return (
      <div className="image-upload">
        <label className="upload_input" for="file-input">
          <img src={img_up} />
          이미지 등록
        </label>
        <input id="file-input" className="hidden_input" type="file" />
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
