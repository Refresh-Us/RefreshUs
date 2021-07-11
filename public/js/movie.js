const axios = require('axios');

const Form = document.querySelector("form");
const search = document.querySelector("input");



Form.addEventListener("submit", (event) => {
//   event.preventDefault();
  const movieName = search.value;

// console.log(movieName)
    
  // fetch("/movies?movieName=" + movieName).then((res) => 

  //     res.json()).then((res)=>{
  //       var rendered = Handlebars.render(login, { name: 'Luke' });
  //       // document.getElementById('target').innerHTML = rendered;    
  //     });
  //            }
  //     })
  async function getUser() {
    try {
      const response = await axios.get('/movie', {
    params: {
      movieName: movieName
    }
  })
  console.log(response);
  } catch (error) {
    console.error(error);
  }
}
})