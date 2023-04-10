import React from "react";
import styles from "./poster.module.scss";
import { SolidStarIcon, SolidHeartIcon } from "../../assets/icon";



const PosterH = ({ title , postImage , onModalClick , id  , rating}) => {
  return (
    <div className={styles.wrapper}  >
      <div className={styles.screen} onClick={() => onModalClick(id)}>
        <article className={styles.layerUp} >
          <div className={styles.title}>{title}</div>
          <div className={styles.bottom}>
            <div className={styles.rating}>
              <SolidStarIcon className={styles.star} />
              {rating}
            </div>
            <button className={styles.icon}>
              <SolidHeartIcon height="24px" />
            </button>
          </div>
        </article>
        <article className={styles.layerDown} >
          <img className={styles.postImage} src={postImage} alt={title} />
        </article>
      </div>
    </div>
  );
};
export default PosterH;

// const PosterH = ({ title , postImage , onModalClick }) => {
//   return (
//     <div className={styles.wrapper} onClick={onModalClick}>
//       <div
//         className={styles.box}
//       >
//         <img className={styles.media} src={postImage} alt={title} />
//         <div className={styles.rating}>
//           <SolidStarIcon className={styles.star} />10점
//         </div>
//       </div>
//     </div>
//   );
// };
// export default PosterH;
