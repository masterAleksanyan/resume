let skills_level = document.querySelectorAll('.skills__level');
if(skills_level.length){
  skills_level.forEach(function(v){
    let level_num = v.attributes['data-skills-level'].value;
    let level = v.querySelectorAll('span');
    console.log(level, level_num);
    for(let i = 0; i<level_num; i++){
      level[i].classList.add('active');
    }
  });
}