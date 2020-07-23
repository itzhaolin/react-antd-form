import React, { useCallback } from 'react'
import { Form, Input, Button } from 'antd'

import styles from './HookForm.module.less'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 10 },
  };
const footerLayout = {
    wrapperCol: {
        offset: 8,
        span: 10
    }
}
const FormItem = Form.Item

function HookForm(props) {
    const [form] = Form.useForm()

    const validatorAge = (rule, value, callback) => {
        // console.log(rule, value, callback)
        if(!value) {
            callback(new Error('请输入年龄'))
        } else if(!/^\d+$/g.test(value)) {
            callback(new Error('请输入数字'))
        } else {
            callback()
        }
    }

    const onFinish = values => {
        console.log(values)
    }

    const onFinishFailed = ({ values, errorFields, outOfDate }) => {
        console.log(values, errorFields, outOfDate )
    }

    const resetForm = useCallback(()=> {
        // console.log(form, 'form')
        const { resetFields } = form
        resetFields()
    }, [form])

    return (
        <div className={styles.hookForm}>
            HookForm
            <Form {...layout} form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
                <FormItem name="account" label="账号" rules={[{ required: true, message: '请输入账号' }]}>
                    <Input/>
                </FormItem>
                <FormItem name="age" label="年龄" rules={[{ required: true, validator: validatorAge }]}>
                    <Input/>
                </FormItem>
                <FormItem {...footerLayout}>
                    <Button type="primary" htmlType="submit">提交</Button>
                    <Button onClick={resetForm} className="m-l">重置</Button>
                </FormItem>
            </Form>
        </div>
    )
}

export default HookForm