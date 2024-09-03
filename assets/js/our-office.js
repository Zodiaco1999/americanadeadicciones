// Selecciona el elemento que deseas observar
let section1 = document.getElementById('section1');
let section2 = document.getElementById('section2');  
let sections = [ section1, section2];

sections.forEach(section => {
  // Define una función de callback que se ejecutará cuando el elemento sea visible
  let observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
          if (entry.isIntersecting) {
              section.classList.add('animation')
          } 
      });
  });

  // Observa el elemento
  observer.observe(section);
});
