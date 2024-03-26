import styles from './type-icon.module.scss';
import { PokeTypes } from '../types';
import { ImageWrapper } from '@/features/ui/image-wrapper';

export function TypeIcon({ type, status, size, prio }: TypeIcon) {
  return (
    <ImageWrapper
      imagePath={`/type-icons/${type}.png`}
      width={469}
      height={126}
      quality={100}
      imageAlt=""
      styles={[styles[`${size}Type`]]}
      priority={prio}
    />
  );
}

TypeIcon.defaultProps = {
  prio: false,
};

type TypeIcon = PokeTypes & {
  size: 'small' | 'medium' | 'large';
  prio?: boolean;
};
