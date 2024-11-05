function lovecal(){
    const name1 = document.getElementById('first').value;
    const name2 = document.getElementById('second').value;

    if (name1 && name2) {
    alert("your love score is : "+cal(1,100));
    }
    else{
        alert("enter both name");
    }
    
}

function cal(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
  }
  