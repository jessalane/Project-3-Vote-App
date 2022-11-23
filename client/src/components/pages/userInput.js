// import '../../css/userInput.css';
import React, {
    useRef,
    useState,
    useEffect
} from 'react';
import Uploader from './uploader';
import {ADD_SUBMISSION} from '../../utils/mutations'
import {useMutation} from '@apollo/client'



function UserInput() {

const  setCurrentPage = useState('Home');
const [file, setFile] = useState(null);
// TODO: set state to true once submitted
// const [submitted, setSubmitted] = useState(false);
useEffect(() => {
    console.log(file?.filesUploaded[0]?.url)
}, [file, setCurrentPage]);

    const inputEl = useRef(null);
    const onButtonClick = (event) => {
        event.preventDefault();
    Uploader({file, setFile})
    inputEl.current.focus();
    };

    // form submission
    const formState = useState({
        user: '', dressedAs: '', photo: ''
    });
    const [addSubmission, { error }] = useMutation(ADD_SUBMISSION);
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
         
          const { data } = await addSubmission({
            variables: { ...formState },
          });
    
          window.location.reload();
        } catch (err) {
          console.error(err);
        }
      };

    
 
      // TODO: code here to send to apollo
  
//  TODO: build function to submit the form, add in the conditional rendering to display confirmation message


return ( 
    <div>
<section id='userInput'>
    <h1>Enter the contest!</h1>
    <form>
<input 
    type = "text"
    value = {formState.user}
    placeholder = "What is your name?"
    required 
/> 

<input 
    name = "name"
    type = "text"
    value = {formState.dressedAs}
    placeholder = "What are you dressed as?" 
/>
{file ? <input id='submitBtn'
       name="Submit"
       type="submit"
       text="Submit"
       onSubmit={handleFormSubmit}
       />
       : 
       <button id='uploaderBtn'
       ref={inputEl}
       name="photoUpload"
       value = {formState.photo}
       onClick={onButtonClick}
       >Upload a photo</button> } 

{error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}

</form>
</section>
</div>
);
};

export default UserInput;