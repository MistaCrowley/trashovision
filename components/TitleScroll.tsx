
'use client'
import Marquee from "react-fast-marquee"
import {useState, useEffect} from "react"

interface ScrolloProps{
	texts:string;
}

export default function Scrollo({texts}: ScrolloProps){
	const text = texts
	const [remount, setRemount] = useState(0)

	useEffect(() => {
		setRemount(prevKey => prevKey + 1)
	}, [texts])

	return (
		<div className="
			w-[100%]
		">
			<Marquee speed={40} key={remount}>
				<h1> {text} &nbsp;</h1>
			</Marquee>
		</div>
	)
}