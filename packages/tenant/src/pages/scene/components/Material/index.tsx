
import { CSSProperties, useEffect, useRef, useState } from 'react'
import { FixedSizeList as List } from 'react-window'
import classNames from 'classnames/bind';
import InfiniteLoader from "react-window-infinite-loader";
import Pane from '../Pane'
import style from './index.module.less'

let cx = classNames.bind(style);

type MaterialItemProps = {
  material?: material;
  style?: CSSProperties
}

type material = {
  id: string | number;
  name: string;
  url: string;
}

const mock = (startIndex, stopIndex) => {
  let list = new Array(stopIndex).fill({})
    .map((mat, idx) => ({
      name: idx.toString(),
      url: "https://shoe-1303249748.cos.ap-shanghai.myqcloud.com/shoe/works/0.59613756369011581655879927.555.png",
      id: startIndex + idx
    }))
  console.log(list);
  return list
}

const renderItem = ({ data, index, isScrolling }) => {
  console.log({
    data, index,
    isScrolling
  });
  return <MaterialItem material={data[index]}/>
}
const MaterialItem = (props: MaterialItemProps) => {
  const { material, style } = props
  return (
    <li className={cx({ "MaterialItem": true, "rounded": true, "hover:border-gray-100": true })} style={style}>
      <img src={material?.url} alt="material" />
      <span>{material?.name}</span>
    </li>
  );
}


const LOADING = 1;
const LOADED = 2;
let itemStatusMap = {};

const isItemLoaded = index => !!itemStatusMap[index];

const loadMoreItems = (startIndex, stopIndex) => {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve(mock(startIndex, stopIndex));
    }, 2500)
  );
};

const MaterialList = () => {
  const outerListRef = useRef(undefined);
  const innerListRef = useRef(undefined);
  const [scrollOffset, setScrollOffset] = useState(0);

  const [materials, setMaterials] = useState<material[]>([]);

  useEffect(() => {
    setMaterials(mock(0, 10));
  }, []);

  const listHeight = 150
  return (
    <Pane>
      <div className={cx({ "ScrollWrap": true })}>
        <InfiniteLoader
          isItemLoaded={isItemLoaded}
          itemCount={1000}
          loadMoreItems={loadMoreItems}
        >
          {({ onItemsRendered, ref }) => (
            <List
              className="List"
              height={400}
              itemCount={materials.length}
              itemSize={30}
              onItemsRendered={onItemsRendered}
              itemData={materials}
              ref={ref}
            >
              {renderItem}
            </List>
          )}

        </InfiniteLoader>

        {/* <ul className={cx({"MaterialList":true})}>
        {
          materials.map(material => <MaterialItem material={material} key={material.id} />)
        }
      </ul> */}
      </div>
    </Pane>
  );
}
export default MaterialList