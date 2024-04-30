import { Image } from "semantic-ui-react";
import styles from "./BannerFirst.module.scss";

export function BannerFirst(props) {
  const { src, alt } = props;
  return (
    <div className={styles.container}>
      <Image src={src} alt={alt} className={styles.wallpaper} />
    </div>
  );
}
