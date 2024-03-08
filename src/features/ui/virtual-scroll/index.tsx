import styles from './virtual-scroll.module.css';
import { memo, useEffect, useRef, useState } from 'react';
import { formatNodeData } from './format-node-data';
import { useScrollListen } from './use-scroll-listen';
import { useScrollRestore } from './use-scroll-restore';

const VirtualScroll = memo(
  ({
    className: containerStyle,
    data,
    offset: neighborOffset,
    FallbackComp,
  }: IVirtualScroll) => {
    const nodeContainerRef = useRef<HTMLDivElement>(null);
    const [containerRef, scrollTop] = useScrollListen();
    const [prevScrollPos] = useScrollRestore();
    const [virtStyles, setVirtStyles] = useState<IVirtStyles>({});
    const [nodePos, setNodePos] = useState<IStartEndPos>({
      startPos: 0,
      endPos: 10,
    });
    const [nodeDetails, setNodeDetails] = useState<any>({});

    // Set scroll position on reload
    useEffect(() => {
      if (containerRef.current && prevScrollPos != 0) {
        const timer = setTimeout(() => {
          containerRef.current.scroll(0, prevScrollPos);
        }, 50);

        return () => clearTimeout(timer);
      }
    }, [containerRef, prevScrollPos]);

    // Set node data
    useEffect(() => {
      setNodeDetails(formatNodeData(nodeContainerRef, data.length));
    }, [nodeContainerRef, data.length]);

    useEffect(() => {
      const onResize = (_e: Event) => {
        const oldTotalHeight = containerRef.current.scrollHeight;
        const scrollPos = containerRef.current.scrollTop;
        const percent = scrollPos / oldTotalHeight;

        setNodeDetails(formatNodeData(nodeContainerRef, data.length));

        const scrollToPos = nodeDetails.totalHeight * percent;
        containerRef.current.scroll(0, scrollToPos);
      };

      window.addEventListener('resize', onResize);

      return () => {
        window.removeEventListener('resize', onResize);
      };
    }, [containerRef, data.length, nodeDetails]);

    useEffect(() => {
      const calcData = (): void => {
        setVirtStyles((prev) => ({
          ...prev,
          height: nodeDetails.totalHeight,
        }));
      };

      const nodesInView = (): void => {
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
          offsetY: startingRow * nodeDetails.nodeHeight,
        }));
      };

      calcData();
      nodesInView();
    }, [data.length, scrollTop, containerRef, nodeDetails]);

    const handleNodeClick = () =>
      sessionStorage.setItem('scrollPos', scrollTop.toString());

    return (
      <div
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
              data
                .slice(nodePos.startPos, nodePos.endPos)
                .map((pokeCard, i) => (
                  <div
                    onClick={handleNodeClick}
                    key={nodePos.startPos + i + nodePos.endPos}
                  >
                    {pokeCard}
                  </div>
                ))
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
  scrollProps?: {
    scrollCb: (e: number) => void;
    scrollPercent: number;
  };
}

interface IStartEndPos {
  startPos: number;
  endPos: number;
}

interface IVirtStyles {
  height?: number;
  offsetY?: number;
}

VirtualScroll.displayName = 'VirtualScroll';
export { VirtualScroll };
