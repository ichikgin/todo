
// import './Header.scss'
import classes from './Header.module.scss'
const Header = () => {
  return (
     <header className={classes.header}>
        <div className={classes.container}>
            <a href="/" className={`${classes.link} ${classes.active}`}>ToDo</a>
        </div>
    </header>
  )
}

export default Header