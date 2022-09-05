import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function Footer() {
  return (
    <footer className="footer fixed-bottom">
      <div className="div">
        <a href="https://github.com/cammeer">
          <img
            src="https://www.shareicon.net/data/2015/09/15/101512_logo_512x512.png"
            alt="Github"
            className="icon"
          />
        </a>
        <a href="https://www.linkedin.com/in/caren-m-6a2626a9/">
          <img
            src="https://pnggrid.com/wp-content/uploads/2021/05/Linkedin-Logo-White-Circle-1024x1024.png"
            alt="LinkedIn"
            className="icon"
          />
        </a>
        <a href="https://treksimple.com/">
          <img
            src="https://treksimple.files.wordpress.com/2020/05/treksimple-logo-white-1.png?w=300"
            alt="treksimple.com"
            className="icon"
          />
        </a>
      </div>
    </footer>
  )
}

export default Footer
