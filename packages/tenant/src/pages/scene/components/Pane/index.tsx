import { FC, PropsWithChildren } from "react"

const Pane: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div>
            <div>{children}</div>
        </div>);
}

export default Pane