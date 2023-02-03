import { MutableRefObject } from "react";

export function formatNodeData(
  containerRef: MutableRefObject<HTMLDivElement>,
  dataLength: number
) {
  const childNodes: HTMLCollection = containerRef.current.children;

  const nodeWidth = childNodes[0] ? childNodes[0].clientWidth : 100;
  const nodeHeight = childNodes[0] ? childNodes[0].clientHeight : 100;
  const nodeContainerWidth = containerRef.current.clientWidth;
  const nodesPerRow = Math.round(nodeContainerWidth / nodeWidth);
  const totalNumRows = Math.ceil(dataLength / nodesPerRow);
  const totalHeight = totalNumRows * nodeHeight + 40;

  return {
    nodeWidth: nodeWidth,
    nodeHeight: nodeHeight,
    nodesPerRow: nodesPerRow,
    totalNumRows: totalNumRows,
    totalHeight: totalHeight,
  } as const;
}
