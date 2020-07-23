import React, { Component, createRef } from 'react'
import { Form, Input, InputNumber, Button } from 'antd'

// const CREATE = Form.create()

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 8 },
}

const footerLayout = {
    wrapperCol: {
        offset: 6,
        span: 8
    }
}


class ClassForm extends Component {
    constructor(props) {
        super(props)
        this.sate={ }
        this.formRef = createRef()
    }
    componentDidMount() {
        console.log(this.props, 'props---')
    }

    onFinish = (values) => {
        console.log(values)
    }

    onFinishFailed = ({ values, errorFields, outOfDate }) => {
        console.log(values, errorFields, outOfDate)
    }

    setPic = () => {
        console.log(this.formRef?.current, 'this.formRef')
        const { setFieldsValue } = this.formRef.current
        setFieldsValue({
            pic: 'xxx.png'
        })
    }

    render() {
        return (
            <div>
                ClassForm
                <Form
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                    ref={this.formRef}
                    {...layout}
                >
                    <Form.Item
                        label="姓名"
                        name="name"
                        rules={[
                        {
                            required: true,
                            message: '请输入姓名',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="年龄"
                        name="age"
                        rules={[
                        {
                            required: true,
                            message: '请输入年龄',
                        },
                        ]}
                    >
                        <InputNumber style={{ width: '100%' }}/>
                    </Form.Item>
                    <Form.Item
                        label="头像"
                        name="pic"
                        rules={[
                        {
                            required: true,
                            message: '请上传照片',
                        },
                        ]}
                    >
                        <Button onClick={this.setPic}>设置头像地址</Button>
                    </Form.Item>
                    <Form.Item {...footerLayout}>
                        <Button type="primary" htmlType="submit">
                        Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default ClassForm