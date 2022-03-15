//React
import * as React from 'react';
import { useState, useEffect } from 'react';

//Styles
import * as styles from './Battle.module.scss';

//Components
import Animal from '../Animal/Animal';

const generateStat = (max, offset) => {
    return (Math.ceil(Math.random(max) * max)) + offset;
}

const Battle = ({ data }) => {
    const animals = data.allFile.edges.map((item) => {
        return item.node.childImageSharp.gatsbyImageData
    });
    const starters = animals.filter((animal)=>{
        return animal.images.fallback.src.includes('Turtle') || animal.images.fallback.src.includes('Puppy')
    })
    const [animating, setAnimating] = useState(false);
    const [firstAnimal, setFirstAnimal] = useState({ animalImage: starters[1], attack: 22, health: 24 });
    const [secondAnimal, setSecondAnimal] = useState({ animalImage: starters[0], attack: 25, health: 20 });
    const [outcome, setOutcome] = useState('Tie');
    useEffect(() => {

        let timeout;
        if (animating) {
            timeout = setTimeout(() => {
                //Select random animal images
                const animalOne = Math.floor(Math.random(animals.length) * animals.length);
                const animalTwo = Math.floor(Math.random(animals.length) * animals.length);

                //Generate first animal stats
                const firstAnimalAttack = generateStat(50, 0);
                const firstAnimalHealth = generateStat(50, 0);

                // Determine outcome 
                // This will determine the animations ahead of time, 
                // so second animal stats will need to be chosen accordingly

                //   1 = left wins  ||  2 = tie  ||  3 = right wins 
                let possibleOutcomes = 3;
                let offset = 0;

                //First animal can only win or draw with 50hp
                if (firstAnimalAttack === 50) {
                    possibleOutcomes = 2

                //First animal can only lose or draw with 1hp
                } else if (firstAnimalHealth === 1) {
                    possibleOutcomes = 2;
                    offset = 1;

                //Only outcome is draw when first animal has 1HP / 50ATK
                } else if (firstAnimalAttack === 50 && firstAnimalHealth === 1) {
                    possibleOutcomes = 1;
                    offset = 1;
                }
                const outcomeValue = (Math.ceil(Math.random(possibleOutcomes) * possibleOutcomes)) + offset;


                let outcome = 'N/A';
                let secondAnimalAttack = 0;
                let secondAnimalHealth = 0;

                //Generate second animal stats based on first animal stats and chosen outcome
                if (outcomeValue === 1) {
                    secondAnimalAttack = generateStat(firstAnimalHealth - 1, 0);
                    secondAnimalHealth = generateStat(firstAnimalAttack, 0)
                    outcome = 'Left Wins'
                } else if (outcomeValue === 2) {
                    secondAnimalAttack = generateStat(50 - firstAnimalHealth, firstAnimalHealth);
                    secondAnimalHealth = generateStat(firstAnimalAttack, 0);
                    outcome = 'Tie'
                } else if (outcomeValue === 3) {
                    secondAnimalAttack = generateStat(50 - firstAnimalHealth, firstAnimalHealth);
                    secondAnimalHealth = generateStat(50 - firstAnimalAttack, firstAnimalAttack)
                    outcome = 'Right Wins'
                }


                setFirstAnimal({ animalImage: animals[animalOne], attack: firstAnimalAttack, health: firstAnimalHealth })
                setSecondAnimal({ animalImage: animals[animalTwo], attack: secondAnimalAttack, health: secondAnimalHealth })
                setOutcome(outcome);
                setAnimating(false);
            }, 5000)
        }
        else  {
            timeout = setTimeout(() => {
                setAnimating(true);
            }, 1000)

        }
        return () => { clearTimeout(timeout) }
    }, [animating])

    return (
        <div aria-hidden="true" className={styles.battle}>
            <Animal
                id={'animalOne'}
                animalImage={firstAnimal.animalImage}
                animating={animating}
                attack={firstAnimal.attack}
                health={firstAnimal.health}
                damageTaken={secondAnimal.attack}
                outcome={outcome}
            />
            <Animal
                id={'animalTwo'}
                animalImage={secondAnimal.animalImage}
                animating={animating}
                attack={secondAnimal.attack}
                health={secondAnimal.health}
                damageTaken={firstAnimal.attack}
                outcome={outcome}
            />
        </div>
    )
}
export default Battle;