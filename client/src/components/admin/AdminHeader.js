import React from 'react';
import {Link} from 'react-router-dom'

const AdminHeader = () => {
  return(
    <div class="header-bar-warp d-flex">
      <nav class="top-nav-area w-100">
        <ul class="main-menu primary-menu">
          <li className="header-logo">THE HAUNT GIRL</li>
          <li><Link to="/admin/posts/new">Add New Review </Link></li>
          <li><Link to="/admin/interviews/new">Add New Interviews</Link></li>
          <li><Link to="/admin/TopLists/new">Add New Top Lists</Link></li>
          <li><Link to="/admin/about">About</Link></li>
          <li><Link to="admin/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default AdminHeader