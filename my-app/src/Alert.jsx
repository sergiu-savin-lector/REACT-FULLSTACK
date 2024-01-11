import './Alert.css'
import clsx from "clsx";

const Alert = ({children, variant = 'info', isOutlined = false}) => {

    const alertStyle = clsx(
        "alert",
        variant,
        isOutlined && "is-outlined",
      );

    return <p className={alertStyle}>{children}</p>
    // return <p className={`alert ${variant} ${isOutlined && 'is-outlined'}`}>{children}</p>
}

export default Alert;