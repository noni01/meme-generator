import React from "react"
import memesData from "../memesData.js"

export default function Meme() {
   
   
    const [meme, setMeme] =  React.useState({
        topText:"",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1g8my4.jpg"
    })

    //const [allMemeImages, setAllMemeImages]= React.useState(memesData)
    
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme =>({
            ...prevMeme,
           randomImage: url
        })         
        )
        
    }

    function handleOnChange(event){
        const {name, value} = event.target

        setMeme(prevMeme => ({
            ...prevMeme,
            [name] : value
        }))
    }
    
    return (
        <main>
            <div className="form">
                
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange= {handleOnChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={ handleOnChange}
                />
                <button 
                    className="form--btn"
                    onClick={getMemeImage}
                >
                    Get a new meme image 
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--img" alt="meme" />
                <h1 className="meme--text top"> {meme.topText}</h1>
                <h1 className="meme--text bottom">{meme.bottomText}</h1>

            </div>
            
        </main>
    )
}