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
          darker: "#2b3632",
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
        "25vw": "25vw",
        "81%": "81%",
        "97%": "97%",
      },
      height: {
        "25vh": "25vh",
        "35vh": "35vh",
        "85vh": "85vh",
        "15vw": "15vw",
        "17vw": "17vw",
        "25vw": "25vw",
        "28vw": "28vw",
      },
      inset: {
        "8.6rem": "8.6rem",
        "5%": "5%",
        "7%": "7%",
        "10%": "10%",
        "16%": "16%",
        "18%": "18%",
        "20%": "20%",
        "28%": "28%",
        "34%": "34%",
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
        "3xl+": "3rem",
        high_curve: "10rem",
      },
      borderWidth: {
        5: "5px",
      },
      fontFamily: {
        genera: ['"genera"'],
      },
      scale: {
       '101': '1.01',
       '103': '1.03',
      }
    },
  },
  variants: {
    extend: { brightness: ["hover"] },
  },
  plugins: [],
};
