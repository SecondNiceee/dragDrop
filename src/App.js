import { useRef, useState } from "react";
import DragActive from "./components/DragActive";
import "./App.css";
import DragDefault from "./components/DragDefault";
import Dragging from "./components/Dragging";
import checkIt from './images/checkIt.svg';
import { CSSTransition } from "react-transition-group";
import axios from "axios";
function App() {
  const [drag, setDrag] = useState(false);
  const [isUploaded, setUoloaded] = useState(false);
  const [files, setFiles] = useState([]);

  function dragStartHandler(e) {
    e.preventDefault();
    setDrag(true);
  }

  function dragLeaveHandler(e) {
    e.preventDefault();
    setDrag(false);
  }

  function onDropHandler(e) {
    e.preventDefault();
    console.log(e.dataTransfer.files[0])
    chechPdf(e.dataTransfer.files[0])
    setDrag(false);
  }

  const refOne = useRef(null)

  function chechPdf(arg){
    if (arg.type.includes('pdf') ){
      setFiles([arg]) 
      refOne.files = [arg]
    }
    else{
      setBlock(!block)
      setTimeout ( () => {
        setBlock(false)
      }, 1000  )  
      } 
    }
  function sendIt(){
    axios.post('https://f.smartcardio.ru/') 
  }

  const [block , setBlock] = useState(false)


  console.log(files)
  return (
    <form encType = "multipart/form-data" method="post" className="App" action="https://f.smartcardio.ru/"  >
      <CSSTransition in = {block} classNames={'fade'} timeout={500}>
        <div className="errorBlock">
            <p>only pdf is possible</p>
        </div>
      </CSSTransition>
      <input ref = {refOne} style={{display : 'none'}} onChange={ e => { 
        if (e.target.files[0]){
          
          chechPdf(e.target.files[0])
        }
      } }
        type="file" id="myInput" name="datafile" size="40"
        />
         
      <div className="MainContainer">
        {files.length ? (
          <p className="Head">File uploaded</p>
        ) : (
          <p className="Head">Upload a file</p>
        )}


        {files.length ? (
          <div className="bottom__container">
            <div className="bottom__container-images">
              <img style={{transform : 'unset'}} className="checkImg" src={checkIt} />

            </div>
            <div className="imageContainer"> 
              <p className="imageText">{files[0].name}</p>
            </div>
          </div>
        ) : (
          <Dragging
            drag={drag}
            dragStartHandler={dragStartHandler}
            dragLeaveHandler={dragLeaveHandler}
            onDropHandler={onDropHandler}
          />
        )}

        {files.length ? 
        <input onClick={ (e) => { (console.log(refOne.files))   }} value='SEND' type="submit" className="SendButton" />
        : ''
        }
      </div>
    </form>
  );
}

export default App;
