// @ts-nocheck
'use client'
import Marquee from "react-fast-marquee"
import {useState, useEffect} from "react"

interface ButtonyProps {
	texts:string;
	doMarquee:boolean;
}

export default function Buttony({texts, doMarquee=false}: ButtonyProps){
	const text = texts
	const [marq, setMarq] = useState(false)
	const [remountKey, setRemountKey] = useState(0)

	const handleRemount = () => {
		setRemountKey(prevKey => prevKey + 1)
	}
	const doMarq = () => {
		if (doMarquee) {
			setMarq(true)
		}
	}
	const stopMarq = () => {
		if (doMarquee) {	
			setMarq(false)
			handleRemount()
		}
	}
	return(	
			<button
				onMouseEnter={doMarq}
				onMouseLeave={stopMarq}
				
				className="
				  bg-[rgba(255,200,255,0.5)]
				  text-gray-800
				  font-bold
				  !text-[0.85vw]
				  w-[7vw]
				  h-[4vh]
				  py-[0vh]
				  px-[0vw]
				  mb-[1vh]
				  mr-[1vw]
				  rounded
				  shadow-lg
				  hover:bg-[rgba(255,200,255,1)]
				  hover:shadow-xl
				  active:shadow-inner
				  transition
				  duration-150
				  ease-in-out
				"
			> 
				<Marquee play={marq} key={remountKey}>
				{text} &nbsp; 
				</Marquee>
			</button>
	)
}
