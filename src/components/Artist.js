import React, { Component } from 'react'
import artists from './/artists.json'

export class Artist extends Component {
    render(props) {
        return (
            <div className='Artist'>
                {artists.artists.map((artist) => (
                    <div className={artist.name}>

                        <h1> {artist.name}</h1>
                        <h2>More info at {artist.wikipedia}</h2>
                        <ol>
                            {artist.albums.map(album=> (
                                <li>{album}</li>
                            ))}
                        </ol>
                        <ul>
                            
                        </ul>
                    </div>
                ))}
            </div>
        )
    }
}

export default Artist
