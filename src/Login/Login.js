import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

export default function Login() {
    const [detail,
        setDetail] = useState('');
    console.log("Detail", detail)

    return (
        <div>
            <section className="vh-100 background-radial-gradient overflow-hidden">
                <style
                    dangerouslySetInnerHTML={{
                    __html: "\n .background-radial-gradient {\n background-color: hsl(218, 41%, 15%);\n background-image: radial-gradient(650px circle at 0% 0%,\n hsl(218, 41%, 35%) 15%,\n hsl(218, 41%, 30%) 35%,\n hsl(218, 41%, 20%) 75%,\n hsl(218, 41%, 19%) 80%,\n transparent 100%),\n radial-gradient(1250px circle at 100% 100%,\n hsl(218, 41%, 45%) 15%,\n hsl(218, 41%, 30%) 35%,\n hsl(218, 41%, 20%) 75%,\n hsl(218, 41%, 19%) 80%,\n transparent 100%);\n }\n\n #radius-shape-1 {\n height: 220px;\n width: 220px;\n top: -60px;\n left: -130px;\n background: radial-gradient(#44006b, #ad1fff);\n overflow: hidden;\n }\n\n #radius-shape-2 {\n border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;\n bottom: -60px;\n right: -110px;\n width: 300px;\n height: 300px;\n background: radial-gradient(#44006b, #ad1fff);\n overflow: hidden;\n }\n\n .bg-glass {\n background-color: hsla(0, 0%, 100%, 0.9) !important;\n backdrop-filter: saturate(200%) blur(25px);\n }\n "
                }}/>

                <div className="container py-5 w-75 h-50 ">
                    <div className="row d-flex justify-content-center align-items-center h-75">
                        <div className="col col-xl-10">
                            <div
                                className="card"
                                style={{
                                borderRadius: "1rem"
                            }}>
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                                        <img
                                            src="https://fsa.zobj.net/crop.php?r=AtI5PmKIr10w6jGq0kQ437PbNwCz3sdST4EKewyV9ofOzvPL9uouTlkyAIqJK1A-sV_ByUEZu7gZH2u_shY5uTfD53RCt4MIYWx3B2HZP9JAonvutGsMHFo_8Dn50qko___bukLkwKDwatMiSnGK2OHOKDQy960dY2WAIoRVyiRduAkhLNQKTuRyvzo4lhmbCg1_-QTUogFPnsQb"
                                            alt="login form"
                                            className="img-fluid"
                                            style={{
                                            borderRadius: "1rem 0 0 1rem",
                                            height: "565px",
                                            width: "350px"
                                        }}/>
                                    </div>
                                    <div className="col-md-6   col-lg-7 d-flex align-items-center">
                                        <div className="card-body p-4 p-lg-5   text-black">
                                            <form>
                                                <div className="d-flex align-items-center mb-3 pb-1">
                                                    <i
                                                        className="fas fa-cubes fa-2x me-3"
                                                        style={{
                                                        color: "#ff6219"
                                                    }}/>
                                                    <span className="h1 fw-bold mb-0">Logo</span>
                                                </div>
                                                <h5
                                                    className="fw-normal mb-3 pb-3"
                                                    style={{
                                                    letterSpacing: 1
                                                }}>
                                                    Sign into your account
                                                </h5>
                                                <div className="form-outline mb-4">
                                                    <input
                                                        type="email"
                                                        id="form2Example17"
                                                        className="form-control form-control-lg"
                                                        onChange={(e) => {
                                                        setDetail({
                                                            ...detail,
                                                            email: e.target.value
                                                        })
                                                    }}/>
                                                    <label className="form-label" htmlFor="form2Example17">
                                                        Email address
                                                    </label>
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input
                                                        type="password"
                                                        id="form2Example27"
                                                        className="form-control form-control-lg"
                                                        onChange={(e) => {
                                                        setDetail({
                                                            ...detail,
                                                            pwd: e.target.value
                                                        })
                                                    }}/>
                                                    <label className="form-label" htmlFor="form2Example27">
                                                        Password
                                                    </label>
                                                </div>
                                                <div className="pt-1 mb-4">
                                                    <button className="btn btn-dark btn-lg btn-block" type="button">
                                                        Login
                                                    </button>
                                                </div>
                                                <a className="small text-muted" href="#!">
                                                    Forgot password?
                                                </a>
                                                <p
                                                    className="mb-5 pb-lg-2"
                                                    style={{
                                                    color: "#393f81"
                                                }}>
                                                    Don't have an account?{" "}
                                                    <Link
                                                        to="/create_account"
                                                        style={{
                                                        color: "#393f81"
                                                    }}>
                                                        Register here
                                                    </Link>
                                                </p>
                                                <a href="#!" className="small text-muted">
                                                    Terms of use.
                                                </a>
                                                <a href="#!" className="small text-muted">
                                                    Privacy policy
                                                </a>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    )
}
