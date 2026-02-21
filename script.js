const jsonURL = "https://raw.githubusercontent.com/Carl2006-debug/First-Repo/main/courses.json";

fetch(jsonURL)
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    let coursesList = document.getElementById("student-list");

    if (data.courses && Array.isArray(data.courses)) {
      data.courses.forEach(course => {
        let listItem = document.createElement("li");
        listItem.textContent = `${course.code} - ${course.description} | Year: ${course.year_level} | Sem: ${course.sem} | Credits: ${course.credit}`;
        coursesList.appendChild(listItem);
      });
    } else {
      console.error("Expected 'courses' array but got:", data);
    }
  })
  .catch(error => console.error("Error fetching JSON:", error));