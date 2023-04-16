import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './PagesCSS/EditPage.css';
import "./PagesCSS/DeletePage.css";



function DeletePage (props) {
    // Function to handle route change when clicking the Back button
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
    let path = `/loggedin`; 
    navigate(path);
    }
    
    //maps the array to dropdown items and displays each album name
    const options = props.array.map((option) => (
        <option key={option.id} value={JSON.stringify(option)}>
          {option.albumName}
          {/* {option.creator}
          {option.releaseDate}
          {option.albumCover} */}
        </option>
      ));

      {/*variable to hold the selected dropdown option*/}
      const [selectedOption, setSelectedOption] = useState('');

      // handles the getting of the array and storing along with the size for future use
      const [array, setArray] = useState(props.array);
	    const [alength, setAlength] = useState(props.array.length);

      {/* variables to popular hidden input boxes that are then filled with album info */}
      const [albumtb, setAlbumtb] = useState('default');
      const [artisttb, setArtisttb] = useState('default');
      const [acovertb, setAcovertb] = useState('default');
      const [datetb, setDatetb] = useState('default');

      {/* Similar to the variables above but instead are for what to pusht to the array and update the array */}
      const [updatedalbumtb, setupAlbumtb] = useState('');
      const [updatedartisttb, setupArtisttb] = useState('');
      const [updatedacovertb, setupAcovertb] = useState('');
      const [updateddatetb, setupDatetb] = useState('');
      const [signUpVisible, setSignUpV] = useState(false);

      const handledrop= (e) =>{
        setSelectedOption(e.target.value)
      }

      const handleClicker = () =>{
        setAlbumtb(JSON.parse(selectedOption).albumName);
        setArtisttb(JSON.parse(selectedOption).creator);
        setAcovertb(JSON.parse(selectedOption).albumCover);
        setDatetb(JSON.parse(selectedOption).releaseDate);
        setSignUpV(true);
        console.log(JSON.parse(selectedOption).albumName);
      }

      const handleDelete = () => {
        // Filter the array to remove the selected item
        const newArray = props.array.filter(
          (item) => item.id !== JSON.parse(selectedOption).id
        );
      
        // Update the parent component's array and navigate to the main page
        props.updateArray(newArray);
        navigate('/loggedin');
      };
      
      return (
        <>
          <div className="delete-page-wrapper">
            <div className="ddmenu">
              <label htmlFor="options">Select an option:</label>
              <select id="options" onChange={e => handledrop(e)}>
                <option></option>
                {options}
              </select>
            </div>
      
            <p>{selectedOption}</p>
      
            <button onClick={handleClicker} value="choose item to edit" className="confirm-button">Choose Item</button>
            {signUpVisible && (
              <>
                {/* <p>{albumtb}</p> */}
                <input type={'text'} defaultValue={albumtb} readOnly />
                <input type={'text'} defaultValue={artisttb} readOnly />
                <input type={'text'} defaultValue={acovertb} readOnly />
                <input type={'text'} defaultValue={datetb} readOnly />
              </>
            )}
            <div className="buttonbar">
              <button onClick={routeChange} value={'back'}>
                Back
              </button>
              <button onClick={handleDelete}>Submit</button>
            </div>
          </div>
        </>
      )
    };
    
      export default DeletePage;
      