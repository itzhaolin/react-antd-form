import React, { useEffect, useCallback, useState, useMemo } from 'react'
import { Form, Input, Button, InputNumber } from 'antd'


const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 10 },
  }

const footLayout = {
    wrapperCol: {
        offset: 8,
        span: 10
    }
}

const FormItem = Form.Item

function NewForm(props) {
    const [form] = Form.useForm()

    const onFinish = values => {
      console.log(values)
    }

    const onFinishFailed = ({ values, errorFields, outOfDate }) => {
        console.log(values, errorFields, outOfDate )
    }

    useEffect(() => {
        console.log('componentDidMount---')
        /**
         * 此处请求接口详情后, 可用setFieldsValue 进行赋值
         */
        form.setFieldsValue({
            name: 'zhangsan'
        })
    }, [])

    return (
        <div>
            editForm
            <Form {...layout} form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
                <FormItem name="name" label="姓名" rules={[{ required: true, message: '请输入姓名' }]}>
                    <Input/>
                </FormItem>
                <FormItem name="age" label="年龄" rules={[{ required: true, message: '请输入年龄' }]}>
                    <InputNumber/>
                </FormItem>
                <FormItem {...footLayout}>
                    <Button type="primary" htmlType="submit">按钮</Button>
                </FormItem>
            </Form>
        </div>
    )
}

export default NewForm