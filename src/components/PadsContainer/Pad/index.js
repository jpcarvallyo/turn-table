import './style.css';

function Pad({title, sourceStr, style}) {
  const { color, borderColor } = style;

  return (<div className="PadWrapper">
      <div className="Pad" style={{ backgroundColor: color, borderColor: borderColor}}>
      {/* <h4>{title}</h4> */}
        <audio id="audio" src={sourceStr}></audio>
      </div>
      <h3 className="title">{title}</h3>
    </div>);
}
export default Pad;
