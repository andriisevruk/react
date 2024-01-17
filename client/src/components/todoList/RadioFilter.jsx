import './css/RadioFilter.css';
function RadioFilter({ setFilter }) {
    return (
        <div className="btn-group" role="group" aria-label="Second group">
            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked
                onClick={() => setFilter('all')}
            />
            <label className="btn btn-outline-secondary" htmlFor="btnradio1">All</label>
            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"
                onClick={() => setFilter('new')}
            />
            <label className="btn btn-outline-secondary" htmlFor="btnradio2">New</label>
            <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off"
                onClick={() => setFilter('completed')}
            />
            <label className="btn btn-outline-secondary" htmlFor="btnradio3">Completed</label>
        </div>
    )
}
export default RadioFilter