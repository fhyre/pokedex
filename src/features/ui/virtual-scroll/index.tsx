import styles from './virtual-scroll.module.css';
import { memo, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { formatNodeData } from './format-node-data';
import { useScrollListen } from './use-scroll-listen';

const VirtualScroll = memo(
  ({
    className: containerStyle,
    data,
    offset: neighborOffset,
    FallbackComp,
    prevScrollPos,
  }: IVirtualScroll) => {
    const nodeContainerRef = useRef<HTMLDivElement>(null);
    const [containerRef, scrollTop] = useScrollListen();
    const [virtStyles, setVirtStyles] = useState<IVirtStyles>({});
    const [nodeRange, setNodeRange] = useState<IStartEndIndex>({
      startIndex: 0,
      endIndex: 1,
    });
    const [nodeDetails, setNodeDetails] = useState<any>({});
    const nodeClientWidth =
      nodeContainerRef.current &&
      nodeContainerRef.current.children[0] &&
      nodeContainerRef.current.children[0].clientWidth;

    // Set node data
    useEffect(() => {
      setNodeDetails(formatNodeData(nodeContainerRef, data.length));
    }, [nodeClientWidth, data]);

    // Reset to top when resizing
    useEffect(() => {
      const onResize = () => containerRef.current.scroll(0, 0);

      window.addEventListener('resize', onResize);

      return () => window.removeEventListener('resize', onResize);
    }, [containerRef]);

    // Set scroll position on reload
    useEffect(() => {
      let timer: NodeJS.Timeout | null;
      if (
        containerRef.current &&
        prevScrollPos !== null &&
        prevScrollPos !== undefined &&
        prevScrollPos >= 0
      ) {
        timer = setTimeout(() => {
          containerRef.current.scroll(0, prevScrollPos);
        }, 50);
      }

      return () => {
        if (timer) clearTimeout(timer);
      };
    }, [containerRef, prevScrollPos]);

    useEffect(() => {
      const calcData = (): void => {
        setVirtStyles((prev) => ({
          ...prev,
          height: nodeDetails.totalHeight,
        }));
      };

      const nodesInView = (): void => {
        const renderAhead = 2;

        const rowsInView = Math.ceil(
          containerRef.current.clientHeight / nodeDetails.nodeHeight
        );
        const nodesInView = rowsInView * nodeDetails.nodesPerRow;

        const startingRow = Math.max(
          0,
          Math.floor(scrollTop / nodeDetails.nodeHeight) - renderAhead
        );

        const startingIndex = startingRow * nodeDetails.nodesPerRow;

        const endingIndex = Math.min(
          startingIndex + nodesInView * renderAhead,
          data.length
        );

        setNodeRange({
          startIndex: startingIndex,
          endIndex: endingIndex,
        });

        setVirtStyles((prev) => ({
          ...prev,
          offsetY: startingRow * nodeDetails.nodeHeight,
        }));
      };

      calcData();
      nodesInView();
    }, [data, scrollTop, containerRef, nodeDetails]);

    return (
      <div
        id="virtual-scroll"
        className={`${styles.container}`}
        style={{ height: `calc(100vh - ${neighborOffset}px)` }}
        ref={containerRef}
      >
        <div style={{ height: `${virtStyles.height}px` }}>
          <div
            className={`${containerStyle}`}
            style={{
              transform: `translateY(${virtStyles.offsetY}px)`,
            }}
            ref={nodeContainerRef}
          >
            {data.length > 0 ? (
              data.slice(nodeRange.startIndex, nodeRange.endIndex)
            ) : (
              <FallbackComp />
            )}
          </div>
        </div>
      </div>
    );
  }
);

interface IVirtualScroll {
  className: string;
  data: JSX.Element[];
  offset: number;
  FallbackComp: React.FunctionComponent;
  prevScrollPos?: number;
}

interface IStartEndIndex {
  startIndex: number;
  endIndex: number;
}

interface IVirtStyles {
  height?: number;
  offsetY?: number;
}

VirtualScroll.displayName = 'VirtualScroll';
export { VirtualScroll };
