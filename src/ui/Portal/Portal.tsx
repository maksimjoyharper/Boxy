import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
    children: ReactNode;
    element?: HTMLElement
}

function Portal(props:PortalProps) {

    const {
        children,
        element = document.body,
    } = props

    return createPortal(children, element)
}

export default Portal