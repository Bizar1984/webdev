const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' },
    { title: 'Post Three', body: 'This is post three' }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000); 
}

// getPosts();

function createPost(post) {
    return new Promise((resolve, reject) => {
        // mostly you will be dealing with the reponse
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if(!error) {
                resolve()
                // if there is no error RESOLVE THE PROMISE
            } else {
                reject('Error: could not resolve the promise')
            }
            
        }, 1000);
    });
}

createPost({ title: 'Post Four', body: 'This is post four' })
    .then(getPosts)
    .catch(error => console.log(error));
    // because createPost returns a promise we can use the .then syntax
    // to me it looks just like a callback funtion


// Promise.all when you don't feel like .then .then and more .then
const promise1 = Promise.resolve('Hello people');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>

    setTimeout(resolve, 500, 'Goodbye for now')
);
// fetch api's return a promise
// it requires two .then, one to format and the other one to actually return
// the data
const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json());

Promise.all([promise1, promise2, promise3, promise4])
    .then(values => values.splice(1, 1, 250)
    // values.splice is not a function error but it sill works
    .then(console.log(values)));   
    

    
    

        
    
                








