import { useState, useRef } from "react"
import "../styles/Search.css"

function Search( {setLocationId, setPage} ) {
    const [error, setError] = useState("")
    const inputRef = useRef()

    const onSubmit = (e) => {
        e.preventDefault();
        
        const id = inputRef.current.value
        if (isNaN(id) || id === "") {
            setError("Invalid number");
            clearError();
            return;
        }
        else if (id < 1 || id > 126) {
            setError("Hey! you must provide an ID from 1 to 126");
            clearError();
            return;
        }
        setLocationId(id)
        setPage(1)
        setError("");
    }

    const clearError = () => {
        setTimeout(() => {
            setError("");
        }, 3000);
    };

  return (
    <form className="search" onSubmit={onSubmit}>
        <input className="search__input" type="number"  ref={inputRef} inputMode="numeric" placeholder="Enter an ID for a universe"/>
        <button className="search__btn">Search</button>
        <p className="message__error">{error}</p>
    </form>
  )
}

export default Search