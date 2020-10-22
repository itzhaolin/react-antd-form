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
            <Button onClick={()=>history.push(`/ClassForm`)}><FormattedMessage id="class.form"/></Button>
            <Button onClick={()=>history.push(`/HookForm`)}><FormattedMessage id="hook.form"/></Button>
            <Button onClick={()=>history.push(`/EditForm`)}><FormattedMessage id="edit.form"/></Button>
            <Button onClick={()=>history.push(`/UseRefComp`)}>UseRefComp</Button>
        </div>
    )
}

export default Home