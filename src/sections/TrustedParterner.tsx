import { logos } from "@/constants"

const TrustedPartner = () => {
  return (
    <section className="bg-slate-950 mt-20 py-20 overflow-hidden">
      <h3 className="text-3xl text-center mb-14 font-arimo font-medium text-white">
        Trusted by Australia&apos;s leading real estate developers & operators
      </h3>

      {/* ROW 1 */}
      <div className="marquee">
        <div className="marquee__track marquee--slow">
          {[...logos, ...logos].map((logo, index) => (
            <div key={`row1-${index}`} className="marquee__item">
              <img
                src={logo.logo}
                alt="partner logo"
                className="h-10 object-contain opacity-80 hover:opacity-100 transition"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ROW 2 (reverse direction) */}
      <div className="marquee mt-16">
        <div className="marquee__track marquee--reverse">
          {[...logos, ...logos].map((logo, index) => (
            <div key={`row2-${index}`} className="marquee__item">
              <img
                src={logo.logo}
                alt="partner logo"
                className="h-10 object-contain opacity-80 hover:opacity-100 transition"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ROW 3 (faster) */}
      <div className="marquee mt-16">
        <div className="marquee__track marquee--fast">
          {[...logos, ...logos].map((logo, index) => (
            <div key={`row3-${index}`} className="marquee__item">
              <img
                src={logo.logo}
                alt="partner logo"
                className="h-10 object-contain opacity-80 hover:opacity-100 transition"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustedPartner
