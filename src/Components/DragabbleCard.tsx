import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import React from "react";

const Card = styled.div<{ isDragging: boolean }>`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px;
  background-color: ${(props) => (props.isDragging ? "tomato" : "gray")};
  box-shadow: ${(props) =>
    props.isDragging ? "0px p2x 5px rhaba(0,0,0,0.1)" : "none"};
`;

interface IDragabbleCradProrps {
  index: number;
  toDo: string;
}

function DraggableCard({ toDo, index }: IDragabbleCradProrps) {
  return (
    <Draggable key={toDo} draggableId={toDo} index={index}>
      {(magic, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.dragHandleProps}
          {...magic.draggableProps}
        >
          {toDo}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableCard);
