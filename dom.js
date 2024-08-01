//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.tittle = 123;
//console.log(document.doctype); 
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[12]);
//document.all[12].textContent = 'hello'
//console.log(document.forms);
//console.log(document.links);
   

// get element by id
//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
//var header = document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent = 'hello'; 
//console.log(headerTitle.textContent);
//headerTitle.innerHTML = '<h3>hello</h3>';
//header.style.borderBottom = 'solid 3px #000'


// get elament by classname//

//var items = document.getElementsByClassName(('list-group-item'));
//console.group(items);
//console.log(items[1]);
//items[1].textContent ='hello ';
//items[1].style.fontWeight = 'bold';
//items[1].style.backgroundColor = '';


//for(var i= 0; i < items.lentgh; i++){
  //  items[i].style.backgroundColor = '#';
//}

// var li = document.getElementsByTagName(('li'));
// console.log(li);
// console.log(li[1])
// li[0].textContent ='hello';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'red';


// for(var i= 0; i < li.length; i++){
  //  li[i].style.backgroundColor ='#f4f4f4';

//}
//console.log(i);

//query selector
 
// var header = document.querySelector('#main');
// header.style.borderBottom = 'solid 5px black';
 
// var input = document.querySelector('input');
// input.value = 'hello world'; 
//  var submit = document.querySelector('input[type="submit"]');
//  submit.value = "send";
  

//  var item = document.querySelector('.list-group-item');
//  item.style.color = 'red';

//  var lastItem = document.querySelector('.list-group-item:last-child');
//  lastItem.style.color = 'red';

//  var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'red';
   

//queryselectorall
  
// var titles = document.querySelectorAll('.tittle');
// console.log(titles);
// titles[0].textContent = "add items"; 

//  var odd = document.querySelectorAll('li:nth-child(odd)');
//  var even = document.querySelectorAll('li:nth-child(even)');
  
//  for( var i = 0; i<odd.length; i++){
//     odd[i].style.backgroundColor = 'red';
//     even[i].style.backgroundColor = 'black';
//  }


// traversing elements
//var itemList = document.querySelector('#items');
// console.log(itemList.parentElement);
// itemList.parentNode.style.backgroundColor = 'red';
// console.log(itemList.parentNode.parentNode.parentNode);


// parentelements
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = 'red';
// console.log(itemList.parentNode.parentNode.parentElement);

//childnodes

// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

//firstchild
//console.log(itemList.firstChild);

//firstelementchild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'red'

//lastchild also the same as firstchild and also the same  as the firstelementchild
// where you change it intolast child and lastlementchild

// next sibling

//console.log(itemList.nextSibling);
//console.log(itemList.nextElementsibling);


//previous sibling

// console.log(itemList.previousSibling);
//console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.backgroundColor = 'green';


//create element

//create a dinv

//var newDiv = document.createElement('div');
// add id
 //newDiv.id = 'hello 1';
// add class
//newDiv.className = 'hey';
// add attribute
//newDiv.setAttribute('titte','hello div');

//Create text node
//var newDivText = document.createTextNode('hello world');

//add text to div

// newDiv.appendChild(newDivText);
 
// var container = document.querySelector('header .container');

// var h1 = document.querySelector('header h1');
// newDiv.style.fontSize = '30px';

// console.log(newDiv);

// container.insertBefore(newDiv, h1
// );

// events //

//var button = document.getElementById('button').addEventListener('click', buttonClick
//);


//function buttonClick(e){
  //console.log('button clicked');
  // document.getElementById('header-title').textContent = 'changed';
  // document.querySelector('#main').style.backgroundColor = 'red';
  //console.log(e); 
  // console.log(e.target);
  // console.log(e.target.id);
  // console.log(e.target.className);
  // console.log(e.target.classList);
  //  var output = document.getElementById('output');
  //  output.innerHTML = '<h3>'+e.target.id+ '</h3>';

  //  console.log(e.type);

  // console.log(e.clientX);
  // console.log(e.clientY);

  // console.log(e.offsetX);
  // console.log(e.offsetY);

  // console.log(e.altKey);
  // console.log(e.ctrlKey);
  // console.log(e.shiftKey);

//}

var button = document.getElementById('button');
var button = document.getElementById('box');
var output = document.getElementById('output');


//button.addEventListener('dblclick', runEvent);
//button.addEventListener('mousedown', runEvent);
//button.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);

// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);
//box.addEventListener('mousemove', runEvent);


var itemInput = document.querySelector('input[type="text"]');
var form  =  document.querySelector('form');
var select = document.querySelector('select');

// itemInput.addEventListener('keydown',runEvent);
// itemInput.addEventListener('keyup',runEvent);
// itemInput.addEventListener('keypress',runEvent);
// itemInput.addEventListener('focus',runEvent);
// itemInput.addEventListener('blur',runEvent);

// itemInput.addEventListener('cut',runEvent);
// itemInput.addEventListener('paste',runEvent);

// itemInput.addEventListener('input',runEvent);
// itemInput.addEventListener('paste',runEvent);
// select.addEventListener ('change', runEvent);
// select.addEventListener ('input', runEvent);
 
form.addEventListener('submit',runEvent);








 function runEvent(e) {
   console.log('event type: ' + e.type);
   e.preventDefault();
//document.body.style.display = 'none';
// console.log(e.target.value);
  //  document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>'

//     document.getElementById('output').innerHTML= '<h3>mouseX: ' + e.offsetX + ' </h3><h3>mouseY: ' + e.offsetY + '</h3>';
//     output.style.backgroundColor = 'red';

    //document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
}
