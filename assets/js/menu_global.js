  // getting HTML elements
  const section = document.querySelector("section"),
        toggleBtn = section.querySelector(".toggle-btn");

    toggleBtn.addEventListener("click" , () =>{
      section.classList.toggle("open");
    });

  // js code to make draggable section
  function onDrag({movementY}) { //movementY gets mouse vertical value
    const sectionStyle = window.getComputedStyle(section), //getting all css style of section
          sectionTop = parseInt(sectionStyle.top), // getting section top value & convert it into string
          sectionHeight = parseInt(sectionStyle.height), // getting section height value & convert it into string
          windHeight = window.innerHeight; // getting window height

    section.style.top = sectionTop > 0 ? `${sectionTop + movementY}px` : "1px";
    if(sectionTop > windHeight - sectionHeight){
      section.style.top = `${windHeight - sectionHeight}px`;
    }
  }

  //this function will call when user click mouse's button and  move mouse on section
  section.addEventListener("mousedown", () =>{
    section.addEventListener("mousemove", onDrag);
  });

  //these function will call when user relase mouse button and leave mouse from section
  section.addEventListener("mouseup", () =>{
    section.removeEventListener("mousemove", onDrag);
  });
  section.addEventListener("mouseleave", () =>{
    section.removeEventListener("mousemove", onDrag);
  });