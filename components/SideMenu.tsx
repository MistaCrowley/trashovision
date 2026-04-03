<<<<<<< HEAD
"use client"
import data from '@/public/data.json'
import Buttono from '@/components/Buttono'
import AudioPlayer from '@/components/AudioPlayer'
import Link from 'next/link'
import {useState} from "react"

// Define the type for the prop (a function that accepts a string and returns void)
interface ChildProps {
  sendDataToParent: (data: string) => void;
}

const Menu: React.FC<ChildProps> = ({ sendDataToParent }) => {

	const content = data.video
	const displayKeys = Object.keys(content)
	const [showMenu, setShowMenu] = useState(true)

	const changeVid = (key) => {
		//console.log(`changing video to ${content[key].filename}`)
		sendDataToParent(content[key].filename)
	}

	return(
	<div className="
		w-[100vw] 
		grid grid-cols-2
	">
		<div></div>
		<div className="
			w-[10vw] h-[100vh]
			bg-[rgba(200,10,255,.5)]
			justify-self-end grid grid-rows-4
		">
			<div className={`${showMenu ? 'visible':'collapse'}`}>
				<div className="
					w-full h-[36vh] absolute left-[90.2vw]
					grid place-items-center
				">
					<h1> V I S U A L S </h1>
					<div className="
						w-[8vw] h-[30vh] mr-[2vw] overflow-x-hidden overflow-y-auto
					">
						{displayKeys.map((key) => (
							<div key={key} className="

								"
								onClick={() => changeVid(key)}	
								>
								<Buttono texts = {content[key].title}/>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="
					absolute top-[38vh] left-[89.5vw]
					w-full h-[20vh]
					grid place-items-center
				">
					<div className={`${showMenu ? 'visible':'collapse'}`}>
						<h1> A U D I O </h1>
					</div>
				<AudioPlayer showit={showMenu}/>
			</div>
			<div className="absolute top-[82.5vh] w-[7vw] h-[15.5vh]
					grid grid-rows-3 place-items-end
				">
				<Link href="https://godintrash.bandcamp.com/"
					 target="_blank" rel="noopener noreferrer"
				>
					<button className="big-button">
					bandcamp </button>
				</Link>
				<Link href="https://linktr.ee/trashgodz"
					 target="_blank" rel="noopener noreferrer"
				>	
					<button className="big-button">
					link🌴 </button>
				</Link>
				<Link href="https://www.youtube.com/@trashgodz42069"
					 target="_blank" rel="noopener noreferrer"
				>	
					<button className="big-button">
					💩tube </button>
				</Link>
			</div>
		</div>
	</div>
	)
}

=======
"use client"
import data from '@/public/data.json'
import Buttono from '@/components/Buttono'
import AudioPlayer from '@/components/AudioPlayer'
import Link from 'next/link'
import {useState} from "react"

// Define the type for the prop (a function that accepts a string and returns void)
interface ChildProps {
  sendDataToParent: (data: string) => void;
}

const Menu: React.FC<ChildProps> = ({ sendDataToParent }) => {

	const content = data.video
	const displayKeys = Object.keys(content)
	const [showMenu, setShowMenu] = useState(true)

	const changeVid = (key) => {
		//console.log(`changing video to ${content[key].filename}`)
		sendDataToParent(content[key].filename)
	}

	return(
	<div className="
		w-[100vw] 
		grid grid-cols-2
	">
		<div></div>
		<div className="
			w-[10vw] h-[100vh]
			bg-[rgba(200,10,255,.5)]
			justify-self-end grid grid-rows-4
		">
			<div className={`${showMenu ? 'visible':'collapse'}`}>
				<div className="
					w-full h-[36vh] absolute left-[90.2vw]
					grid place-items-center
				">
					<h1> V I S U A L S </h1>
					<div className="
						w-[8vw] h-[30vh] mr-[2vw] overflow-x-hidden overflow-y-auto
					">
						{displayKeys.map((key) => (
							<div key={key} className="

								"
								onClick={() => changeVid(key)}	
								>
								<Buttono texts = {content[key].title}/>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="
					absolute top-[38vh] left-[89.5vw]
					w-full h-[20vh]
					grid place-items-center
				">
					<div className={`${showMenu ? 'visible':'collapse'}`}>
						<h1> A U D I O </h1>
					</div>
				<AudioPlayer showit={showMenu}/>
			</div>
			<div className="absolute top-[82.5vh] w-[7vw] h-[15.5vh]
					grid grid-rows-3 place-items-end
				">
				<Link href="https://godintrash.bandcamp.com/"
					 target="_blank" rel="noopener noreferrer"
				>
					<button className="big-button">
					bandcamp </button>
				</Link>
				<Link href="https://linktr.ee/trashgodz"
					 target="_blank" rel="noopener noreferrer"
				>	
					<button className="big-button">
					link🌴 </button>
				</Link>
				<Link href="https://www.youtube.com/@trashgodz42069"
					 target="_blank" rel="noopener noreferrer"
				>	
					<button className="big-button">
					💩tube </button>
				</Link>
			</div>
		</div>
	</div>
	)
}

>>>>>>> 43bacb2bcb33c9ffa4befddfcac1b64b1519dc1d
export default Menu