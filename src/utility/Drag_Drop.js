const draggingOver = (e) => {
    e.preventDefault();
    console.log('dragging over Now');
};

const dragDropped = (e, id) => {
    console.log("you have drop");
    let transferToDoId = e.dataTransfer.getData('todoId');
    console.log(id, transferToDoId);

};

const dragStarted = (e, id) => {
    console.log('drag has started');
    e.dataTransfer.setData("todoId", id);
    console.log('hello', id)
};

export { draggingOver, dragDropped, dragStarted };

