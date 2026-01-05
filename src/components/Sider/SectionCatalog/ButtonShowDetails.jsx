import { useState, useEffect } from 'react';
import styles from './SectionCatalog.module.scss';
import RangeInput from './RangeInput';
import CheckBoxInput from './CheckBoxInput';
import SizeCatalog from './SizeCatalog';
import ButtonApp from '../../Button/ButtonApp';
import ButtonReset from '../../Button/ButtonReset';

export default function ButtonShowDetails() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function handleClick(e) {
      const modal = document.getElementById('modal')
      const button = document.getElementById('button')

      if (e.target === button) {
        setOpen(true)
        document.body.style.overflow = 'hidden'
        document.body.style.pointerEvents = 'none'
      } 
      else if (open && modal && !modal.contains(e.target)) {
        setOpen(false)
        document.body.style.overflow = ''
        document.body.style.pointerEvents = 'all'
      }
    }

    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [open])

    return (
        <div id='modal' className={styles.catalog__cardShow}>
        <button id='button'  className={`${styles.catalog__buttonShow} ${open ? styles.catalog__buttonVissualy : ""}`}>
            <svg className={styles.catalog__buttonSvg} id="Layer_1" enableBackground="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m216.2 481c-3 0-6-1.1-8.2-3.4-4.6-4.6-4.6-11.9 0-16.5l205-205.1-205.1-205.1c-4.6-4.6-4.6-11.9 0-16.5s11.9-4.6 16.5 0l213.3 213.3c4.6 4.6 4.6 11.9 0 16.5l-213.3 213.4c-2.3 2.3-5.2 3.4-8.2 3.4z"></path><path d="m82.5 481c-3 0-6-1.1-8.2-3.4-4.6-4.6-4.6-11.9 0-16.5l205-205.1-205.1-205.1c-4.6-4.6-4.6-11.9 0-16.5s11.9-4.6 16.5 0l213.3 213.3c4.6 4.6 4.6 11.9 0 16.5l-213.3 213.4c-2.2 2.3-5.2 3.4-8.2 3.4z"></path></g></svg>
        </button>
        {<div className={`${styles.catalog__title} ${open ? styles.catalog__buttonHide : ""}`}>
                <h2 className={styles.catalog__h2}>Selection<br></br> by parameters</h2>
                <RangeInput />
                <CheckBoxInput />
                <SizeCatalog />
                <ButtonApp />
                <ButtonReset />
            </div>}
        </div>
    )
}