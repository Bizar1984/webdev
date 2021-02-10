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
    }, 500);
}

getPosts();

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 3000);

    
    // if the create post takes longer than a second we only see three posts
    // because the DOM is already painted.. too little too late
    // it's where callbacks come in. In this case it's calling getPosts again after
    // a certain amount of time (3 seconds) and there the fourth post magically appears!

}

createPost({ title: 'Post Four', body: 'This is post four' }, getPosts);




