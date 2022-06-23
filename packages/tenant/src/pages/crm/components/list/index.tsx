import { Droppable } from "react-beautiful-dnd";
import Item from "../item";

type ListProps = {
  droppableId: string;
  items: any[];
};

const List = ({ droppableId, items }: ListProps) => {
  return (
    <Droppable droppableId={droppableId}>
      {(provided, snapshot) => {
        return (
          <div>
            {items.map((item) => {
              return <Item snapshot={snapshot} provided={provided} item={item}></Item>;
            })}
          </div>
        );
      }}
    </Droppable>
  );
};

export default List;
