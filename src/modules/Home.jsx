import React, { useEffect } from 'react'
import { Button } from 'antd'

import styles from './Home.module.less'
  
import { FormattedMessage } from 'react-intl'

function Home (props) {

    useEffect(() => {
        console.log(this, 'this---')
    }, [])
   
    const { history } = props
    return(
        <div className={styles.home}>
            <div className="title">
                <FormattedMessage id="hello"/>
            </div>
            <Button onClick={()=>history.push(`/classForm`)}><FormattedMessage id="class.form"/></Button>
            <Button onClick={()=>history.push(`/hookForm`)}><FormattedMessage id="hook.form"/></Button>
            <Button onClick={()=>history.push(`/editForm`)}><FormattedMessage id="edit.form"/></Button>
        </div>
    )
}

export default Home