import { createPortal } from "react-dom";
import { useState } from "react";
import styles from './SectionCatalog.module.scss'
import productImg from '../../../assets/images/ProductImg/productImg.png'
import StarIcon from "../../IconsComponents/StarIcon";
import { size } from './size.data'
import clsx from 'clsx';
import ButtonOrder from "../../Button/ButtonOrder";

const modalRoot = document.getElementById("modal-root");

export function ModalProduct({ isOpen, onClose }) {
  const [activeId, setActiveId] = useState(null)

  if (!isOpen) return null;

  return createPortal(
    <div className={styles.catalog__modal} onClick={onClose}>
      <div className={clsx('container', styles.catalog__modalDiv)} onClick={(e) => e.stopPropagation()}>
        <div className={styles.catalog__modalDiv__div1}>
            <div className={styles.catalog__modalDiv__div1__blockImg}>
                <img width={520} height={460} src={productImg} alt="Sneakers" />
                <div className={styles.catalog__modalDiv__div1__blockImg__flexImg}>
                    <img width={70} height={75} className={styles.catalog__modalDiv__div1__blockImg__flexImg__img} src={productImg} alt="Sneakers" />
                    <img width={70} height={75} className={styles.catalog__modalDiv__div1__blockImg__flexImg__img} src={productImg} alt="Sneakers" />
                    <img width={70} height={75} className={styles.catalog__modalDiv__div1__blockImg__flexImg__img} src={productImg} alt="Sneakers" />
                    <img width={70} height={75} className={styles.catalog__modalDiv__div1__blockImg__flexImg__img} src={productImg} alt="Sneakers" />
                    <img width={70} height={75} className={styles.catalog__modalDiv__div1__blockImg__flexImg__img} src={productImg} alt="Sneakers" />
                    <img width={70} height={75} className={styles.catalog__modalDiv__div1__blockImg__flexImg__img} src={productImg} alt="Sneakers" />
                </div>
            </div>
            <div className={styles.catalog__modalDiv__div1__block}>
            <div className={styles.catalog__modalDiv__div1__block__block1}>
                <p className={styles.catalog__modalDiv__div1__block__block1__desc}>Item No: 879876</p>
                <p className={styles.catalog__modalDiv__div1__block__block1__desc}>In stock: <b>13 pcs</b></p>
            </div>
            <div className={styles.catalog__modalDiv__div1__block__block2}>
                <p className={styles.catalog__modalDiv__div1__block__block2__title}>Puma Force 1 Shadow women's sneakers</p>
                <div className={styles.catalog__modalDiv__div1__block__block2__blockSvg}>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                </div>
                <p className={styles.catalog__modalDiv__div1__block__block2__select}>Select size</p>
                <div className={styles.catalog__modalDiv__div1__block__block2__blockButton}>
                    {size.map(({ id, size }) => (
                        <button
                            key={id}
                            onClick={() => setActiveId(id)}
                            className={`${styles.catalog__modalDiv__div1__block__block2__blockButton__btn} ${activeId === id ? styles.catalog__modalDiv__div1__block__block2__blockButton__btnActive : ''}`}>
                                {size}
                        </button>
                    ))}
                </div>
            </div>
            <p className={styles.catalog__modalDiv__div1__block__block3}>19 789 $ </p>
            <div className={styles.catalog__modalDiv__div1__block__block4}>
                <ButtonOrder />
                <ul className={styles.catalog__modalDiv__div1__block__block4__ul}>
                    <li className={styles.catalog__modalDiv__div1__block__block4__item}>
                        <p className={styles.catalog__modalDiv__div1__block__block4__p}>
                            Free delivery to your door
                        </p>
                    </li>
                    <li className={styles.catalog__modalDiv__div1__block__block4__item}>
                        <p className={styles.catalog__modalDiv__div1__block__block4__p}>
                            Payment upon receipt of the order
                        </p>
                    </li>
                    <li className={styles.catalog__modalDiv__div1__block__block4__item}>
                        <p className={styles.catalog__modalDiv__div1__block__block4__p}>
                            Exchange within two weeks
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        </div>
        <div className={styles.catalog__modalDiv__div2}>
            <div className={styles.catalog__modalDiv__div2__block1}>
                <p className={styles.catalog__modalDiv__div2__block1__desc}>Decription</p>
                <p className={styles.catalog__modalDiv__div2__block1__description}>Featuring a vintage sole, the Nike Blazer Mid '77 Vintage Suede brings back the style of Nike basketball shoes from the past, giving the impression that they've been stored away in a closet for years.</p>
            </div>
            <div className={styles.catalog__modalDiv__div2__block2}>
                <p className={styles.catalog__modalDiv__div2__block2__desc}>Characteristics</p>
                <div className={styles.catalog__modalDiv__div2__block2__cell}>
                    <p className={styles.catalog__modalDiv__div2__block2__cell__p}>
                        Gender: Male
                    </p>
                    <p className={styles.catalog__modalDiv__div2__block2__cell__p}>
                        Colors: Multicolored
                    </p>
                    <p className={styles.catalog__modalDiv__div2__block2__cell__p}>
                        Composition: Leather, textile, rubber
                    </p>
                    <p className={styles.catalog__modalDiv__div2__block2__cell__p}>
                        Country: Vietnam
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>,
    modalRoot
  );
}