<<<<<<< HEAD
'use client'
import {useState, useEffect, useRef} from "react"

const Player = (currentVid) => {
	const [vidurlB, setVidurlB] = useState("./video/"+currentVid.currentVid)
	
	useEffect(() => {
		setVidurlB("./video/"+currentVid.currentVid)
		console.log(`changing video to ${currentVid.currentVid}`)
	}, [currentVid])

	return (
	<div className="
		w-full h-full
	"
	>
	    <video
	    	key={vidurlB}
	    	width="1920"
	    	height="1080"
	    	disablePictureInPicture={true}
	    	preload="metadata"
	    	autoPlay={true} 
	    	loop={true}
	    	muted={true}
	    >
	    <source src={vidurlB}
	    	type="video/mp4"
	    	/>
	    	browsy no supporty
	    </video>
	</div>
	)
}

=======
'use client'
import {useState, useEffect, useRef} from "react"

const Player = (currentVid) => {
	const [vidurlB, setVidurlB] = useState("./video/"+currentVid.currentVid)
	
	useEffect(() => {
		setVidurlB("./video/"+currentVid.currentVid)
		console.log(`changing video to ${currentVid.currentVid}`)
	}, [currentVid])

	return (
	<div className="
		w-full h-full
	"
	>
	    <video
	    	key={vidurlB}
	    	width="1920"
	    	height="1080"
	    	disablePictureInPicture={true}
	    	preload="metadata"
	    	autoPlay={true} 
	    	loop={true}
	    	muted={true}
	    >
	    <source src={vidurlB}
	    	type="video/mp4"
	    	/>
	    	browsy no supporty
	    </video>
	</div>
	)
}

>>>>>>> 43bacb2bcb33c9ffa4befddfcac1b64b1519dc1d
export default Player 