import React from 'react'
import { Form, Input, Button } from 'antd'


const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

const FormItem = Form.Item

function NewForm(props) {
    const [form] = Form.useForm()

    const onFinish = values => {
      console.log(values)
    }
    return (
        <div>
            newForm
            <Form {...layout} form={form} onFinish={onFinish}>
                <Button type="primary" htmlType="submit">按钮</Button>
                <FormItem name="account" label="账号" rules={[{ required: true }]}>
                    <Input/>
                </FormItem>
            </Form>
        </div>
    )
}

export default NewForm