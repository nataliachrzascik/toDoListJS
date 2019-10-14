class List{
    constructor(textListElement){
        this.listElement=document.createElement("li"),
        this.listElement.innerHTML=textListElement + "<button>Usun</button>";
        this.listElement.className='task';
    }
}
//const ListEl = new List("jebać");
//console.log(ListEl);