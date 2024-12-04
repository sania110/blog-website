// Toggle Blog Form
function toggleBlogForm() {
    const form = document.getElementById('blog-form-container');
    form.classList.toggle('active');
}

// Toggle Sign In Form
function toggleSignInForm() {
    const form = document.getElementById('signin-form');
    form.classList.toggle('active');
}

// Sign In Functionality
function signIn() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // For demo, just alert username and password
    alert(`Signed in with Username: ${username}`);
    toggleSignInForm();
}

// Publish Blog Functionality
function publishBlog() {
    const title = document.getElementById('blog-title').value;
    const description = document.getElementById('blog-description').value;
    const image = document.getElementById('blog-image').files[0];
    const blogList = document.getElementById('blog-list');

    // Create a new blog card
    const newBlogCard = document.createElement('div');
    newBlogCard.classList.add('blog-card');

    // Create image element
    const blogImage = document.createElement('img');
    blogImage.src = URL.createObjectURL(image);

    // Create title element
    const blogTitle = document.createElement('h3');
    blogTitle.textContent = title;
    blogTitle.style.color = '#A0522D';  // Set title color to brown

    // Create description element
    const blogDescription = document.createElement('p');
    blogDescription.textContent = description;
    blogDescription.style.color = '#A0522D';  // Set description color to brown

    // Append the title, description, and image to the blog card
    newBlogCard.appendChild(blogImage);
    newBlogCard.appendChild(blogTitle);
    newBlogCard.appendChild(blogDescription);

    // Add the new blog card to the blog list
    blogList.appendChild(newBlogCard);

    // Clear the form
    document.getElementById('blog-title').value = '';
    document.getElementById('blog-description').value = '';
    document.getElementById('blog-image').value = '';

    // Close the form
    toggleBlogForm();
}
