function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("Application/json");
  xhr.open('GET',file,true);
  xhr.onreadystatechange=function()
  {
    if(xhr.readyState===4 && xhr.status=="200"){
    callback(xhr.responseText);
  }
}
xhr.send(null);
}
getfile("dynamic.json",function(text){
  var data=JSON.parse(text);
console.log(data);
profile(data.basics);
carreer(data.career);
education(data.education);
})
var main=document.querySelector('.a');
var left=document.querySelector('.b');
var right=document.querySelector('.d');
function profile(pro){
  var image=document.createElement('img');
  image.src=pro.img;
  left.appendChild(image);
  main.appendChild(left);

  var name=document.createElement('h2');
  name.textContent=pro.name;
  left.appendChild(name);
  main.appendChild(left);

  var email=document.createElement('h3');
  email.textContent=pro.email;
  left.appendChild(email);
  main.appendChild(left);
}
function carreer(c){
  var rh=document.createElement('p');
  rh.textContent="resume builder";
  right.appendChild(rh);
  main.appendChild(right);
  var hh=document.createElement("hr");
  right.appendChild(hh);
  var rh1=document.createElement('p');
  rh.textContent="career objectives";
  right.appendChild(rh1);
  var rh2=document.createElement('p');
  rh2.textContent=c.info;
  right.appendChild(rh2);
}
function education(pr){
  var a=document.createElement('h2');
  a.textContent="education details";
  right.appendChild(a);
  main.appendChild(right);
  var hr=document.createElement('hr');
  right.appendChild(hr);
  var table=document.createElement('table');
  table.border="1";
  let row='';
  row+="<th>"+"sno"+"</th>"+"<th>"+"institution"+"</th>"+"<th>"+"percentage"+"</th>";
  for(i in pr){
    row+="<tr>"+"<td>"+pr[i].sno+"</td>"+
  "<td>"+pr[i].institution+"</td>"+
  "<td>"+pr[i].percentage+"</td>"+
"</tr>";
}

table.innerHTML=row;
right.appendChild(table);
main.appendChild(right);
}
