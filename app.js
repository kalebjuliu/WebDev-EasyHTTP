const http = new easyhttp()
/*
http.get('https://jsonplaceholder.typicode.com/posts',
function(err, response){
  if(err){
    console.log(err)
  }else{
    console.log(response)
  }
})
*/
const data = {
  title: 'Custom Post',
  body: 'Custom body'
}

http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, response){
  if(err){
    console.log(err)
  }else{
    console.log(response)
  }
})
