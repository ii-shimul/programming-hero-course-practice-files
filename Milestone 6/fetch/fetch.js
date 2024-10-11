// async await

const loadComments = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("data load error");
  }
};


fetch("https://jsonplaceholder.typicode.com/users")
	.then((response) => response.json())
	.then((json) => makeList(json));

function makeList(data) {
	const ul = document.getElementById("user-list");
	for (const user of data) {
		const li = document.createElement("li");
		li.innerText = user.name;
		ul.appendChild(li);
	}
}

function loadPosts() {
	fetch("https://jsonplaceholder.typicode.com/posts")
		.then((res) => res.json())
		.then((data) => displayPosts(data));
}

loadPosts();

function displayPosts(posts) {
	const postsCon = document.getElementById("posts");
	for (const post of posts) {
		const div = document.createElement("div");
		div.innerHTML = `
      <h4>User-${post.userId}</h4>
      <h5>${post.title}</h5>
      <p>${post.body}</p>
    `;
		postsCon.appendChild(div);
	}
}

displayPosts();

