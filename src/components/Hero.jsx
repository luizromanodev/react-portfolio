import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/kevinRushProfile.png"

const Hero = () => {
  return <div className="border-b border-neutral-900 pb-4 lg:mb-35">
    <div className="flex flex-wrap">
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
            Luiz Romano
            </h1>
            <span className="bg-gradient-to-r from-pink-400 via-slate-500 to-purple-600 bg-clip-text text-3xl tracking-tight text-transparent">Front-end Developer</span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 lg:p-8">
        <div className="flex justify-center">
          <img src={profilePic} alt="Luiz Romano" />
        </div>
      </div>
    </div>
  </div>
}

export default Hero