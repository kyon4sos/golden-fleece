
import { useDraggable } from '@dnd-kit/core'
import { useEffect, useRef } from 'react';
import styles from './index.module.less'

const DragContainer = (props) => {
  const { x, y } = props
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: 'draggable',
  });
  const transformInfo = useRef({
    x: x,
    y: y,
  })

  const style = transform ? {
    transform: `translate3d(${transform.x +transformInfo.current.x}px, ${transform.y+transformInfo.current.y}px, 0)`,
  } : { transform: `translate3d(${x}px, ${y}px, 0)` };

  useEffect(() => {
    transformInfo.current = {
      x: x, y: y
    }
  }, [x, y])
  return (
    <div className={styles.container}  {...attributes} style={style}>
      <div ref={setNodeRef}  {...listeners}>
        {
          props.header
        }
      </div>
      {props.children}
    </div>
  );
}


export default DragContainer