import { Droppable, Draggable } from "react-beautiful-dnd"
import ColumnHeader from "../column-header"

const grid = 8;

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
    width: 314
});

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? 'lightgreen' : 'grey',

    // styles we need to apply on draggables
    ...draggableStyle
});

type Item = {
    id: string,
    content: any
}
type ColumnProps = {
    items: Item[];
    title: string;
    total: number;
    droppableId: string
}
const Column = ({
    items, title, total
}: ColumnProps) => {
    return <div className="column">
        <ColumnHeader title={title} total={total} />
        <Droppable droppableId="droppable">
            {(provided, snapshot) => (
                <div className='container'
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}>
                    {items.map((item, index) => (
                        <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}>
                            {(provided, snapshot) => (
                                <div className='item'
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={getItemStyle(
                                        snapshot.isDragging,
                                        provided.draggableProps.style
                                    )}>
                                    {item.content}
                                </div>
                            )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    </div>
}

export default Column