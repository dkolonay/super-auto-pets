//React
import * as React from "react"

//Gatsby
import { Link } from "gatsby"

//Styles
import * as styles from './404.module.scss';

//Images
import Turtle from '../images/pets/Turtle.png';

const NotFoundPage = ({ location }) => {
  return (
    <main>
      <div className={styles.errorCard}>
        <h1>Page Not Found...</h1>
        <div className={styles.turtleContainer}>
          <img src={Turtle} alt="Turtle"></img>
          <p className={styles.questionMark}>?</p>
          <p className={styles.questionMark}>?</p>
        </div>

        <p>"{location.origin}/{location.pathname}" is not a page on this site. Head back to the home page to find what you're looking for.</p>
        <Link to="/">Go home</Link>.
      </div>

    </main>
  )
}

export default NotFoundPage
