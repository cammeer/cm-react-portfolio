import React from 'react'
import '../../assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Footer() {
  return (
    <footer className="footer fixed-bottom">
      <a href="https://github.com/cammeer">
        <img
          src="https://www.shareicon.net/data/2015/09/15/101512_logo_512x512.png"
          alt="Github"
          className="icon"
        />
      </a>
      <a href="https://www.linkedin.com/in/caren-m-6a2626a9/">
        <img
          src="https://i.pinimg.com/564x/4c/87/d1/4c87d1c257a7b9cc3f28f4c98c5a7686.jpg"
          alt="LinkedIn"
          className="icon"
        />
      </a>
      <a href="https://treksimple.com/">
        <img
          src="https://mpng.subpng.com/20191006/slo/transparent-compass-icon-travel-icon-5d99b50bcd1cc3.1208702815703544438401.jpg"
          alt="treksimple.com"
          className="icon"
        />
      </a>
    </footer>
  )
}

export default Footer
