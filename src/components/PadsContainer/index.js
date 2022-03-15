import Pad from './Pad';
import './style.css';

function PadContainer({ data }) {
	// const datason = JSON.parse(data);

	// Need to apply event handlers for clicking on pads to generate sounds
	function play(event) {
		// var audio = document.getElementById("audio");
		event.target.firstChild.play()
		// event.current.target.play();
		// console.log(document.querySelector('#audio'))
		// document.querySelector('#audio').play();
	}
	

  return (
    <div className="PadContainer" onClick={e => play(e)}>  
			{data.map((data, index) => 
				{
					const { title, sourceStr, style } = data;
					return (
						<Pad 
							title={title}
							sourceStr={sourceStr}
							key={index + style.color}
							style={style}
						></Pad>
				)})}
    </div>
  );
}

export default PadContainer;
