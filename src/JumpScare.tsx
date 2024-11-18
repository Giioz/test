import { useState } from 'react';

const JumpScareButton = ({ imagePath, soundPath }:any) => {
  const [showJumpScare, setShowJumpScare] = useState(false);

  const handleClick = () => {
    setShowJumpScare(true);
    
    // Play the scream sound
    const screamSound = new Audio(soundPath);
    screamSound.play();
    
    // Optional: Hide the jump scare after a certain duration (e.g., 3 seconds)
    setTimeout(() => setShowJumpScare(false), 3000); 
  };

  return (
    <div >
      <div className='div'>
        <img src="./mari.jpg" alt="" style={{ width: '500px' }}/>
        <button className='btn' onClick={handleClick}>მარი დააჭირე ლამაზო</button>
      </div>

      {/* Conditionally render the image when the jump scare is triggered */}
      {showJumpScare && (
        <div>
          <img src={imagePath} alt="Jump scare" style={{ width: '100%', height: '100vh', position: 'absolute', top: '0', left: "0"}} />
        </div>
      )}
    </div>
  );
};

export default JumpScareButton;