document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById('dark-mode-toggle');


  darkModeToggle.addEventListener('click', () => {
      const isDarkMode = document.body.classList.contains('dark-mode');

      if (isDarkMode) {
          document.body.classList.remove('dark-mode');

          document.body.style.backgroundColor = '#ffffff';
          document.body.style.color = '#333333';
          document.querySelector('h2').style.color = '#222222';
          document.querySelector('h2').style.backgroundColor = '#89c4e1';
          document.body.querySelector('.link').style.color = "red"

          document.querySelectorAll('th').forEach(th => {
              th.style.backgroundColor = '#6a89cc';
          });
          document.querySelectorAll('tr:nth-child(even)').forEach(tr => {
              tr.style.backgroundColor = '#e0e0e0';})

              document.querySelectorAll('tr:nth-child(odd)').forEach(tr => {
                tr.style.backgroundColor = 'grey';
            });
          

          document.querySelectorAll('button').forEach(button => {
              button.style.backgroundColor = '#e3f2fd';
              button.style.color = '#333333';
          });

          localStorage.setItem('theme', 'light');
      } else {
          document.body.classList.add('dark-mode');

          document.body.style.backgroundColor = '#121212';
          document.body.style.color = '#e0e0e0';
          document.querySelector('h2').style.color = '#f1f1f1';
          

          document.querySelectorAll('th').forEach(th => {
              th.style.backgroundColor = '#4a6d96';
          });
          document.querySelectorAll('tr:nth-child(even)').forEach(tr => {
              tr.style.backgroundColor = 'black';
          });
          document.querySelectorAll('tr:nth-child(odd)').forEach(tr => {
            tr.style.backgroundColor = 'grey';
        });
          


          document.querySelectorAll('button').forEach(button => {
              button.style.backgroundColor = '#444444';
              button.style.color = '#e0e0e0';
          });

          
          localStorage.setItem('theme', 'dark');
      }
  });

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
      darkModeToggle.click();
  }
});




function showTeamStats() {
  const teamResultsDiv = document.getElementById("team-results");
  const individualResultsDiv = document.getElementById("individual-results");
  
  teamResultsDiv.style.display = "block";
  individualResultsDiv.style.display = "none";
}


function showAthleteStats() {
  const teamResultsDiv = document.getElementById("team-results");
  const individualResultsDiv = document.getElementById("individual-results");

  teamResultsDiv.style.display = "none";
  individualResultsDiv.style.display = "block";
}

// Select all images on the page
document.querySelectorAll('img').forEach(img => {
    img.onerror = function() {
      this.onerror = null; // Prevents infinite loop if default image is also missing
      this.src = 'path/to/default.jpg';
      this.alt = ""
    };
  });
  