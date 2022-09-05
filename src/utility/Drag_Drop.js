const draggingOver = (e) => {
    e.preventDefault();
    console.log('dragging over Now');
};

const dragDropped = (e) => {
    console.log("you have drop");
    let transferToDoId = e.dataTransfer.getData('todoId');
    console.log(transferToDoId);
};

const dragStarted = (e, id) => {
    console.log('drag has started');
    e.dataTransfer.setData("todoId", id);
    console.log(id)
}

export { draggingOver, dragDropped, dragStarted };