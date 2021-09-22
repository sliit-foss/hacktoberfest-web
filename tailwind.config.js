module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          lighter: "#dbe7d9",
          light: "#91a88c",
          dark: "#4a584b",
        },
        red: {
          light: "#F74700",
          dark: "#B53A25",
        },
        peach: {
          light: "#f3f0e1",
        },
      },
      width: {
        "25w": "25vw",
        "81%": "81%",
        "97%": "97%",
      },
      height: {
        "85vh": "85vh",
        "15vw": "15vw",
        "17vw": "17vw",
        "25vw": "25vw",
        "28vw": "28vw",
      },
      inset: {
        "5%": "5%",
        "7%": "7%",
        "10%": "10%",
        "16%": "16%",
        "18%": "18%",
        "20%": "20%",
        "48%": "48%",
        "49%": "49%",
        "70%": "70%",
      },
      padding: {
        "10%": "10%",
      },
      lineHeight: {
        "extra-loose": "2.5",
      },
      borderRadius: {
        high_curve: "10rem",
      },
      borderWidth: {
        5: "5px",
      },
      fontFamily: {
        genera: ['"genera"'],
      },
    },
  },
  variants: {
    extend: { brightness: ["hover"] },
  },
  plugins: [],
};
