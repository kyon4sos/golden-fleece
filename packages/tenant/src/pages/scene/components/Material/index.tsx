
import React, { CSSProperties, PropsWithChildren, ReactNode, ReactPropTypes, useEffect, useRef, useState } from 'react'
import classNames from 'classnames/bind';
import { Color } from 'three';
import { Button, Form, Slider, Switch } from 'antd';
import Pane from '../Pane';
import ColorPicker from '../ColorPicker';
import { mockMaterial } from '@/mock'

import style from './index.module.less';

let cx = classNames.bind(style);

type ComponetsMap = typeof componetsMap

const componetsMap = {
  Button, Slider, Switch, ColorPicker
}

console.log(componetsMap);


type MaterialItemProps = {
  material?: material;
  style?: CSSProperties
}

type material = {
  id: string | number;
  name: string;
  url: string;
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

type config = {
  component:keyof ComponetsMap;
  props?: any;
  label?:string
}


const CreateMaterial = ({ onChange, config }: { onChange: (e) => void, config: config[] }) => {

  const [form] = Form.useForm();

  return (
    <div>
      <h1>CreateMaterial</h1>
      <Form form={form}>
        {
          config.map((conf,idx )=>
            <Form.Item label={conf.label} key={idx}>
              {React.createElement(componetsMap[conf.component as string], conf.props)}
            </Form.Item>
          )
        }
      </Form>

    </div>);
}

const MaterialList = ({ onChange }) => {

  const [scrollOffset, setScrollOffset] = useState(0);
  const [color, setColor] = useState("");
  const outerListRef = useRef(undefined);
  const innerListRef = useRef(undefined);
  const [materials, setMaterials] = useState<material[]>([]);
  const [create, setCreate] = useState(false);
  useEffect(() => {
    setMaterials(mockMaterial(0, 10));
  }, []);

  const onChangeColor = (colorString) => {
    // console.log(color);
    // if (!currentMesh.current) {
    //   return;
    // }
    // currentMesh.current.material.color = new Color(color)
    const color = new Color(colorString)
    onChange({ material: { color: color } });
  }

  const onClickCreate = () => {
    setCreate(true)
  }

  const onChangeMaterial = () => { }

  const config: config[] = [
    {
      label:"颜色",
      component: 'ColorPicker',
      props: {
        children: "1112",
        type: 'primary',
        onClick: (e) => {
          console.log(e);
        }
      }
    },
    {
      label:"镜面反射",
      component: 'Slider',
      props: {
        children: "1112",
        type: 'primary',
        onClick: (e) => {
          console.log(e);
        }
      }
    },
      {
      label:"漫反射",
      component: 'Slider',
      props: {
        children: "1112",
        type: 'primary',
        onClick: (e) => {
          console.log(e);
        }
      }
    },{
      label:"漫反射",
      component: 'Slider',
      props: {
        children: "1112",
        type: 'primary',
        onClick: (e) => {
          console.log(e);
        }
      }
    },
  ];

  return (
    <Pane>
      <div className={cx({ "ScrollWrap": true })}>
        {/* <InfiniteLoader
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
        </InfiniteLoader> */}
        <ul className={cx({ "MaterialList": true })}>
          {
            materials.map(material => <MaterialItem material={material} key={material.id} />)
          }
        </ul>
      </div>
      <Button type="primary" onClick={onClickCreate}>新建</Button>
      {
        create ? <CreateMaterial onChange={onChangeMaterial} config={config} /> : <></>
      }
    </Pane>
  );
}
export default MaterialList