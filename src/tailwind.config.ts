export default {
  theme: {
    extend: {
      keyframes: {
        gradientMove: {
          "0%": {
            backgroundPosition: "0%",
          },
          "100%": {
            backgroundPosition: "200%",
          },
        },
      },

      animation: {
        gradient: "gradientMove 4s linear infinite",
      },
    },
  },
};