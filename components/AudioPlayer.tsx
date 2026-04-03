// @ts-nocheck
/* oh neat
https://en.wikipedia.org/wiki/Media_control_symbols 
*/

"use client"
import {useState, useEffect, useRef} from "react"
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import ButtonoAudio from '@/components/ButtonoAudio'
import Buttono from '@/components/Buttono'
import TitleScroll from '@/components/TitleScroll'
import data from '@/public/data.json'

interface PlayerProps {
	showit:boolean;
}

export default function Player({showit}: PlayerProps){
	const [finalAudio, setFinalAudio] = useState("./audio/neuromantic_dissector.mp3")
	const [currentTrack, setCurrentTrack] = useState("play a jawn already")
	const [isPlaying, setIsPlaying] = useState(false);
	const audioRef = useRef(null)
	const [volume, setVolume] = useState(0.75)
	const [prevVolume, setPrevVolume] = useState(0.75)
	const [doVolume, setDoVolume] = useState(true)
	const content = data.audio
	const displayKeys = Object.keys(content)
	
	const doAudioButtonMarquee = true;

	setTimeout(() => {
		console.log("AYYYYYYYY")
	}, 2000)

	const changeAudio = (key) => {
		console.log(content[key].filename)
		setFinalAudio("./audio/"+content[key].filename)
		setCurrentTrack(content[key].title)
		setTimeout(() => {
			audioRef.current.load()
		}, 100)
		setTimeout(() => {
			audioRef.current.play()
			setIsPlaying(true)
		}, 200)
	}
	const togglePlay = () => {
		if (isPlaying) {
			audioRef.current.pause()
		} else{
			audioRef.current.play()
		}
		setIsPlaying(!isPlaying)
	}
	const restartTrack = () => {
		audioRef.current.load()
		audioRef.current.play()
		setIsPlaying(true)
	}
	const stopTrack = () => {
		audioRef.current.load()
		setIsPlaying(false)
	}
	const toggleVolume = () => {
		if (doVolume) {
			setVolume(0)
			setDoVolume(false)
			audioRef.current.volume = 0
		} else {
			setVolume(prevVolume)
			setDoVolume(true)
			audioRef.current.volume = prevVolume
		}
	}
	const doSliderChange = (value) => {
		setDoVolume(true)
		setVolume(value)
		setPrevVolume(value) //store the volume so we can go back to it after mute
		audioRef.current.volume = value
	}
	return(
		<div className="w-[70%] mr-[2vw] place-items-center
			h-full
		">
			<audio ref={audioRef} src={finalAudio}/>
				<div>
					<TitleScroll texts={currentTrack}/>
				</div>
				<div className="
					grid grid-cols-3 gap-[0.3vw]
				">
					<button className="smol-button" onClick={togglePlay}>
						{isPlaying ? "⏸" : "▶"}
					</button>
					<button className="smol-button" onClick={restartTrack}>
						⏮
					</button>
					<button className="smol-button" onClick={stopTrack}>
						⏹
					</button>
				</div>
				<div className="w-[9.5vw] mt-[1vh]
					grid grid-cols-10 gap-[2.1vw]
				">
					<div className="">
					<button className="smol-button" onClick={toggleVolume}>
						<div className="w-[1vw]">
						{doVolume ? <p>🔊</p> : <p>🔉 </p>}
						</div>
					</button>
					</div>
					<div className="w-[5.6vw]">
						<Slider
							className="t-slider"
							min={0}
							max={1}
							defaultValue={volume}
							reverse={false}
							step={0.01}
							onChange={doSliderChange}
							trackStyle={{
								backgroundColor:'#ff33ff', height: '1vw',
								borderRadius: '0.1vw'
								}}
							railStyle={{backgroundColor:'#302', height:'1vw',
								borderRadius: '0.1vw'
								}}
							handleStyle={{    borderColor: "#000",
										opacity: 0.99,
								          height: '1vw',
								          width: '1vw',
								          borderRadius:'0.0vw',
								          marginLeft: '-0vw',
								          marginTop: '0vw',
								          backgroundColor: "#cc44ee"}}
						/>
					</div>
				</div>
				<div className="
					w-full h-[30vh]  overflow-hidden overflow-y-auto
					
				">
					{displayKeys.map((key) => (
						<div key={key} className="w-full"
							onClick={() => changeAudio(key)}	
							>
							<Buttono className=""
								doMarquee={true}
								texts={content[key].title}/>
						</div>
					))}
				</div>

		</div>
	)
}
