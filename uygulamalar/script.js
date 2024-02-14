

$(document).ready(function(){

  let deger =0;
  let sayac = $("#sayac");
  $("#artir").click(function(){
    deger++;
    sayac.text(deger);
    if(deger>0){
      sayac.css("background-color","yellow");
    }else if(deger==0){
      sayac.css('background-color', 'lightblue');
    }
  }); 

  $("#azalt").click(function(){
    deger--;
    sayac.text(deger);
    if(deger<0){
      sayac.css("background-color","red");
    }else if(deger==0){
      sayac.css('background-color', 'lightblue');
    }
  });

  $(sayac).click(function(){
    if(deger%2==0){
      alert($(sayac).text()+ ' sayısı cifftir');
    }else{
      alert('sayı tektir');
    }
  });

});

