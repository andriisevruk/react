import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Routes.css'
import GetNotes from '../notes/GetNotes'
import TodoList from '../todoList/TodoList'

function About() {
    return (
        <div className='about'>
            <div className='container'>
                <h2>About</h2>
                <br />
                <p>Our goal is to provide valuable resources and insights to our audience.
                    In addition to a variety of articles, we offer convenient tools on our platform. Our todolist allows you to create and manage tasks, marking them as completed when done. For note-taking, we have a notelist where you can jot down your thoughts and ideas.</p>
                <p>The user-friendly interface lets you choose colors for each note, adding a personal and vibrant touch to your records. The todolist features task filtering, allowing you to quickly view tasks by status - completed, new, or the entire list.</p>
                <p>Our guiding principle is empowerment. We believe our tools help you become more productive and organized. With integrity at our core, we strive to leave a lasting, positive impact on the world.</p>
                <p>Welcome to a world where innovation knows no bounds. Here, imagination takes flight, turning dreams into reality. As pioneers in our field, we embrace challenges as stepping stones towards breakthroughs, continually raising the bar of what's possible.</p>
                <br />
                <hr />
                <p>Please enjoy your time here and make the most of our tools to achieve your goals!</p>
                <hr />
                <p>Get the latest news and updates by following us: <a href=''>@company2023</a></p>
            </div>
        </div>
    );
}

function NotFound() {
    return <h1>Not found.</h1>
}

const setActive = ({ isActive }) => (isActive ? 'active' : '');

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <a href='/' className="navbar-brand">ListBook</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink to='/about' className="nav-link" activeClassName="active" aria-current="page">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/notes' className="nav-link" activeClassName="active">Notes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/todoList' className="nav-link" activeClassName="active">Todo</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

function Pages() {
    return (
        <div className="pages">
            <Router>
                <Nav />
                <Routes>
                    <Route path='/' element={<About />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/notes' element={<GetNotes />} />
                    <Route path='/todoList' element={<TodoList />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Pages
