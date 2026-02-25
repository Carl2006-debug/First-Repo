const jsonURL = "https://raw.githubusercontent.com/Carl2006-debug/First-Repo/main/courses.json";

fetch(jsonURL)
    .then(response => response.json()) // Convert response to JSON
    .then(data => {
        let studentList = document.getElementById("courses");

        // Check if JSON contains 'courses' array
        if (data.courses && Array.isArray(data.courses)) {
            data.courses.forEach(course => {
                let listItem = document.createElement("li");
                listItem.textContent = `${course.code} - ${course.description} | ${course.year_level} Year | ${course.sem} Sem | ${course.credit} Credits`;
                studentList.appendChild(listItem);
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
