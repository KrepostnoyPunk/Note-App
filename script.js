const btnEl=document.getElementById('btn')


function createNoteEl(id, content){
    //console.log(id, content);
    const element=document.createElement("textarea")
    element.classList.add("note")
    element.placeholder="Enter your note"
    element.value=content

    element.addEventListener('dblclick', ()=>{
        const warning=confirm("Do you want to DELETE this note?")
        if(warning){
            deleteNote(id, element)
        }
    })

    element.addEventListener('input', ()=>{
        updateNote(id, element.value)
    })
}


function deleteNote(){

}


function updateNote(){

}


function addNote(){
    const noteObj={
        id: Math.floor(Math.random()*100000),
        content: ""
    }
    //console.log(noteObj);
    const noteEl=createNoteEl(noteObj.id, noteObj.content)
    
}


btnEl.addEventListener('click', addNote)