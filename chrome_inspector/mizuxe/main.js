
  console.error('An error');
  console.warn('A warning');
  console.dir(document);

  // console.table([{name:'John', email:'test@test.com', age:33}]);

  console.clear();

  console.group('6 oktober'); 
    console.log('Chrome dev tools');
    console.log('Arrays assignments');
    console.log('Some algorithms');
  console.groupEnd('6 oktober');

  console.time('Run Loop');
  for (var i = 0; i < 11; i++) {
      console.log(i);
  };
  console.timeEnd('Run Loop');

  // some testing
  function greaterThan(a,b) {
    console.assert(a > b, {"message":"a is not greater than b","a":a,"b":b});
  }
  
  greaterThan(8,6); // assertion passed, logs nothing

  document.querySelector('button').addEventListener('click', loadUsers());

    // Load Github Users
    function loadUsers(){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users', true);

        xhr.onload = function(){
          if(this.status == 200){
            console.log('Users returned');
          }

            
        }
        

        xhr.send();
    }

  // Set localstorage - will stay until delete/clear
  localStorage.setItem('name','John');
  localStorage.getItem('name');
  

  // Set sessionstorage - will stay until browser close
  sessionStorage.setItem('user', 'Will');

  // Set cookie
  document.cookie = "username=John Doe";