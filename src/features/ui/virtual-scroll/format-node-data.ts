import { MutableRefObject } from 'react';

export function formatNodeData(
  containerRef: MutableRefObject<HTMLDivElement>,
  dataLength: number
) {
  const childNodes = containerRef.current.children;

  const childNode = childNodes[0] ? (childNodes[0] as HTMLElement) : null;

  const nodeWidth = childNode ? childNode.clientWidth : 200;
  const nodeHeight = childNode ? childNode.clientHeight : 200;
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
