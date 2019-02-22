window.onload = function(){
  
  let skills_level = document.querySelectorAll('.skills__level');
  skills_level.forEach(v => {
    let level_num = v.attributes['data-level'].value;
    let level = v.querySelectorAll('span');
    for(let i = 0; i<level_num; i++){
      level[i].classList.add('active');
    }
  });
  
}