import React, { useEffect } from 'react'
import { Button } from 'antd'

import styles from './Home.module.less'
  
function Home (props) {

    useEffect(() => {
        console.log(this, 'this---')
    }, [])
   
    const { history } = props
    return(
        <div className={styles.home}>
            <div className="title">Home</div>
            <Button onClick={()=>history.push(`/classForm`)}>classForm</Button>
            <Button onClick={()=>history.push(`/hookForm`)}>hookForm</Button>
            <Button onClick={()=>history.push(`/editForm`)}>editForm</Button>
        </div>
    )
}

export default Home