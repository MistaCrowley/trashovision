"use client"
import {useState, useEffect, useRef} from 'react';
import VideoPlayer from '@/components/VideoPlayer'
import SideMenu from '@/components/SideMenu'


export default function Home( {children} ) {
  const [currentVid, setCurrentVid] = useState("psycho_tunnel.mp4")
  const [showMenu, setShowMenu] = useState(true)
  //const [menuLeft, setMenuLeft] = useState("-8vh")
  const menuLeft = useRef("-8vw")//"-8vh"
  const menuRef = useRef(null)
  const handleDataFromChild = (data:string) => {
    setCurrentVid(data)
  }

  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    // Set initial width
    setScreenWidth(window.innerWidth);

    // Update width on resize
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);


    //hides or shows our boy
  const onMouseMove = (e) => {
        let rect = e.currentTarget.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
      if (screenWidth > 0) {
        if (x < (screenWidth-(screenWidth/10))) {
          hideMenu()
        } else if (x > (screenWidth-(screenWidth/8)) ) {
          showThatMenu()
        } 
      }
  };
      //is that menu poppin awf or nah
  const [menuShown, setMenuShown] = useState(true)
  const moveMenu = () => {
    if (menuRef.current) {
      if (menuShown) {
        hideMenu()
      } else {
        showThatMenu()
      }
    }
  }
  const hideMenu = () => {
    if (menuShown) {
        menuRef.current.style.transform = 'translate(9vw, 0px)';
        menuRef.current.style.transition = 'all 0.3s ease';
        setMenuShown(false)
    }
  }
  const showThatMenu = () => {
        menuRef.current.style.transform = 'translate(0vw, 0px)';
        menuRef.current.style.transition = 'all 0.3s ease';  
        setMenuShown(true)
  }

  const [remountKey, setRemountKey] = useState(0);

  const handleReset = () => {
    setRemountKey(prev => prev + 1); // Changing the key triggers remount
  };

  return (
    <div className="
      w-full h-full 
    " 
      onMouseMove={onMouseMove}
    >
    <div className="absolute top-0">
      <VideoPlayer currentVid={currentVid} />
    </div>
    <div className=" absolute top-0
      w-[100vw] h-[100vh] 
    ">
      <h1> TRASH-O-VISION </h1>
      <div className="absolute top-0 w-full h-full">
          <div className={`absolute z-60 left-[88vw] w-[13vw] h-[5vh]
            grid grid-cols-200 pointer-events-none`}
            ref={menuRef}
          >
          <div className="w-[5vw] z-80 relative left-[0vw]">
            <button className="
              pointer-events-auto
              w-[3vw]
              bg-[rgba(255,0,100,0.2)]
              hover:bg-[rgba(255,0,100,0.6)]
            " onClick={() => moveMenu()}
            > {menuShown ? 'hide': 'try me'} 
              </button>
          </div>
          <div className="relative left-[-87vw] pointer-events-auto">
          <SideMenu key={remountKey} 
            sendDataToParent={handleDataFromChild} />
          </div>
        </div>
      </div>
    </div>   
    </div>
  );
}
