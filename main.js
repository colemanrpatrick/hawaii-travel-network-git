/*================================================*/
// var collectionA = [
//
// ];
 //data-src="" class="delayed-img"
(function() {
  // 'use strict';
  // const imgContainerA = document.querySelectorAll('.img-container');
  // var $imgA;
  // console.log(imgContainerA);
  // collectionA.forEach(function(url,index){
  //   $imgA = document.createElement("img");
  //   // $imgA.setAttribute('data-src','/Portals/0/koloa_zipline/' + url + '.jpg');
  //   // $imgA.setAttribute('data-src','images' + url + '.jpg');
  //   $imgA.setAttribute('alt',url);
  //   $imgA.className = 'delayed-img';
  //   imgContainerA[index].appendChild($imgA);
  // });
  $('.delayed-img').lazy();
}());







var btn = document.getElementsByClassName("mobileDropDown");
var i;

for (var i = 0; i < btn.length; i++) {

  btn[i].addEventListener("click",function(){
    toggleThis(this,"active");
    var childNav = this.nextElementSibling;
    if(childNav.style.maxHeight){
      childNav.style.maxHeight = null;
    }else{
      childNav.style.maxHeight = childNav.scrollHeight + "px";
    }
  });
}
// $(document).ready(function() {
//   $(this).scrollTop(0);
// })
$(document).ready(function(){

})
function scrollDown(element,num){
  $('html,body').animate({
    scrollTop: $('#' + element).offset().top - num
  },'slow');
}

sIndex = 0;

$('#next-checkpoint').on("click",function scrollNext(){
  var el = $('.scroll-cont:eq('+sIndex+')')
  $('html,body').animate({
    scrollTop: el.offset().top
  },'slow')
  sIndex++;
  if(sIndex>4){
    sIndex = 0;
  }
  // console.log(sIndex,el.html());
  $(this).html('<span>'+el.html()+'</span>')
})
