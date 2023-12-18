import React from 'react';
import './module.css'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            {/* <MDBIcon color='secondary' fab icon='facebook-f' /> */}
            <i class="bi bi-facebook"></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
            {/* <i class="bi bi-facebook"></i> */}
          </a>
          <a href='' className='me-4 text-reset'>
            {/* <MDBIcon color='secondary' fab icon='google' /> */}
            <i class="bi bi-google"></i>
          </a>
          <a href='' className='me-4 text-reset'>
            {/* <MDBIcon color='secondary' fab icon='linkedin' /> */}
            <i class="bi bi-linkedin"></i>
          </a>
          <a href='' className='me-4 text-reset'>
            {/* <MDBIcon color='secondary' fab icon='github' /> */}
            <i class="bi bi-github"></i>
          </a>
          
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                {/* <MDBIcon color='secondary' icon='gem' /> */}
                <i className="bi bi-gem me-3"></i>
                Books For All
              </h6>
              <p>
              You’re in the right place. Tell us what titles or genres you’ve enjoyed in the past, and we’ll give you surprisingly insightful recommendations.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>E-Books</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Search</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                {/* <MDBIcon color='secondary' icon='home' /> */}
                <i className="bi bi-house-fill me-2" ></i>
               Kangra, 176022, Himachal Pardesh 
              </p>
              <p>
                {/* <MDBIcon color='secondary' icon='envelope' /> */}
                <i className="bi bi-envelope-at-fill me-2"></i>
                info@example.com
              </p>
              <p>
                {/* <MDBIcon color='secondary' icon='phone'  /> */}
                <i class="bi bi-telephone-fill me-3"></i> + 01 234 567 88
              </p>
              {/* <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
              </p> */}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='#'>
          <span className='p-2'>Booksforall.com</span>
        </a>
      </div>
    </MDBFooter>
  );
}