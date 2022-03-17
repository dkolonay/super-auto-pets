//React
import * as React from "react";
import { useState, useRef, useEffect, Fragment } from "react";

//Gatsby
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

//Styles
import * as styles from './index.module.scss';

//Images
import logo from '../images/super-auto-pets-logo.png';
import backgroundImage from '../images/background-full.jpg';

//Components
import Button from "../components/Button/Button";
import Battle from "../components/Battle/Battle";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import Footer from "../components/Footer/Footer";
import Seo from "../components/Seo"; 

const IndexPage = ({ data }) => {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const imageRef = useRef();
  const { title, description, siteUrl } = data.allSite.nodes[0].siteMetadata;

  const loadHero = () => {
    setHeroLoaded(true);
  }
  useEffect(() => {
    if (imageRef.current?.complete) {
      loadHero();
    } 
  }, [])
  return (
    <Fragment>
      <Seo title={title} description={description} siteUrl={siteUrl} />
      <main>
        <section className={`${styles.hero} ${heroLoaded ? styles.heroLoaded : ''}`}>
          <img className={styles.logoTitle} src={logo} alt="Super Auto Pets"></img>
          <Battle data={data} />
          <img src={backgroundImage} alt="Forest Background" ref={imageRef} className={styles.backgroundImage} onLoad={loadHero}></img>
        </section>

        <VideoPlayer
          title="Super Auto Pets Trailer"
          url="https://www.youtube.com/embed/ggRELN8KyHs"
          params={{
            rel: '0',
            color: 'white'
          }
          }
        />

        <section className={styles.linksSection}>
          <h2>Play it Now!</h2>
          <div className={`${styles.buttonRow} ${styles.play}`}>
            <a href="https://store.steampowered.com/app/1714040/Super_Auto_Pets/" className={styles.buttonGroup}>
              <Button >
                <StaticImage
                  src='../images/steam-logo.png'
                  alt="Play on Steam"
                  tracedSVGOptions={{ color: 'rgb(102,31,0)' }}
                  placeholder={"tracedSVG"}
                />
              </Button>
              <p aria-hidden="true">Steam</p>
            </a>
            <a href="https://apps.apple.com/us/app/super-auto-pets/id1597449908" className={styles.buttonGroup}>
              <Button >
                <StaticImage
                  src={'../images/iOS-logo.png'}
                  alt="Play on iOs"
                  tracedSVGOptions={{ color: 'rgb(102,31,0)' }}
                  placeholder={"tracedSVG"}
                />
              </Button>
              <p aria-hidden="true">iOS</p>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.teamwood.spacewood.unity" className={styles.buttonGroup}>
              <Button >
                <StaticImage
                  src={'../images/google-play-logo.png'}
                  alt="Play on Android"
                  tracedSVGOptions={{ color: 'rgb(102,31,0)' }}
                  placeholder={"tracedSVG"}
                />
              </Button>
              <p aria-hidden="true">Android</p>
            </a>
            <a href="https://teamwood.itch.io/super-auto-pets" className={styles.buttonGroup}>
              <Button >
                <StaticImage
                  src={'../images/browser-icon.png'}
                  alt="Play in Browser"
                  tracedSVGOptions={{ color: 'rgb(102,31,0)' }}
                  placeholder={"tracedSVG"}
                />
              </Button>
              <p aria-hidden="true">Browser</p>
            </a>
          </div>
        </section>

        <section className={styles.linksSection}>
          <h2>Feel free to contact us about anything</h2>
          <div className={`${styles.buttonRow} ${styles.contact}`}>
            <a href="mailto:contact@teamwoodgames.com" className={styles.buttonGroup}>
              <Button >
                <StaticImage
                  src={'../images/email-icon.png'}
                  alt="Email"
                  tracedSVGOptions={{ color: 'rgb(102,31,0)' }}
                  placeholder={"tracedSVG"}
                />
              </Button>
              <p aria-hidden="true">Email</p>
            </a>
            <a href="https://twitter.com/TeamWoodGames" className={styles.buttonGroup}>
              <Button >
                <StaticImage
                  src={'../images/twitter-logo.png'}
                  alt="Twitter"
                  tracedSVGOptions={{ color: 'rgb(102,31,0)' }}
                  placeholder={"tracedSVG"}
                />
              </Button>
              <p aria-hidden="true">Twitter</p>
            </a>
            <a href="https://discord.gg/c2VcptyDYZ" className={styles.buttonGroup}>
              <Button >
                <StaticImage
                  src={'../images/discord-logo.png'}
                  alt="Discord"
                  tracedSVGOptions={{ color: 'rgb(102,31,0)' }}
                  placeholder={"tracedSVG"}
                />
              </Button>
              <p aria-hidden="true">Discord</p>
            </a>
          </div>
        </section>
      </main>
      <Footer/>
    </Fragment>
  )
}

export const pageQuery = graphql`
query MyQuery {
  allFile(filter: {relativeDirectory: {eq: "pets"}}) {
    edges {
      node {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
    }
  }
  allSite {
    nodes {
      siteMetadata {
        description
        title
        siteUrl
      }
    }
  }
}
`

export default IndexPage
