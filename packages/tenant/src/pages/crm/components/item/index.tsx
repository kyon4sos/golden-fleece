import { FC, PropsWithChildren } from "react"


type IProps = PropsWithChildren & {
    ref: (element: HTMLElement | null) => any;
}

const Item: FC<IProps> = () => {
    return <div></div>
}

export default Item