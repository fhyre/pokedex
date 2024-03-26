import Image from 'next/image';

export function ImageWrapper({
  imagePath,
  imageAlt,
  priority,
  styles,
  ariaHidden,
  height = 0,
  width = 0,
  title,
  quality,
  onLoaded,
  loading,
}: ImageWrapperProps) {
  return (
    <Image
      unoptimized
      height={height}
      width={width}
      src={imagePath}
      alt={imageAlt}
      className={styles ? styles.join(' ') : null}
      quality={quality}
      priority={priority}
      aria-hidden={ariaHidden}
      title={title}
      onLoad={onLoaded}
      style={{ display: loading ? 'none' : 'block' }}
    />
  );
}

type ImageWrapperProps = {
  imagePath: string;
  imageAlt: string;
  styles?: any[];
  priority?: boolean;
  ariaHidden?: boolean;
  height?: number;
  width?: number;
  title?: string;
  quality?: number;
  onLoaded?: () => void;
  loading?: boolean;
};
