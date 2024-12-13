import { ReactNode, useState, useRef, useEffect } from "react";
import "./SlidingPanel.module.scss";
import style from "./SlidingPanel.module.scss";
import { classNames } from "../../utils/classNames";
import Portal from "../Portal/Portal";

interface SlidingPanelProps {
  initialHeight: string;
  fullHeight: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  darkened?: boolean;
  className?: string;
  lazy?: boolean;
  scrollLock?: boolean;
}

function SlidingPanel(props: SlidingPanelProps) {
  const {
    initialHeight,
    fullHeight,
    children,
    isOpen,
    onClose,
    darkened,
    className = "",
    lazy,
    scrollLock,
  } = props;
  // const [isExpanded, setIsExpanded] = useState(false);
  const [currentHeight, setCurrentHeight] = useState("0");
  const panelRef = useRef<HTMLDivElement>(null);
  const startY = useRef(0);
  const startHeight = useRef(0);
  const timeRef = useRef<ReturnType<typeof setTimeout>>();
  const direction = useRef<"up" | "down" | null>(null);
  const [isMouned, setIsMouned] = useState(false);

  const handleMouseDown = (e: React.TouchEvent) => {
    startY.current = e.touches[0].clientY;
    startHeight.current = parseInt(currentHeight);
    document.addEventListener("touchmove", handleMouseMove);
    document.addEventListener("touchend", handleMouseUp);
  };

  const handleMouseMove = (e: TouchEvent) => {
    const deltaY = startY.current - e.touches[0].clientY;
    const newHeight = startHeight.current + deltaY;
    if (deltaY > 0) {
      direction.current = "up";
    } else {
      direction.current = "down";
    }
    if (newHeight >= parseInt(fullHeight)) {
      setCurrentHeight(fullHeight);
      // setIsExpanded(true);
    } else if (newHeight <= parseInt(initialHeight)) {
      setCurrentHeight(initialHeight);
      // setIsExpanded(false);
    } // else {
    //   setCurrentHeight(`${newHeight}px`);
    // }
  };

  const handleMouseUp = () => {
    document.removeEventListener("touchmove", handleMouseMove);
    document.removeEventListener("touchend", handleMouseUp);

    if (
      parseInt(currentHeight) <= parseInt(initialHeight) &&
      direction.current === "down"
    ) {
      setCurrentHeight("0");
      if (onClose) {
        timeRef.current = setTimeout(() => {
          onClose();
        }, 300);
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape" && isOpen) {
      if (onClose) {
        timeRef.current = setTimeout(() => {
          onClose();
        }, 300);
      }
    }
  };

  const handlePopState = () => {
    if (isOpen) {
      if (onClose) {
        timeRef.current = setTimeout(() => {
          onClose();
        }, 300);
      }
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (darkened && e.target === panelRef.current) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(style.bodyOpen);
      setCurrentHeight(initialHeight);
      document.addEventListener("keydown", handleKeyDown);
      window.addEventListener("popstate", handlePopState);
    }
    return () => {
      clearTimeout(timeRef.current);
      document.body.classList.remove(style.bodyOpen);
      document.removeEventListener("touchmove", handleMouseMove);
      document.removeEventListener("touchend", handleMouseUp);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [isOpen]);

  const mods: Record<string, boolean | undefined> = {
    // [style.expanded]: isExpanded,
    [style.visible]: isOpen,
    [style.darkened]: !isOpen ? false : darkened,
  };

  useEffect(() => {
    if (isOpen) {
      setIsMouned(true);
    }
  }, [isOpen]);

  if (lazy && !isMouned) {
    return null;
  }

  return (
    <Portal>
      <div
        ref={panelRef}
        className={classNames(style.slidingPanel, mods, [
          "app_modal",
          className,
        ])}
        onClick={handleOverlayClick}
        style={
          !darkened
            ? {
                height: isOpen ? currentHeight : "0",
                bottom: isOpen ? "0" : `-${fullHeight}`,
                transition: "height 0.3s ease",
              }
            : {}
        }
      >
        <div
          className={style.sliding}
          style={
            darkened
              ? {
                  height: isOpen ? currentHeight : "0",
                  bottom: isOpen ? "0" : `-${fullHeight}`,
                  transition: "height 0.3s ease",
                }
              : {}
          }
        >
          <div
            className={style.overlay}
            style={
              currentHeight === "50%" && scrollLock
                ? { overflowY: "hidden" }
                : { overflowY: "scroll" }
            }
          >
            <div onTouchStart={handleMouseDown} className={style.dragZone}>
              <div className={style.dragHandle} />
            </div>
            <div className={style.panelContent}>{children}</div>
          </div>
        </div>
      </div>
    </Portal>
  );
}

export default SlidingPanel;
