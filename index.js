let todo = [];

let req = prompt("please enter your request")

while(true){
    if(req == "quit"){
        console.log("quitting app");
        break;
    }
    if(req == "list"){

        console.log("===========");
        for(let i=0;i<todo.length;i++){
            console.log(todo)
        }
        console.log("===========");
    }
    else if(req == "add"){
        let task = prompt("please enter the task you want to add");
        todo.push(task);
        console.log("taks added");
    }
    else if(req == "delete"){
        let idx = prompt("please enter your request")
        todo.splice(idx,1);
        console.log("Task deleted");
    }
    else{
        console.log("wrong request");
    }
    req = prompt("please enter your request")

}
