import { HeroCardType } from "@/constants"


const HeroCard = ({no,heading,filler}:HeroCardType) => {
  return (
    <div className="w-3xs h-fit border-l font-arimo px-9 border-l-gray-950/10" >

<header className="my-2 py-2.5 antialiased">
<h3 className="text-xl text-black/35">{no}</h3>
<h2 className="mt-2.5 text-2xl font-medium ">{heading}</h2>
</header>

<div className="mt-20 text-lg font-medium text-black/45">
    <p>
        {filler}
    </p>
</div>


    </div>
  )
}

export default HeroCard