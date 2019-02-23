window.onload = function(){
  
  let skills_level = document.querySelectorAll('.skills__level');
  
  //  no supported ie 11
  
//  skills_level.forEach(function(v){
//    let level_num = v.attributes['data-skills-level'].value;
//    let level = v.querySelectorAll('span');
//    for(let i = 0; i<level_num; i++){
//      level[i].classList.add('active');
//    }
//  });
  
  for(let j = 0; j<skills_level.length; j++){
    let level_num = skills_level[j].attributes['data-skills-level'].value;
    let level = skills_level[j].querySelectorAll('span');
    for(let i = 0; i<level_num; i++){
      level[i].classList.add('active');
    }
  }
  
  let soft_lavel = document.querySelectorAll('.soft__level');
  for(let j = 0; j<soft_lavel.length; j++){
    let level_num = soft_lavel[j].attributes['data-soft-level'].value;
    let level = soft_lavel[j].querySelector('.soft__level_part');
    level.style.width = level_num + '%';
  }
  
  
}