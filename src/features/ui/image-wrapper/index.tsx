import Image from 'next/image';

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

export const ImageWrapper = ({
  imagePath,
  imageAlt,
  priority,
  styles,
  ariaHidden,
  height = 0,
  width = 0,
  title,
  quality,
}: IImageWrapper): JSX.Element => (
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
