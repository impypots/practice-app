import React, { useState, useEffect} from 'react';

export default function Game(props) {
    let prev;
    // let [] = useState();

    // useEffect(() => {
    //     if(props.score >= props.difficulty) {
    //          console.log(props.srcFront)
    //     }
    //  }, [props.srcFront])

    const handleClick = event => {
        console.log("image clicked ;)");
        console.log(event.target);
        // event.target.classList.add("flip-class");
        event.target.style.transform = 'rotateY(180deg)'; 
        event.target.style.pointerEvents = 'none';  
        console.log(props.cardId);    
        if(props.selected == '') {
            props.setSelected(props.cardId)
            props.setPrevCard(event.target)
        }
        if(props.selected !== ''){
            if(props.selected == props.cardId){
                props.setScore(props.score + 1) 
                props.setSelected('');
                
            } else {
                // props.selected.style.transform = 'rotateY(0deg)'; 
                props.setSelected('');
                alert("incorrect sry");
                event.target.style.transform = 'rotateY(0deg)';
                event.target.style.pointerEvents = 'unset';  
                props.prevCard.style.transform = 'rotateY(0deg)'; 
                props.prevCard.style.pointerEvents = 'unset';  
                // event.target.style.pointerEvents = 'unset';
                
            }
                  
        }
        

        
    };

    // console.log(props.cardIndex);    

  return (
    <div className="image-container">
        <div className="image" onClick={(event) => handleClick(event)} >
            <img className="image-front"  src="https://c1.scryfall.com/file/scryfall-card-backs/large/59/597b79b3-7d77-4261-871a-60dd17403388.jpg?1561813353" alt="" />
            <img className="image-back" src={props.srcFront}  alt="" />
        </div>  
    </div>
  )
}