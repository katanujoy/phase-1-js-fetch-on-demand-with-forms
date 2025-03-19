fetch(`http://localhost:3000/movies/${input.value}`)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Movie not found!");
        }
        return response.json();
    })
    .then((data) => {
        const title = document.querySelector("section#movieDetails h4");
        const summary = document.querySelector("section#movieDetails p");

        title.textContent = data.title;
        summary.textContent = data.summary;
    })
    .catch((error) => {
        console.log("Error:", error);
        alert("Movie not found. Please enter a valid ID.");
    });
