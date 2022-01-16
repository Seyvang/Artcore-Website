import React, { Component } from 'react'

class AcuticNotesHead extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             pictures: ["http://xi5th.diverse.jp/assets/images/DVSP-0214.jpg", 
             "https://lastfm.freetls.fastly.net/i/u/300x300/c58262e3dfa04d179e7135db04b061ee.webp",
            "https://m.media-amazon.com/images/I/71fpcVDw1pL._SS500_.jpg"],
             pic: 0
        }
    }
    handleClick(){
        this.setState((prevState) => ({
            pic: (prevState.pic+1) % prevState.pictures.length
        }))

        console.log(this.state.pictures.length)
    }
    render() {
        return (
            <div>
                <img src={this.state.pictures[this.state.pic]} onClick={() => this.handleClick()} alt="Albums of An, Xi, and onoken" className='MainImageHead'/>
            </div>
        )
    }
}

export default AcuticNotesHead
