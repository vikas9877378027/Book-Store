import React from 'react'
import Button from "@material-ui/core/Button";
import './Nav.css'
import Home from './Home';
// import { Link } from 'react-router-dom';
import DropDown from './DropDown';
import { Link } from 'react-router-dom';

export default function Navbar() {
  
  return (
    <div>
      
        <div className="TopArea ">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "0vh",
            padding: "3%"
          }}
        >
          <div style={{ marginLeft: "2vw" }}>
            <strong style={{ fontSize: "1.8rem" }}>BooksForAll</strong>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around"
            }}
            className='Navi'
          >
            <Link to="/Home" className="underLine2 hide_on_responsive">
              <Button variant="text" color="default">
                Home
              </Button>
            </Link>
            <Link to="/Books" className="underLine2 hide_on_responsive" href="">
              <Button variant="text" color="default">
                All Books
              </Button>
            </Link>
            <Link to="/buybooks" className="underLine2 hide_on_responsive" href="">
              <Button variant="text" color="default">
                PURCHASE
              </Button>
            </Link>
            <Link to="/aboutus" className="underLine2 hide_on_responsive" href="">
              <Button variant="text" color="default">
                About
              </Button>
            </Link>
            <Link className="underLine2">
              <Button variant="outlined" color="secondary">
              <DropDown/>
              </Button>
            </Link>
          </div>
        </div>
    </div>
    {/* <Home/> */}
    </div>
  )
}

