import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import classes from './404.module.scss'
const NotFound = () => {
  return (
    <div className={classes.container}>
      <Helmet>
        <title>NotFound</title>
      </Helmet>
      <h1>NotFound</h1>
      <Link to="/">Уходим от сюда</Link>
      <h2 className={classes.text}>Страницы тут нет, <br/>но  ты заходи, если что...</h2>
    </div>
  );
};

export default NotFound;
