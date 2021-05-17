import {NavLink} from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <ul>
        <NavLink to='/' className="" activeClassName="">
          <li>Home</li>
        </NavLink>
        <NavLink to='/Project' className="" activeClassName="">
          <li>Project</li>
        </NavLink>
        <NavLink to='/Contact' className="" activeClassName="">
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  )
}
export default Navigation