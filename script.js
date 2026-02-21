const jsonURL = "https://raw.githubusercontent.com/Carl2006-debug/First-Repo/main/courses.json";

fetch(jsonURL)
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    const list = document.getElementById("courses");

    if (data.courses && Array.isArray(data.courses)) {
      data.courses.forEach(course => {
        const li = document.createElement("li");
        li.textContent = `${course.code} - ${course.description} | ${course.year_level} Year | ${course.sem} Sem | ${course.credit} Credits`;
        list.appendChild(li);
      });
    } else {
      console.error("Expected 'courses' array but got:", data);
    }
  })
  .catch(error => console.error("Error fetching JSON:", error));


  function searchFunction() {
  const input = document.getElementById('searchBar').value.toLowerCase();
  const items = document.querySelectorAll('#courses li');

  items.forEach(item => {
    if (item.textContent.toLowerCase().includes(input)) {
      item.style.display = ''; // show
    } else {
      item.style.display = 'none'; // hide
    }
  });
}