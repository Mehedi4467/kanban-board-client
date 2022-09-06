const draggingOver = (e) => {
    e.preventDefault();
    console.log('dragging over Now');
};



const dragStarted = (e, id) => {
    console.log('drag has started');
    e.dataTransfer.setData("todoId", id);
    console.log('hello', id)
};

export { draggingOver, dragStarted };

