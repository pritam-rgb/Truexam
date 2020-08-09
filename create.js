let tasks= [];
const adtask=(ev) => {
    ev.preventDefault(); // To stop the form submitting
    let task= {
        id: document.getElementById('taskid').value,
        image :'recent-image'
    }
    tasks.push(task);
    document.forms[0].reset(); //To Clear the form for the next entry
    //To Save in Local Storage
    localStorage.setItem('My Task',JSON.stringify(tasks));
}


document.getElementById('submit').onclick= function(){
    console.log('Submitted Succesfully');
    
    
}

document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('submit').addEventListener('click',adtask);
})


document.querySelector('#myFileInput').addEventListener('change',function(){
    console.log(this.files);
        const reader= new FileReader();
        
    
    reader.addEventListener('load',() => {
        localStorage.setItem('recent-image',reader.result);
    })
    //Changing the image as data url
    reader.readAsDataURL(this.files[0]);
})