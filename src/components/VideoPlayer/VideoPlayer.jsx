//React
import * as React from 'react';

//Styles
import * as styles from './VideoPlayer.module.scss';

const VideoPlayer = ({title, url, params}) => {
    let fullUrl = url;
    if(params){
        fullUrl = `${url}?`
        for (let param in params){
            fullUrl = fullUrl.concat(param, '=' , params[param], '&')
           
        }
        fullUrl = fullUrl.slice(0, -1)
    }
    return (
        <section className={styles.videoContainer} >
            <h2>Watch the traier</h2>
            <iframe
                src={fullUrl}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </section>
    )
}

export default VideoPlayer;