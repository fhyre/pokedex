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
}: IImageWrapper) {
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
    />
  );
}

interface IImageWrapper {
  imagePath: string;
  imageAlt: string;
  styles?: any[];
  priority?: boolean;
  ariaHidden?: boolean;
  height?: number;
  width?: number;
  title?: string;
  quality?: number;
}
