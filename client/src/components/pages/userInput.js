// import '../../css/userInput.css';
import React, {
    useRef,
    useState,
    useEffect
} from 'react';
import Uploader from './uploader';



function UserInput() {

const  setPage = useState('Home');
const [file, setFile] = useState(null);
useEffect(() => {
    console.log(file?.filesUploaded[0]?.url)
}, [file, setPage]);

    const inputEl = useRef(null);
    const onButtonClick = () => {
    Uploader({file, setFile})
    inputEl.current.focus();
    };

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
    type = "text"
    placeholder = "What are you dressed as?" 
/>
{file ? <input id='submitBtn'
       name="Submit"
       type="submit"
       text="Submit"
    //    onSubmit={handleFormSubmit}
       />
       : 
       <button id='uploaderBtn'
       ref={inputEl}
       name="photoUpload"
    //    value = {formState.photo}
    //    TODO: Need to get exactly how this is saved - https://cdn.filestackcontent.com/ZwdrAZ3gTve2vZz11jeB or something similar.
       onClick={onButtonClick}
       >Upload a photo</button> } 

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