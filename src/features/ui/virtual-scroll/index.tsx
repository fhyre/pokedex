import styles from './virtual-scroll.module.scss';
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
  }: VirtualScrollProps) => {
    const nodeContainerRef = useRef<HTMLDivElement>(null);
    const [containerRef, scrollTop] = useScrollListen();
    const [virtStyles, setVirtStyles] = useState<VirtStyles>({});
    const [nodeRange, setNodeRange] = useState<NodeRange>({
      startIndex: 0,
      endIndex: 1,
    });
    const [nodeDetails, setNodeDetails] = useState<NodeDetails>({});
    const nodeClientWidth =
      nodeContainerRef.current &&
      nodeContainerRef.current.children[0] &&
      nodeContainerRef.current.children[0].clientWidth;

    // Set node data
    useEffect(() => {
      setNodeDetails(formatNodeData(nodeContainerRef, data.length));
    }, [nodeClientWidth, data.length]);

    useEffect(() => {
      const onResize = () =>
        setNodeDetails(formatNodeData(nodeContainerRef, data.length));

      window.addEventListener('resize', onResize);

      return () => window.removeEventListener('resize', onResize);
    }, [containerRef, data.length]);

    // Set scroll position on reload
    useEffect(() => {
      if (containerRef.current) {
        if (prevScrollPos > virtStyles.height) {
          containerRef.current.scroll(0, 0);
        } else {
          containerRef.current.scroll(0, prevScrollPos);
        }
      }
    }, [containerRef, prevScrollPos, virtStyles.height]);

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
          offsetY: startingRow * nodeDetails.nodeHeight || 0,
        }));
      };

      calcData();
      nodesInView();
    }, [data.length, scrollTop, containerRef, nodeDetails]);

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

type VirtualScrollProps = {
  className: string;
  data: JSX.Element[];
  offset: number;
  FallbackComp: React.FunctionComponent;
  prevScrollPos?: number;
};

type NodeRange = {
  startIndex: number;
  endIndex: number;
};

type VirtStyles = {
  height?: number;
  offsetY?: number;
};

type NodeDetails = {
  nodeWidth?: number;
  nodeHeight?: number;
  nodesPerRow?: number;
  totalNumRows?: number;
  totalHeight?: number;
};

VirtualScroll.displayName = 'VirtualScroll';
export { VirtualScroll };
