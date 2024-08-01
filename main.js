 var form = document.getElementById('addForm');
  
 var itemList = document.getElementById('items');
 var filter = document.getElementById('filter');
  
 // form submit event
  form.addEventListener('submit',addItem);
  // delete event
  itemList.addEventListener('click',removeItem);
  // filter event
  filter.addEventListener('keyup', filterItems)

    // add item

    function addItem(e){
        e.preventDefault();

        // Get input value

        var newItem = document.getElementById('item').value;

        // create li item
        var li = document.createElement('li')
        //add class

        li.className = 'list-group-item';   

        ///console.log(li);

        li.appendChild(document.createTextNode(newItem));

        //create del button

        var deleteBtn = document.createElement('button');
        // add classes to del button
        deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

        //append text node
        deleteBtn.appendChild(document.createTextNode('x'));
        li.appendChild(deleteBtn);
        // append li to list
        itemList.appendChild(li);

    

        itemList.appendChild(li);
            }

// remove item

 function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('are you sure')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
 }

function  filterItems(e){
    // convert to lower case
     var text = e.target.value.toLowerCase();
  var items =   itemList.getElementsByTagName('li');
  //convert to an array

  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    //console.log(itemName);
     if(itemName.toLocaleLowerCase().indexOf(text)!= -1){
        item.style.display = 'block';
     }else{
        item.style.display = 'none'; 
     }



  });
}