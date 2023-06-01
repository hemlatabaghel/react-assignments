import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-dark text-center text-white">
        <div className="container p-4 pb-0">
          <section className="mb-4">
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
              ><i className="bi bi-facebook"></i
            ></a>
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
              ><i className="bi bi-twitter"></i
            ></a>
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
              ><i className="bi bi-google"></i
            ></a>
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
              ><i className="bi bi-instagram"></i
            ></a>
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
              ><i className="bi bi-linkedin-in"></i
            ></a>
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
              ><i className="bi bi-github"></i
            ></a>
          </section>
        </div>
        <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}} >
          © 2020 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
      </footer>
    )
}
