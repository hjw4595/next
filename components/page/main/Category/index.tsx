import React from 'react';

import styles from './category.module.css'

function Category() {
    return (
    <div className={styles.wrapper}>
        <div className={styles['category-item']}>
            Foundation
        </div>
        <div className={styles['category-item']}>
            Top
        </div>
        <div className={styles['category-item']}>
            Art
        </div>
        <div className={styles['category-item']}>
            Edition     
        </div>
        <div className={styles['category-item']}>
            Printing
        </div>
        <div className={styles['category-item']}>
            Digital ART
        </div>
        <div className={styles['category-item']}>
           Photography
        </div>
        <div className={styles['category-item']}>
            Weekly Hot
        </div>
        <div className={styles['category-item']}>
            Virtual 3D ART
        </div>
        <div className={styles['category-item']}>
            Sculpture
        </div>
    </div>
    )

}

export default Category