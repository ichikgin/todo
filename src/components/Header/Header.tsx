
import { NavLink } from 'react-router-dom'
import classes from './Header.module.scss'
const Header = () => {
  const getActiveClass = ({isActive}: {isActive:boolean}):string => {
    return `${classes.link} ${isActive? classes.active:''}`
  } 
  return (
     <header className={classes.header}>
        <div className={classes.container}>
<<<<<<< HEAD
          <NavLink to='/' className={getActiveClass}>ToDo</NavLink>
          <NavLink to='/list/' className={getActiveClass}>List</NavLink>
=======
          <NavLink to='/' className={getActiveClass}>Home</NavLink>
          <NavLink to='/todo' className={getActiveClass}>ToDo</NavLink>
>>>>>>> b4578835f559752f58fc3de4a43b3a921fc5a06a

        </div>
    </header>
  )
}

export default Header