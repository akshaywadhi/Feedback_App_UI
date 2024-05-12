import React from 'react'

export default function Footer() {
  return (
    <>
  {/* Remove the container if you want to extend the Footer to full width. */}
  <div className="container container-fluid row my-5">
    <hr></hr>
    <footer
      className="text-center text-lg-start"
    >
      <div className="container d-flex justify-content-center py-5">
        <button
          type="button"
          className="btn btn-primary btn-lg btn-floating mx-2"
          style={{ backgroundColor: "black" }}
        >
          <i className="bi bi-twitter" />
        </button>
        <button
          type="button"
          className="btn btn-primary btn-lg btn-floating mx-2"
          style={{ backgroundColor: "red" }}
          href="www.youtube.com"
        >
          <i className="bi bi-youtube" />
        </button>
        <button
          type="button"
          className="btn btn-primary btn-lg btn-floating mx-2"
          style={{ backgroundColor: "#54456b" }}
        >
          <i className="bi bi-instagram" />
        </button>
        <button
          type="button"
          className="btn btn-primary btn-lg btn-floating mx-2"
          style={{ backgroundColor: "blue" }}
        >
          <i class="bi bi-facebook"></i>
        </button>
      </div>

      <div
        className="text-center text-white p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2024 &nbsp;
        <a className="text-white" href="https://mdbootstrap.com/">
           Feedback
        </a>
      </div>
     
    </footer>
  </div>

</>

  )
}
