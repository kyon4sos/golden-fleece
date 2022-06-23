import { forwardRef } from "react";
import { PropsWithChildren } from "react"

import './index.less'

type IProps = PropsWithChildren & {
    ref: (element: HTMLElement | null) => any;
}

const Container = forwardRef<IProps>(() => {
    return <div className="container"></div>
})

export default Container