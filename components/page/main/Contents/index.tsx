import React from 'react';

import styles from './contents.module.css'

import Card from 'components/common/card';

function Category() {
    return (
    <div className={styles.wrapper}>
        <Card content={'asd'} image={'asd'} profile={'asd'}/>
        <Card content={'asd'} image={'asd'} profile={'asd'}/>
        <Card content={'asd'} image={'asd'} profile={'asd'}/>
        <Card content={'asd'} image={'asd'} profile={'asd'}/>
    </div>
    )

}

export default Category