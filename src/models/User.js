const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  email:{
    type:String,
    required: true
  },
  favMovie:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:'Movie'
    }
  
  ],
  favGame:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:'Games'
    }
  ],
  favWebseries:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:'Webseries'
    }
  ]
})

UserSchema.methods.assign=async function(id){
  const user=this;
  let count=0
  console.log(id)
  console.log("Inside Assign")
  console.log(user.favMovie.length);
  for(let i=0;i<user.favMovie.length;i++){
    if((user.favMovie[i]).toString()===id){
        count++
    }
    
  }
  if(count==0){
    console.log("if part Running")
    user.favMovie.push(id)
    await user.save()
  }else{
    console.log("Movie Already Exist In Fav List")
  }
}

UserSchema.methods.removeFav=async function(id){
  const user=this;
  for(let i=0;i<user.favMovie.length;i++){
    if((user.favMovie[i]).toString()===id){
        user.favMovie.splice(i,1)
        console.log(id)
    }
    
  }
  await user.save()

}
UserSchema.methods.assignGame=async function(id){
  const user=this;
  let count=0
  console.log(id)
  console.log("Inside Assign")
  console.log(user.favGame.length);
  for(let i=0;i<user.favGame.length;i++){
    if((user.favGame[i]).toString()===id){
        count++
    }
    
  }
  if(count==0){
    console.log("if part Running")
    user.favGame.push(id)
    await user.save()
  }else{
    console.log("Game Already Exist In Fav List")
  }
}
UserSchema.methods.assignWebseries=async function(id){
  const user=this;
  let count=0
  console.log(id)
  console.log("Inside Assign")
  console.log(user.favWebseries.length);
  for(let i=0;i<user.favWebseries.length;i++){
    if((user.favWebseries[i]).toString()===id){
        count++
    }
    
  }
  if(count==0){
    console.log("if part Running")
    user.favWebseries.push(id)
    await user.save()
  }else{
    console.log("Game Already Exist In Fav List")
  }
}

UserSchema.methods.removeGameFav=async function(id){
  const user=this;
  for(let i=0;i<user.favGame.length;i++){
    if((user.favGame[i]).toString()===id){
        user.favGame.splice(i,1)
        console.log(id)
    }
    
  }
  await user.save()

}
UserSchema.methods.removeWebFav=async function(id){
  const user=this;
  for(let i=0;i<user.favWebseries.length;i++){
    if((user.favWebseries[i]).toString()===id){
        user.favWebseries.splice(i,1)
        console.log(id)
    }
    
  }
  await user.save()

}
module.exports = mongoose.model('User', UserSchema)

