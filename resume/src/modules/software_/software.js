let soft_lavel = document.querySelectorAll('.soft__level');
if(soft_lavel.length){
  for(let j = 0; j<soft_lavel.length; j++){
    let level_num = soft_lavel[j].attributes['data-soft-level'].value;
    soft_lavel[j].querySelector('.soft__level_part').style.width = level_num + '%';
  }
}