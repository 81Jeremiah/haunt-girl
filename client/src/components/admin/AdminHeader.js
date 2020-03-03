import React from 'react';
import {Link} from 'react-router-dom'

const AdminHeader = () => {
  return(
    <div className="header-bar-warp d-flex">
      <nav className="top-nav-area w-100">
        <ul className="main-menu primary-menu">
          <li className="header-logo"><Link to="/admin/home">THE HAUNT GIRL</Link></li>
          <li><Link to="/admin/posts/new">Add New Review </Link></li>
          <li><Link to="/admin/interviews/new">Add New Interviews</Link></li>
          <li><Link to="/admin/TopLists/new">Add New Top Lists</Link></li>
          <li><Link to="/admin/awards/new">Add Skeleton Keys</Link></li>
          <li><Link to="/admin/about">About</Link></li>
          <li><Link to="admin/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default AdminHeader
