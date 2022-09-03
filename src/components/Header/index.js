import React from 'react'
import '../../assets/css/style.css'

export default function Header() {
  return (
    <div className="hero">
      <h1
        className="title"
        style={{ fontSize: '60px', fontFamily: 'Helvetica' }}
      >
        Caren Merz
      </h1>
      <p
        className="title"
        style={{ fontSize: '20px', fontFamily: 'monospace' }}
      >
        Sr. Technical Writer and Jr. Developer
      </p>
    </div>
  )
}
