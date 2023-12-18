import React from 'react';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import './Nav.css'
import CardSlider from './CardSlider';
import Navbar from './Navbar';
import Footer from './Footer';
import BookCards from '../BookCards.js/BookCards';
import BookCards_1 from '../BookCards.js/BookCards_1';
// import { AppContext } from '../Books/Context';
// import DataTable from './DataTable';

export default function Home() {

  // const data = useContext(AppContext);
  
  return (
    <div>
      <Navbar/>
        <div
          style={{
            display: "flex",
            padding: "2% 5% 0px 5%",
            justifyContent: "space-between",
            flexDirection: "row",
            backgroundColor: "white",
            marginTop:"0px"
          }}
          className="container Top_Area_Responsive"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "4vh"
            }}
            className="Top_Area_Text_Left_Responsive"
          >
            {/* <div>Featured Project</div> */}
            <div
              style={{
                marginTop: "5vh",
                fontSize: "50px",
                width: "35vw",
                cursor: "pointer"
              }}
            >
              <span
                className="underLine"
                style={{
                  fontFamily: " 'Ubuntu', sans-serif",
                  fontWeight: "bolder"
                }}
              >
               BooksForAll
              </span>{" "}
              <br />{" "}
              <span
                className="underLine1 Responsive_Head"
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontWeight: "100",
                  lineHeight:"110%"
                }}
              >
               There is nothing better than to read
              </span>
            </div>
            <div style={{ marginTop: "8vh" }} className="Responsive_Head">
              <Button variant="contained" color="secondary">
                More Activities
              </Button>
            </div>
          </div>
          <div style={{ padding: "2%" }} data-aos="zoom-in-up">
            <video
              className="Vid w-75 side_img"
              poster="https://www.npr.org/assets/img/2019/11/25/life-kit_books_harlan_1.gif"
            ></video>
          </div>
        </div>
        <div style={{marginTop:"3rem"}}>
          <Typography
            style={{
              width: "45vw",
              fontSize: "30px",
              margin: "auto",
              // top:"5rem",
              textAlign: "center",
              fontWeight: "lighter"
            }}
            variant="subtitle1"
            color="initial"
          >
          If you want to make intelligent, get books from here.
            <br />
            <Button variant="outlined" color="secondary">
              Contact us
            </Button>
          </Typography>
        </div>

          {/* <DataTable/> */}
<br/><br/>
<div className='content container'>
            <div className='  d-flex'>
              <div className='px-5'>
                 <h1 className='font_heading'>Keep the story going..</h1>
              <p className='w-75 '>Don't let the story end just yet. Continue reading last book and immerse yourself in the world of Books</p>
              <button className='reading' >
               Last Reading &nbsp;
               <i class="bi bi-arrow-up-right-circle"></i>
              </button>
              </div>
              <div className='w-25 '>
                <h6 className='fw-bold'>#BooksForAll</h6>
                <p className='fst-italic font-2'>“Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers.”</p>
              </div>
            </div><br/><br/>
            <div className='w-100'>
              <CardSlider/>
            </div>
            </div>
            <h2 className="container mt-5 font_heading">
              Stay Tuned to get more updates on this! <hr className='underlineHR'/> </h2>

                    <div className='BooksCards d-flex'>
                    <BookCards/>
                    <BookCards_1/>
                    </div>
           <div className='mt-5'><Footer/></div>

{/* <h1>{data}</h1> */}
    </div>
  )
}
