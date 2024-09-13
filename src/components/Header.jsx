import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <header className='flex w-full justify-between p-4 bg-blue-600 text-white'>
      <Link to="/" className='text-3xl text-bold'>Taiyo</Link>
        <nav>
            <ul className='flex gap-4 justify-between text-xl'>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/contacts">Contacts</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header