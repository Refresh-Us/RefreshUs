const Form = document.querySelector("form");
const search = document.querySelector("input");
// const Movie=require('../../models/movie')
// import fetch from 'node-fetch';
// const movies=require('../../models/Movie')


Form.addEventListener("submit", (event) => {
//   event.preventDefault();
  const movieName = search.value;
//   messageOne.textContent = "loading";
//   messageOne.textContent = "";
// console.log(movieName)
    
  fetch("/movies?movieName=" + movieName).then((res) => 

      res.json()).then((res)=>{
        var rendered = Handlebars.render(login, { name: 'Luke' });
        // document.getElementById('target').innerHTML = rendered;    
      });
          // res.render('login'),{
          //       // name: req.user.displayName,
          //       // photo: req.user.image,
          //       title:"Movies",
          //       movies:Movie,            
          //   }
      })
    
  
    
      

    // response.render('movie-page',{
    //     // name: req.user.displayName,
    //     // photo: req.user.image,
    //     title:"Movies",
    //     movies:movies,            
    // })
   
  
// });