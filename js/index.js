document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("github-form");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      let search = document.getElementById("search").value;
  
      let originalName = search.split(" ").join("");
  
      document.getElementById("github-container").innerHTML = "";
      //   alert(originalName)
      fetch("https://api.github.com/users/" + originalName)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
  
          document.getElementById("github-container").innerHTML = `
        <a target ="_blank"  href = "https://www.github.com/${originalName}">  <img src = "${data.avatar_url}"/></a>
        <p>${originalName}</p>
        <a target = "_blank" href = "https://www.github.com/${originalName}?tab=repositories"<p>View Repositories</p>
          `;
        })
        .catch((err) => {
          console.log(err);
        });
    });
  });