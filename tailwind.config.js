module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
        'main': '#040714',
        'secondary':'#090b13',
        'shadow': 'rgba(0 0 0 /691)',
      },
      backgroundImage:{
        "home":"url('https://github.com/CleverProgrammers/cp-disney-plus-clone/blob/master/public/images/login-background.jpg?raw=true')",
        "banner":"url('../public/images/home-background.png')",
      }
    },

    minWidth: {
      '1/2': '45%',
      '25':"17%",
      "61":'61%'
    },
    maxWidth: {
      '1/2': '45%',
      '24':"5%",
      "61":'61%'
    }
  },
  plugins: [],
}