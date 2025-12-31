import type { Config } from "tailwindcss"

const config: Config = {
  theme: {
    extend: {
     
      animation: {
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
}

export default config
