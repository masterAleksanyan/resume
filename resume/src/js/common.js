window.onload = function(){
  
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
  
  let soft_lavel = document.querySelectorAll('.soft__level');
  if(soft_lavel.length){
    for(let j = 0; j<soft_lavel.length; j++){
      let level_num = soft_lavel[j].attributes['data-soft-level'].value;
      soft_lavel[j].querySelector('.soft__level_part').style.width = level_num + '%';
    }
  }
  
  
}