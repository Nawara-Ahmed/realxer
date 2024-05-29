
var bookmarkName = document.getElementById("bookmarkName");
var bookmarkURL = document.getElementById("bookmarkURL");
var submitBtn = document. getElementById("submitBtn");
var editBtn = document. getElementById("editBtn");
var books= [];
var index ;
if((localStorage.getItem('book') != null)){
books=JSON.parse(localStorage.getItem('book'))
disPlayAllBook();
}
console.log(bookmarkURL);
function addNewBook(){
    book = {
    name:bookmarkName.value ,
    urlBook:bookmarkURL.value,
   }
   books.push(book)
   disPlayAllBook()
   // بحطها هنا علشان اخزن ده لما الuserيدوس مش لما اعمل refresh
   localStorage.setItem('book',JSON.stringify(books));
   clearingInput()
   
}
 function clearingInput(){
    bookmarkName.value="";
    bookmarkURL.value="";
 }

 function disPlayAllBook(){
    var html ="";
    for(i=0;i<books.length;i++){
       html += `<tr>
       <td>${books[i].name}</td>
       <td>${books[i].urlBook}</td>              
       <td>
         <button  onclick="updateBook (${i})" class="btn btn-visit bg-warning">
           <i class="fa-solid fa-eye pe-2"></i> Update </button>
       </td>
       <td>
         <button onclick="deleteBook (${i})" class="btn btn-delete bg-danger pe-2">
           <i class="fa-solid fa-trash-can"></i> Delete</button>
       </td>
   </tr>`
    }

    document.getElementById("tableContent").innerHTML=html;
 }
 function deleteBook (idx){
    // عايزه امسح من الarray كان عندي array methods .splice(,)
    books.splice(idx,1)
    disPlayAllBook()
    localStorage.setItem('book',JSON.stringify(books));
 }
//  function setFormUpdate(){
//    submitBtn.classList.add("d-nane");
//    editBtn.classList.add("d-nane")
var indexUp;
 function updateBook(index){
   indexUp=index;
//  هاتلي الindex اللي عليه الدور واعرضه في input
 submitBtn.classList.add("d-nane");
 editBtn.classList.remove("d-nane");
 bookmarkName.value= books[index].name;
 bookmarkURL.value= books[index].urlBook; 


 }
 function editBook(){
//  لما user يكتب و يدوس button edit حط الvalue الجديده مكان القديمه
  books[indexUp].name =bookmarkName.value;
  books[indexUp].urlBook=bookmarkURL.value;

  disPlayAllBook()
  localStorage.setItem('book',JSON.stringify(books));
  clearingInput()
 }
 
 function searchBook(){
   var searchBook =bookmarkName.value;
   var cartona ='';
   for(i=0;i<books.length;i++){
      if(books[i].name.toLowerCase().includes(searchBook.toLowerCase())){
         cartona += `<tr>
         <td>${books[i].name}</td>
         <td>${books[i].urlBook}</td>              
         <td>
           <button  onclick="updateBook (${i})" class="btn btn-visit bg-warning">
             <i class="fa-solid fa-eye pe-2"></i> Update </button>
         </td>
         <td>
           <button onclick="deleteBook (${i})" class="btn btn-delete bg-danger pe-2">
             <i class="fa-solid fa-trash-can"></i> Delete</button>
         </td>
     </tr>`
   }


 }
 document.getElementById("tableContent").innerHTML=cartona;
 
}
 