//React
import * as React from 'react';

//Gatsby
import { GatsbyImage } from 'gatsby-plugin-image';

//Styles
import * as styles from './Animal.module.scss';

//Images
import stats from '../../images/stats.png';

const Animal = ({ id, animating, animalImage, attack, health, damageTaken, outcome }) => {
    const className = styles[id];

    let outcomeAnimation = styles.faint;
    if (outcome === 'Left Wins' && id === 'animalOne') {
        outcomeAnimation = styles.survive;
    }  
    if (outcome === 'Right Wins' && id === 'animalTwo') {
        outcomeAnimation = styles.survive;
    } 
    return (
        <div className={`${styles.animalContainer} ${outcomeAnimation} ${id === 'animalTwo' ? styles.flipped : ''} ${animating ? styles.animating : ''}`}>
            <div className={className}>
                <GatsbyImage id={id} alt={id} className={styles.animalImage} image={animalImage}></GatsbyImage>
                <div className={`${styles.stats} ${id === 'animalTwo' ? styles.flipped : ''}`}>
                    <img src={stats} alt="stats"></img>
                    <div className={styles.attackPower}>
                        <p >{attack}</p>
                    </div>
                    <div className={styles.health}>
                        <p className={styles.healthBeforeAttack}>{health}</p>
                        <p className={styles.healthAfterAttack}>{health - damageTaken}</p>
                    </div>
                </div>
            </div>
            <div className={`${styles.damageNumber} ${id === 'animalTwo' ? styles.flippedNumber : ''}`}>{attack}</div>
        </div>
    )
}

export default Animal;