// import '../../css/userInput.css';
import React, {
    useRef,
    useState,
    useEffect
} from 'react';
import Uploader from './uploader';



function UserInput() {
const  setCurrentPage = useState('Home');
useEffect(() => {
    console.log(file?.filesUploaded[0]?.url)
    setCurrentPage('Home')
}, [file]

    const inputEl = useRef(null);
    const [file, setFile] = useState(null);

    const onButtonClick = () => {
    Uploader({file, setFile})
    inputEl.current.focus();
    };);
    
      // Redirects the user to home after uploading a file
 
      // TODO: code here to send to apollo
  
 
// focus is breaking it. Calling this function any time something is focused.


return ( 
<section id='userInput'>
    <h1>Enter the contest!</h1>
    <form>
<input 
    name = "name"
    type = "text"
    placeholder = "What is your name?"
    required 
/> 

<input 
    name = "name"
    type = "text"
    placeholder = "What are you dressed as?" 
/>

<button id='uploderButton'> Upload a photo </button>

<input id='submitBtn'
            ref={inputEl}
            name="Submit"
            type="submit"
            onClick={onButtonClick}
            text="Submit"
            />
</form>
</section>
);
};

export default UserInput;