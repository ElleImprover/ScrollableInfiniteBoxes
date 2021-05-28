const images = document.querySelector('img');


images.addEventListener('click',(evt)=> {
    console.log(evt.target.className);
    // lookup classList and the contains function
    if(evt.target.classList.contains('row')){  
    evt.target.classList.toggle('selected');
    }
})

document.addEventListener('scroll', (evt)=>{
    const row =document.createElement("div");
    box.className='row';

    
   const img= document.createElement("img");
   img.src=

})