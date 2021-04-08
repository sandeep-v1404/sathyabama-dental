import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="sidebar-wrapper">
            <nav id="sidebar">
                <ul className="list-unstyled components">
                    <li>
                        <Link to="/dashboard"><i className="fa fa-tachometer"></i> Dashboard</Link>
                    </li>
                    <li>
                        <a href="#patientSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i
                            className="fa fa-product-hunt"></i> Patients</a>
                        <ul className="collapse list-unstyled" id="patientSubmenu">
                            <li>
                                <Link to="/admin/patients"><i className="fa fa-clipboard"></i> All</Link>
                            </li>
                            <li>
                                <Link to="/admin/patient"><i className="fa fa-plus"></i> Create</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/admin/users"><i className="fa fa-users"></i> Users</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar
