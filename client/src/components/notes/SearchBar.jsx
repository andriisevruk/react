import { useSelector, useDispatch } from 'react-redux';
import { updateSearch } from '../../slices/noteSlice'

import './css/SearchBar.css'

function SearchBar() {
    const search = useSelector(state => state.notes.search);
    const dispatch = useDispatch()

    const updateSearchHandler = (text) => {
        dispatch(updateSearch(text));
    }

    return (
        <div className='search'>
            <input
                type="text"
                className="form-control"
                placeholder="Search notes..."
                value={search}
                onChange={(e) => updateSearchHandler(e.target.value)}
            />
        </div>
    )
}

export default SearchBar