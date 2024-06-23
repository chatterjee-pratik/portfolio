/* Disable right click and copy and keypress
document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
  });
  
  document.addEventListener("copy", function(event) {
    event.preventDefault();
  });

  document.addEventListener("keydown", function(event) {
    event.preventDefault();
  }); */

  window.addEventListener('resize', function() {
    // Refresh the page when the screen dimensions change
    location.reload();
  });
  window.addEventListener('orientationchange', function() {
    // Refresh the page when the screen dimensions change
    location.reload();
  });

document.addEventListener("DOMContentLoaded", function() { 
  /* set Image dimensions based on About Me text span */
  document.querySelector("#about-me-section img").style.setProperty("width", document.querySelector("#about-me-section p").offsetWidth);
  document.querySelector("#about-me-section img").style.setProperty("height", document.querySelector("#about-me-section p").offsetHeight);   
  //document.body.style.setProperty("font-size", (screen.width * 0.0125) + "px");

  /* Set desktop/mobile mode properties */
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 640) {
    document.body.style.setProperty("font-size", "95%");
    //document.body.style.setProperty("font-size", (screen.width * 0.04) + "px");  
    document.querySelectorAll(".container").forEach(function(container) {
      container.style.setProperty("width", "95vw");
    });

    document.querySelectorAll("#profile-header-section img").forEach(function(image) {
      image.style.setProperty("width", "4rem");
      image.style.setProperty("height", "4rem");      
    });

    document.querySelector("#profile-header-section table").querySelectorAll("td[data-column='2']").forEach(function(cell) {
      cell.parentNode.removeChild(cell);
    });
    document.querySelector("#profile-header-section table").querySelectorAll("td[data-column='1']").forEach(function(cell) {
      cell.style.setProperty("width", "100%");
      var h3 = document.createElement("h3");
      var workplace = document.createElement("a");
      workplace.href = "#work-experience-container";
      workplace.textContent = "Deütsche Borse";
      h3.appendChild(workplace);
      h3.appendChild(document.createTextNode(" \u2022 "));
      var university = document.createElement("a");
      university.href = "#education-container";
      university.textContent = "Universität des Saarlandes";
      h3.appendChild(university);
      cell.appendChild(h3);
    });

    document.getElementById("profile-image").style.setProperty("display", "none");
    const aboutMeSection = document.getElementById("about-me-section");
    const profileImage = document.createElement("img");
    profileImage.src = "https://media.licdn.com/dms/image/C4D03AQFGGnZ_ZvRf-g/profile-displayphoto-shrink_400_400/0/1635775644440?e=1724284800&v=beta&t=rbPejEmXYXxkVpVMAseqdvgsgvVpgzxADB1C-WobAL4";
    profileImage.style.setProperty("width", "10rem");
    profileImage.style.setProperty("height", "10rem");
    profileImage.style.setProperty("border-radius", "50%");
    profileImage.style.setProperty("margin", "0 auto");    
    profileImage.style.setProperty("display", "block");
    aboutMeSection.insertBefore(profileImage, aboutMeSection.querySelector("table"));

    /*Center #about-me-section ul 
    document.querySelector("#about-me-section ul").style.setProperty("justify-content", "center");
    document.querySelector("#about-me-section ul").style.setProperty("flex-wrap", "wrap");
    document.querySelector("#about-me-section ul").style.setProperty("display", "flex");
    [...document.querySelectorAll("#about-me-section ul li")].forEach(function(listItem) {
      listItem.style.setProperty("margin-right", "2vw");
    }); */
    

    document.querySelectorAll("#key-skills-section table").forEach(function(table) {
      const rows = table.rows;
      const newTable = document.createElement('table');
      Array.prototype.forEach.call(rows, function(row) {
        Array.prototype.forEach.call(row.cells, function(cell) {
          const newRow = newTable.insertRow();
          const newCell = newRow.insertCell();
          newCell.innerHTML = cell.innerHTML;
        });
      });
      table.parentNode.replaceChild(newTable, table);
    }); 

    document.querySelectorAll('#work-experience-section table [data-column="1"]').forEach(function(node) {
      node.style.setProperty("width", "4rem");
    });
    document.querySelectorAll('#work-experience-section table [data-column="2"]').forEach(function(node) {
      node.style.setProperty("width", "50%");
    });
    document.querySelectorAll('#work-experience-section table [data-column="3"]').forEach(function(node) {
      node.style.setProperty("width", "26%");
    });   
    document.querySelectorAll('#work-experience-section img').forEach(function(image) {
      image.style.setProperty("width", "4rem");
      image.style.setProperty("height", "4rem");
    });        

    document.querySelectorAll('#education-section table [data-column="1"]').forEach(function(node) {
      node.style.setProperty("width", "4rem");
    });
    document.querySelectorAll('#education-section table [data-column="2"]').forEach(function(node) {
      node.style.setProperty("width", "50%");
    });
    document.querySelectorAll('#education-section table [data-column="3"]').forEach(function(node) {
      node.style.setProperty("width", "26%");
    });
    document.querySelectorAll('#education-section img').forEach(function(image) {
      image.style.setProperty("width", "4rem");
      image.style.setProperty("height", "4rem");
    });  

    /*document.querySelector("#contact-section iframe").style.setProperty("width", "90vw");
    document.querySelector("#contact-section iframe").style.setProperty("height", "110vh");*/
  }
});

/**/
function resizeIframe(iframe) {
  iframe.contentWindow.addEventListener("load", function() {
    var iframeBody = iframe.contentDocument.body;
    var iframeWidth = iframeBody.scrollWidth;
    var iframeHeight = iframeBody.scrollHeight;
    iframe.width = iframeWidth + "px";
    iframe.height = iframeHeight + "px";
  });
}
