/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./includes/home2.html"],
  theme: {
    extend: {
      height: {
        '100vh': '100vh',
        '810': '810px',
        '232': '232px', // Added custom height size
        '168': '168px', // Custom height for medium screens
      },
      width: {
        '625': '625px',
        '416': '416px', // Added custom width size
        '300': '300px', // Custom width for medium screens
      },
      padding: {
        '200': '200px',
      },
      colors: {
        'custom': '#A05F3A', // Custom color definition
        'our-services-color': '#A05F3A', 
         primary: "#f06123",
         "rev":"rgba(255, 245, 236, 0.53)"// Another custom color definition
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'sue-ellen': ['Sue Ellen Francisco', 'cursive'],
      },
      fontSize: {
        '6xl': '4rem', // You can adjust the size according to your preference
        '64': '4rem', // Added custom font size
      },
      borderRadius: {
        '15': '15px', // Added custom border radius size
      },
    },
  },
  plugins: [],
};
