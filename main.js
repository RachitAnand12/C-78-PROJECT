var images = ["file:///Users/tarunanand/Desktop/Pictures%20&%20More/Ashi%20B'day%202020/Dad%20Pic%20%232.JPG", "file:///Users/tarunanand/Desktop/Pictures%20&%20More/Papa%20Muma%20Aniv./Picture%20446.JPG" , "file:///Users/tarunanand/Desktop/Pictures%20&%20More/Dad%20Pic%20%235.JPG", "file:///Users/tarunanand/Desktop/Pictures%20&%20More/Papa%20Muma%20Aniv./a%20023%202.jpg"]; 
var names = ["Family Book","Tarun Anand", "Ashima Anand", "Nidhi Anand",];
number = 0 ;
function Next(){
  number = number + 1 ;
  if (number > 4){
    number = 0 ;
  }
  document.getElementById("image").src = images[number];
  document.getElementById("names").innerHTML = names[number];
  
  
}