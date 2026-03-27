import React from 'react'

export default function Highlight({ icon }) {
  return (
    <div className="highlight">
        <div className="highlight__img">
            {icon}
        </div>
        <h3 className="highlight__subtitle">Easy and Quick</h3>
        <p className="highlight__para">
            Get access to the books you purchsed online instantly.
        </p>
    </div>
  )
}
