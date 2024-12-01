import './Editinput.css';

const Editinput = ({ type, placeholder }) => {
  return (
    <textarea
      className={`Editinput Editinput_${type}`}
      placeholder={placeholder}
    ></textarea>
  );
};

export default Editinput;
