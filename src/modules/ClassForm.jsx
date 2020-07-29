import React, { Component, createRef } from 'react'
import { Form, Input, InputNumber, Button, Upload } from 'antd'

import http from '../http'

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

function beforeUpload () {

}

class ClassForm extends Component {
    constructor(props) {
        super(props)
        this.state = { imageUrl: '' }
        this.formRef = createRef()
    }
    componentDidMount() {
        http('get',"/api/userList").then(res => console.log(res))
    }

    onFinish = (values) => {
        console.log(values)
        http('post', '/api/login', {
            name: values.name,
            pwd: values.age
        }).then(res => console.log(res))
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
    resetForm = () => {
        this.formRef.current.resetFields()
    }
    handleChange = info => {
        console.log(info, 'file')
        // if (info.file.status === 'uploading') {
        //   this.setState({ loading: true });
        //   return;
        // }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
        //   getBase64(info.file.originFileObj, imageUrl =>
        //     this.setState({
        //       imageUrl,
        //       loading: false,
        //     }),
        //   );
        this.setState({
            imageUrl: info.file?.response?.url
        })
        }
      };

    render() {
        const { imageUrl } = this.state
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
                        <Upload
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="http://localhost:3001/api/upload"
                            beforeUpload={beforeUpload}
                            onChange={this.handleChange}
                        >
                            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : '+'}
                        </Upload>
                    </Form.Item>
                    <Form.Item {...footerLayout}>
                        <Button type="primary" htmlType="submit">
                            提交
                        </Button>
                        <Button children="重置" onClick={this.resetForm} style={{marginLeft: '16px'}}/>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default ClassForm