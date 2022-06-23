
import style from './index.module.less'
type IProps = {
    title: string,
    total: number,
    lineColor?: string
}

const ColumnHeader = ({ title, total, lineColor }: IProps) => {
    return <div className={style.head}>
        <div className={style.title}>{title}</div>
        <div className={style.dealtotal}>{total ? total : "无交易"} </div>
        <div className={style.line} style={{
            backgroundColor: lineColor
        }}></div>
    </div>
}

export default ColumnHeader