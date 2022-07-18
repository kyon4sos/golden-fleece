import { UploadPicture } from "@icon-park/react"
import { ChangeEventHandler, useRef, useState } from "react"
import {Image} from 'antd'
import style from './index.module.less'
const Upload = () => {
    const [url, setUrl] = useState("")
    const ref = useRef<HTMLInputElement>(null)
    const onInput:ChangeEventHandler<HTMLInputElement> = (e) => {
        let { files } = e.target
        if (!files?.length) {
            return
        }
        const reader = new FileReader()
        reader.readAsDataURL(files[0]);
        reader.onload = () => {
            setUrl(reader?.result as string);
        }
    }
    const onClick = () => {
        if (!ref.current) {
            return;
        }
        ref.current.click();
    };
    return (
        <div className="upload">
            <input className={style.input} type="file" ref={ref} onChange={onInput} />
            <div className='flex'>
                {
                <Image width={40} src={url} alt="image" />
                }
                <UploadPicture theme="outline" size="24" fill="#333" onClick={onClick}/>
            </div>
        </div>
    )
}
export default Upload