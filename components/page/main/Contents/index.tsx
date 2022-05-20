import React from 'react';

import styles from './contents.module.css'

import Card from 'components/common/card';

import TitleImg from '/image/tree.jpg'

function Category() {
    return (
    <div className={styles.wrapper}>
        <Card content={<div>
            <h3>카드 타이틀</h3>
            <div>내용 ...</div>
        </div>} image={TitleImg.src} profile={TitleImg.src}/>
        <Card content={<div>
            <h3>카드 타이틀</h3>
            <div>내용 ...</div>
        </div>} image={TitleImg.src} profile={TitleImg.src}/>
        <Card content={<div>
            <h3>카드 타이틀</h3>
            <div>내용 ...</div>
        </div>} image={TitleImg.src} profile={TitleImg.src}/>
        <Card content={<div>
            <h3>카드 타이틀</h3>
            <div>내용 ...</div>
        </div>} image={TitleImg.src} profile={TitleImg.src}/>
    </div>
    )

}

export default Category