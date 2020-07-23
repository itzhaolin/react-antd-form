import React from 'react'
import { Button } from 'antd'

import styles from './Home.module.less'
  
function Home (props) {
   
    const { history } = props
    return(
        <div className={styles.home}>
            <div className="title">Home</div>
            <Button onClick={()=>history.push(`/newForm`)}>newForm</Button>
            <Button onClick={()=>history.push(`/classForm`)}>classForm</Button>
            <Button onClick={()=>history.push(`/hookForm`)}>hookForm</Button>
        </div>
    )
}

export default Home