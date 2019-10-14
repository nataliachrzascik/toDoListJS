class Start{
    constructor(){
        const button = document.getElementById('add');
        const ul = document.querySelector('ul');
        const setnumber = document.querySelector('h1 span');
        
        button.addEventListener('click',(e)=>{
            const input = document.querySelector('input').value;
            e.preventDefault();
            const ListElement = new List(input).listElement;
            console.log(ListElement);
            ul.appendChild(ListElement);
            let liElements = document.querySelectorAll('li').length;
            const number = new Statistics(liElements);
            setnumber.textContent = number.Number;
            
           ListElement.querySelector('button').addEventListener('click',(e)=>{
              e.target.parentNode.remove();
              let liElements = document.querySelectorAll('li').length;
              const number = new Statistics(liElements);
              setnumber.textContent = number.Number;
           });
        
    });
       
        
}
}
const start = new Start();
