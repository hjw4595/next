import React from 'react';

import styles from './contents.module.css'

import Card from 'components/common/card';

const URL = 'https://pixabay.com/get/ga99e9fb38829e87e2c2b132cec7c40ec02d36e8de6197d43c786b3e52fd994319ac5eb470ad43f9cab989e5e7ca8672a99e02c83f4458c8a3551694fc79d1d480c78347d713ee3670df06e8062bb5d9a_640.jpg'
function Category() {
    return (
    <div className={styles.wrapper}>
        <Card content={<div>
            <h3>카드 타이틀</h3>
            <div>내용 ...</div>
        </div>} image={URL} profile={URL}/>
        <Card content={<div>
            <h3>카드 타이틀</h3>
            <div>내용 ...</div>
        </div>} image={URL} profile={URL}/>
        <Card content={<div>
            <h3>카드 타이틀</h3>
            <div>내용 ...</div>
        </div>} image={URL} profile={URL}/>
        <Card content={<div>
            <h3>카드 타이틀</h3>
            <div>내용 ...</div>
        </div>} image={URL} profile={URL}/>
    </div>
    )

}

export default Category