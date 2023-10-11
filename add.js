document.getElementById('addGameForm').addEventListener('submit', function(event) {
    event.preventDefault();
 
    var nameValidationResult= validateName();
    var ratingValidationResult= validateRating();
    var developerValidationResult= validateDeveloper();
    var yearValidationResult= validateYear();
 
    
 });
 
 function validateName(){
     var name=document.getElementById('name').value;
     if(name.length<2){
         alert("게임 이름은 최소 2글자 이상 입력해야 합니다.");
         return false;
     }
     return true;
 }
 
 function validateRating(){
     var rating=document.getElementById('rating').value;
     if(rating<0||rating>10){
         alert("평점은 0에서 10 사이의 숫자여야 합니다.");
         return false;
     }
     return true;
 }
 
 function validateDeveloper(){
     var developer=document.getElementById('developer').value;
     if(developer.length<2){
         alert("개발사 이름은 최소 2글자 이상 입력해야 합니다.");
         return false;
     }
     return true;
 }
 
 function validateYear(){
     var year=document.getElementById('year').value;
     if(year<1980||year>2023){
         alert("발매년도는 1960에서 2023 사이의 숫자여야 합니다.");
         return false;
     }
     return true;
 }
 
 