import './Editinput.css';

const Editinput = ({ type, info, placeholder }) => {
  if (type === 'img') {
    return <input type="file"></input>;
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
