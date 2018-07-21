function easyhttp(){
  this.http = new XMLHttpRequest
}

//Make an HTTP GET Request
easyhttp.prototype.get = function(url, callback){
  this.http.open('GET', url, true)

  let self = this

  this.http.onload = function(){
    if(this.status === 200){
      callback(null, self.http.responseText)
    }else{
      callback('Error: '+ self.http.status)
    }
  }

  this.http.send()
}

//Make an HTTP POST Request

easyhttp.prototype.post = function(url,data,callback){
  this.http.open('POST', url, true)
  this.http.setRequestHeader('Content-type','application/json')

  let self = this

  this.http.onload = function(){
    callback(null, self.http.responseText)
  }

  this.http.send(JSON.stringify(data))
}

//Make an HTTP PUT Request

//Make an HTTP DELETE Request
