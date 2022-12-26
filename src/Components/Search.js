import { MdSearch } from "react-icons/md";

const Search = ({handleSearch }) => {
    return <div className="search">
        <MdSearch size= "2rem"/>
        <input type="text" placeholder="type to search the notes" onChange = { (e) => handleSearch(e.target.value)}/>
    </div>
}
export default Search