import "bootstrap/js/src/collapse.js";
import { Link } from 'react-router-dom';


export const Navbar = () => {
  return (
    <header>
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-info" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand">Bloodbank Management System</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
            <Link className='nav-link' to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to="/requestblood">Request Blood</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to="/donateblood">Donation Request</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to="/kanurunleritalep">Kan ve Kan Ürünleri Talebi</Link>
            </li>

          </ul>
        </div>
        <form className="d-flex">
          <button className="btn btn-outline-success me-5" type="button">
              <Link className='nav-link' to="/login">Login</Link>
          </button>
          <button className="btn btn-primary me-5"  type="button">
               <Link className='nav-link' to="/signup">Sign up</Link>
          </button>
        </form>
      </div>
    </nav>
  </header>
  )
}
