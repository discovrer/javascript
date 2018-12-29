//Part-1 - AJAX Requests

/*
//Vanilla JS method of AJAX Request
window.onload = function() {
  var http = new XMLHttpRequest();

  http.onreadystatechange = function(){
    if(http.readyState == 4 && http.status == 200){
      console.log(JSON.parse(http.response));
    }
  };

  http.open("GET", "data/tweets.json", true);
  http.send();
  console.log(http);
};
*/

/*
//JQuery method of AJAX Request
$.get("data/tweets.json", function(data) {
  console.log(data);
});
*/

/*
  0 - request not initiated
  1 - request has been set up
  2 - request has been sent
  3 - request is in process
  4 - request is complete
*/

//Part-2 Callback Functions
/*
//Synchronous call
window.onload = function(){
  var fruits = ['banana','apple','pear'];
  fruits.forEach(function(val){
    console.log(val);
  });
  console.log('test');
}
*/

//Asynchronous Call
/*
window.onload = function(){
  $.get('data/tweets.json', function(data){
    console.log(data);
  });
  console.log('test');
};
*/
//Multiple callbacks
/*
window.onload = function(){
  $.ajax({
    type:'GET',
    url:'data/tweets.json',
    success:function(data){
      console.log(data);
      $.ajax({
        type:'GET',
        url:'data/friends.json',
        success:function(data){
          console.log(data);
          $.ajax({
            type:'GET',
            url:'data/videos.json',
            success:function(data){
              console.log(data);
            },
            error:function(jqXHR, textStatus, error){
              console.log(error);
            }
          });
        },
        error:function(jqXHR, textStatus, error){
          console.log(error);
        }
      });
    },
    error:function(jqXHR, textStatus, error){
      console.log(error);
    }
  });
};
*/
//Better way of doing previous task
/*
window.onload = function(){

  function handleError(jqXHR, textStatus, error){
    console.log(error);
  }

  $.ajax({
    type:'GET',
    url:'data/tweets.json',
    success:cbTweets,
    error:handleError
  });

  function cbTweets(data){
    console.log(data);
    $.ajax({
      type:'GET',
      url:'data/friends.json',
      success:cbFriends,
      error:handleError
    });
  }

  function cbFriends(data){
    console.log(data);
    $.ajax({
      type:'GET',
      url:'data/videos.json',
      success:function(data){
        console.log(data);
      },
      error:handleError
    });
  }
};
*/

//Part-3 - Promises
/*
//Javascript Promises
window.onload = function(){
  function get(url){
    return new Promise(function(resolve, reject){
      var xhttp = new XMLHttpRequest();
      xhttp.open('GET',url,true);
      xhttp.onload = function(){
        if(xhttp.status == 200){
          resolve(JSON.parse(xhttp.response));
        }else{
          reject(xhttp.statusText);
        }
      };
      xhttp.onerror = function(){
        reject(xhttp.statusText);
      };
      xhttp.send();
    });
  }

  var promise = get('data/tweets.json');
  promise.then(function(tweets){
    console.log(tweets);
    return get('data/friends.json');
  }).then(function(friends){
    console.log(friends);
    return get('data/videos.json');
  }).then(function(videos){
    console.log(videos);
  }).catch(function(error){
    console.log(error);
  });
};
*/

/*
//JQuery Promises
window.onload = function(){
  $.get('data/tweets.json').then(function(tweets){
    console.log(tweets);
    return $.get('data/friends.json');
  }).then(function(friends){
    console.log(friends);
    return $.get('data/videos.json');
  }).then(function(videos){
    console.log(videos);
  });;
};
*/

//Part-4 - Javascript Generators
//Example-1
/*
window.onload = function(){
  function* gen(){
    var x = yield 10;
  }

  var myGen = gen();
  console.log(myGen.next());  //Observe in console that value is 10 and done is false
  console.log(myGen.next());  //Observe in console that value is undefined and done is true
};
*/
/*
//Example-2
window.onload = function(){
  function* gen(){
    var x = yield 10;
    console.log(x);
  }

  var myGen = gen();
  console.log(myGen.next());
  console.log(myGen.next(10));
};
*/
//Example-3
window.onload = function(){
  genWrap(function*(){
    var tweets = yield $.get('data/tweets.json');
    console.log(tweets);
    var friends = yield $.get('data/friends.json');
    console.log(friends);
    var videos = yield $.get('data/videos.json');
    console.log(videos);
  });

  function genWrap(generator){
    var gen = generator();

    function handle(yielded){
      if(!yielded.done){
        yielded.value.then(function(data){
          return handle(gen.next(data));
        });
      }
    }

    return handle(gen.next());
  }
};
