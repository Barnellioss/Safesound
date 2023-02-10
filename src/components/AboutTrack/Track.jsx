import { nanoid } from 'nanoid'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { requestSong } from '../../redux/songsReducer'
import styles from '../AboutSinger/AboutSingers.module.css'
import Tags from '../AboutSinger/Tags/Tags'



let Track = () => {
    let track = useSelector((state) => state.songsList.song);

    function estimate(number) {
        let main = Math.floor(number / 60000)
        let second = number % 60000 * 0.001
        if (second < 10) {
            return `${main}.0${second}`
        }
        else return `${main}.${second}`

    }

    let image;
    if (track.hasOwnProperty("name")) {
        image = track.album.image.map(a => Object.values(a))[3][0];
    }

    if (track.hasOwnProperty("album")) {
        return (
            <div className={styles.main__items__container}>
                <div className={styles.main__items}>
                    <div className={styles.main__image_block}>
                        <div>
                            <img src={image} alt="artist-image" />
                        </div>
                        <div>
                            <h3 className={styles.main__item_header}>{track.artist.name} - {track.name}</h3>
                        </div>
                    </div>
                    <div className={styles.main__item}>
                        <p className={styles.main__text}>
                            {track.wiki.summary}
                        </p>
                        <p className={styles.main__text}>
                            Duration {estimate(track.duration)}
                        </p>
                        <p className={styles.main__text}>
                            {track.wiki.published}
                        </p>
                    </div>
                </div >
            </div >
        )
    }
    else {
        return (
            <div></div>
        )
    }
}

export default Track;
