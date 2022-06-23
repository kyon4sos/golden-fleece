import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Button, Radio, Space } from "antd";

import style from "./index.module.less";
type TaskItem = {
  id: string;
  content: string;
};

import Column, { ColumnData } from "../components/column";

const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

const getItems = (count, offset = 0) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k + offset}`,
    content: `item ${k + offset}`,
  }));

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

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
const initData = () => [
  {
    items: [],
    title: "新客户1",
    total: 200,
    id: 0,
    draggableId: "draggable-10",
    droppableId: "droppable-10",
  },
  {
    items: [],
    title: "新客户1",
    total: 200,
    id: 1,
    draggableId: "draggable-11",
    droppableId: "droppable-11",
  },
];
const CRM = () => {
  const [columns, setColumns] = useState<ColumnData[]>(initData);
  const [tasks, setTasks] = useState({
    items: getItems(10),
    selected: getItems(5, 10),
  });
  // const items: TaskItem[] = [{
  //     id: "1",
  //     content: "test1"
  // }]
  const id2List = {
    droppable: "items",
    droppable2: "selected",
  };
  const getList = (id) => {
    return tasks[id2List[id]];
  };
  const onDragEnd = (result) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      // const items = reorder(
      //     getList(source.droppableId),
      //     source.index,
      //     destination.index
      // );

      // let state = { items, selected?: [] };

      if (source.droppableId === "droppable2") {
        // state = { selected: items };
      }
    } else {
      const result = move(getList(source.droppableId), getList(destination.droppableId), source, destination);
      setTasks({
        items: result.droppable,
        selected: result.droppable2,
      });
      // this.setState({
      //     items: result.droppable,
      //     selected: result.droppable2
      // });
    }
  };
  return (
    <>
      <div className="toolbar">
        <Space>
          <Button type="primary">新建交易</Button>
          <Radio.Group>
            <Radio.Button value="large">进行中</Radio.Button>
            <Radio.Button value="default">丢单</Radio.Button>
            <Radio.Button value="small">赢单</Radio.Button>
          </Radio.Group>
        </Space>
      </div>
      <div className="wrapper">
        <DragDropContext onDragEnd={onDragEnd}>
          <div>
            <Droppable droppableId="column-droppable" type="column" direction="horizontal">
              {(provided) => (
                <div className={style.columns} {...provided.droppableProps} ref={provided.innerRef}>
                  {columns.map((column, idx) => (
                    <Column column={column} key={idx} index={idx} />

                    // <Draggable draggableId={column.draggableId} index={idx} key={idx}>
                    //   {(provided, snapshot) => (
                    //     <div className={style.column} {...provided.dragHandleProps} ref={provided.innerRef}></div>
                    //   )}
                    // </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>

          {/* <div className="column">
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <div className="container" ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
                  {tasks.items.map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {(provided, snapshot) => (
                        <div
                          className="item"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                        >
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
          <div className="column">
            <Droppable droppableId="droppable2">
              {(provided, snapshot) => (
                <div className="container" ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
                  {tasks.selected.map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {(provided, snapshot) => (
                        <div
                          className="item"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                        >
                          {item.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div> */}
        </DragDropContext>
      </div>
    </>
  );
};

export default CRM;
