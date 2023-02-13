import { memo, ReactElement, useEffect, useRef, useState } from "react";
import { formatNodeData } from "./format-node-data";
import { useScrollListen } from "./use-scroll-listen";
import styles from "./virtual-scroll.module.css";

interface VirtualScroll {
  className: string;
  data: JSX.Element[];
  offset: number;
  FallbackComp: React.FunctionComponent;
}

interface StartEndPos {
  startPos: number;
  endPos: number;
}

const VirtualScroll = memo(
  ({
    className: containerStyle,
    data,
    offset: neighborOffset,
    FallbackComp,
  }: VirtualScroll): ReactElement => {
    const nodeContainerRef = useRef<HTMLDivElement>(null);
    const [containerRef, scrollTop] = useScrollListen();
    const [virtStyles, setVirtStyles] = useState<any>({});
    const [nodePos, setNodePos] = useState<StartEndPos>({
      startPos: 0,
      endPos: 50,
    });

    useEffect(() => {
      const onResize = (e: Event) => {
        const oldTotalHeight = containerRef.current.scrollHeight;
        const scrollPos = containerRef.current.scrollTop;

        const percent = scrollPos / oldTotalHeight;
        const updatedData = formatNodeData(nodeContainerRef, data.length);

        const scrollTo = updatedData.totalHeight * percent;
        containerRef.current.scrollTo(0, scrollTo);
      };

      window.addEventListener("resize", onResize);

      return () => {
        window.removeEventListener("resize", onResize);
      };
    }, [containerRef, data.length]);

    useEffect(() => {
      const calcData = (): void => {
        const nodeDetails = formatNodeData(nodeContainerRef, data.length);
        if (nodeDetails.totalHeight !== virtStyles.height) {
          setVirtStyles((prev) => ({
            ...prev,
            height: `${nodeDetails.totalHeight}px`,
          }));
        }
      };

      const nodesInView = (): void => {
        const nodeDetails = formatNodeData(nodeContainerRef, data.length);

        const renderAhead = 3;

        const rowsInView = Math.ceil(
          containerRef.current.clientHeight / nodeDetails.nodeHeight
        );
        const nodesInView = rowsInView * nodeDetails.nodesPerRow;

        const startingRow = Math.max(
          0,
          Math.floor(scrollTop / nodeDetails.nodeHeight) - renderAhead
        );

        const startingNode = startingRow * nodeDetails.nodesPerRow;

        const endingNode = Math.min(
          startingNode + nodesInView * renderAhead,
          data.length
        );

        setNodePos({
          startPos: startingNode,
          endPos: endingNode,
        });

        setVirtStyles((prev) => ({
          ...prev,
          offsetY: `translateY(${startingRow * nodeDetails.nodeHeight}px)`,
        }));
      };

      calcData();
      nodesInView();
    }, [data, scrollTop, nodeContainerRef, containerRef, virtStyles.height]);

    return (
      <div
        className={`${styles.container}`}
        style={{ height: `calc(100vh - ${neighborOffset}px)` }}
        ref={containerRef}
      >
        <div style={{ height: virtStyles.height }}>
          <div
            className={`${containerStyle}`}
            style={{
              transform: virtStyles.offsetY,
            }}
            ref={nodeContainerRef}
          >
            {data.length > 0 ? (
              data.slice(nodePos.startPos, nodePos.endPos)
            ) : (
              <FallbackComp />
            )}
          </div>
        </div>
      </div>
    );
  }
);

VirtualScroll.displayName = "VirtualScroll";
export { VirtualScroll };
