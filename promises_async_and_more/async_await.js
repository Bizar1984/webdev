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
    }, 2000); 
}

getPosts();

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
            
        }, 4000);
    });
}

// Async / Await
async function init() {
// if you want to use await you need to put async in front of the function
    await createPost({ title: 'Thanks for waiting', body: 'This is post four' });
    // await WAITS for an asynchronous process to complete
    // it waits for createPost to be done, before it calls getPosts

    getPosts();
}

init();

// Async and await in combination with fetch
async function fetchData() {
    const res = await fetch
    ('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();

    const x = data[0];
    console.log(x);
    if(x.name.length > 15) {
        console.log("This name is longer than 10 letters")
    } else console.log(x.name);
    // nice, so this is how you can access the JSON data
    

}

fetchData();

    






    
    

        
    
                








