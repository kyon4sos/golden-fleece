import { memo } from "react";
import { Draggable } from "react-beautiful-dnd";
import ColumnHeader from "../column-header";
// import List from "../list";

import style from "./index.module.less";

const grid = 8;

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 314,
});

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle,
});

type Item = {
  id: string;
  content: any;
};
export type ColumnData = {
  items: Item[];
  title: string;
  total: number;
  droppableId: string;
  draggableId: string;
  id: number;
};
export type ColumnProps = {
  column: ColumnData;
  innerRef?: any;
  index: number;
};

const Column = memo(({ column, index }: ColumnProps) => {
  const { items, title, total, draggableId } = column;
  return (
    // <div className={style.column}>h1</div>
    <Draggable draggableId={draggableId} index={index}>
      {(provided, snapshot) => (
        <div className={style.column} {...provided.dragHandleProps} ref={provided.innerRef}>
          {/* <ColumnHeader title={title} total={total} /> */}
          {/* <div
              className={style.columnInner}
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
            >
              <List droppableId="droppableId" items={items}></List>
            </div> */}
          {/* {provided} */}
        </div>
      )}
    </Draggable>
    // <Droppable droppableId="droppable">
    //   {(provided, snapshot) => (
    //     <div className="column">
    //       <div className="container" ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
    //         {items.map((item, index) => (
    //           <Draggable key={item.id} draggableId={item.id} index={index}>
    //             {(provided, snapshot) => (
    //               <div
    //                 className="item"
    //                 ref={provided.innerRef}
    //                 {...provided.draggableProps}
    //                 {...provided.dragHandleProps}
    //                 style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
    //               >
    //                 {item.content}
    //               </div>
    //             )}
    //           </Draggable>
    //         ))}
    //         {provided.placeholder}
    //       </div>
    //     </div>
    //   )}
    // </Droppable>
  );
});

export default Column;
