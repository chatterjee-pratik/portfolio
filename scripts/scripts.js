/* Disable right click and copy and keypress */
document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
  });
  
  document.addEventListener("copy", function(event) {
    event.preventDefault();
  });

  document.addEventListener("keydown", function(event) {
    event.preventDefault();
  });

window.addEventListener('resize', function () {
  // Refresh the page when the screen dimensions change
  location.reload();
});
window.addEventListener('orientationchange', function () {
  // Refresh the page when the screen dimensions change
  location.reload();
});

document.addEventListener("DOMContentLoaded", function () {

  /* Set mobile mode properties */
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 640) {
    document.querySelectorAll(".container").forEach(function (container) {
      container.style.setProperty("font-size", "0.95rem");
    });
    //document.body.style.setProperty("font-size", (screen.width * 0.04) + "px");  
    document.querySelectorAll(".container-wrapper").forEach(function (container) {
      container.style.setProperty("width", "90vw");
    });

    document.querySelectorAll("#profile-header-section img").forEach(function (image) {
      image.style.setProperty("width", "4rem");
      image.style.setProperty("height", "4rem");
    });

    document.querySelector("#profile-header-section table").querySelectorAll("td[data-column='2']").forEach(function (cell) {
      cell.parentNode.removeChild(cell);
    });
    document.querySelector("#profile-header-section table").querySelectorAll("td[data-column='1']").forEach(function (cell) {
      cell.style.setProperty("width", "100%");
      var h3 = document.createElement("h3");
      var workplace = document.createElement("a");
      workplace.href = "#section-4";
      workplace.textContent = "Deütsche Borse";
      h3.appendChild(workplace);
      h3.appendChild(document.createTextNode(" \u2022 "));
      var university = document.createElement("a");
      university.href = "#section-5";
      university.textContent = "Universität des Saarlandes";
      h3.appendChild(university);
      cell.appendChild(h3);
    });

    document.getElementById("profile-image").style.setProperty("display", "none");
    const aboutMeSection = document.getElementById("about-me-section");
    const profileImage = document.createElement("img");
    profileImage.src = "https://media.licdn.com/dms/image/D4E03AQFzxkDZQVzL3w/profile-displayphoto-shrink_800_800/0/1719313514606?e=1724889600&v=beta&t=DFRlRmtt1yPDrQY_1UWggxgZY-mn33lBzPXahHSiPlY";
    profileImage.style.setProperty("width", "10rem");
    profileImage.style.setProperty("height", "10rem");
    profileImage.style.setProperty("border-radius", "50%");
    profileImage.style.setProperty("margin", "0 auto");
    profileImage.style.setProperty("display", "block");
    aboutMeSection.insertBefore(profileImage, aboutMeSection.querySelector("table"));

    document.querySelectorAll("#about-me-section ul li").forEach(function (listItem) {
      listItem.style.setProperty("display", "block");
      listItem.style.setProperty("margin-bottom", "1vh");
    });

    document.querySelectorAll("#key-skills-section table").forEach(function (table) {
      const rows = table.rows;
      const newTable = document.createElement('table');
      Array.prototype.forEach.call(rows, function (row) {
        Array.prototype.forEach.call(row.cells, function (cell) {
          const newRow = newTable.insertRow();
          const newCell = newRow.insertCell();
          newCell.innerHTML = cell.innerHTML;
        });
      });
      table.parentNode.replaceChild(newTable, table);
    });

    document.querySelectorAll('#work-experience-section table [data-column="1"]').forEach(function (node) {
      node.style.setProperty("width", "4rem");
    });
    document.querySelectorAll('#work-experience-section table [data-column="2"]').forEach(function (node) {
      node.style.setProperty("width", "55%");
    });
    document.querySelectorAll('#work-experience-section table [data-column="3"]').forEach(function (node) {
      node.style.setProperty("width", "45%");
    });
    document.querySelectorAll('#work-experience-section img').forEach(function (image) {
      image.style.setProperty("width", "4rem");
      image.style.setProperty("height", "4rem");
    });

    document.querySelectorAll('#education-section table [data-column="1"]').forEach(function (node) {
      node.style.setProperty("width", "4rem");
    });
    document.querySelectorAll('#education-section table [data-column="2"]').forEach(function (node) {
      node.style.setProperty("width", "55%");
    });
    document.querySelectorAll('#education-section table [data-column="3"]').forEach(function (node) {
      node.style.setProperty("width", "45%");
    });
    document.querySelectorAll('#education-section img').forEach(function (image) {
      image.style.setProperty("width", "4rem");
      image.style.setProperty("height", "4rem");
    });
  }

  /* Smooth Scrolling When Clicking Anchor Links */
  const navLinks = document.querySelectorAll('.container a');
  // Add event listener to each link
  navLinks.forEach(link => {
    link.addEventListener('click', event => {
      const href = link.getAttribute('href');
      if (href.charAt(0) === '#') {
        event.preventDefault();
        // Get the target section
        const targetSection = document.querySelector(href);
        // Scroll to the target section with smooth behavior
        targetSection.scrollIntoView({ behavior: 'smooth' });
        // Close the navigation menu
        document.getElementById('sidebar-active').checked = false;
      }
    });
  });
  /* Smooth Scrolling When Clicking Anchor Links */

});

function resizeIframe(iframe) {
  iframe.contentWindow.addEventListener("load", function () {
    var iframeBody = iframe.contentDocument.body;
    var iframeWidth = iframeBody.scrollWidth;
    var iframeHeight = iframeBody.scrollHeight;
    iframe.width = iframeWidth + "px";
    iframe.height = iframeHeight + "px";
  });  

}
