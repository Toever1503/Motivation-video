import React, { useState } from 'react';
import { Button, Checkbox, Form, Input, Radio, Space, Spin, Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { RcFile } from 'antd/es/upload';


const getBase64 = (img: RcFile, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
};

export function UploadNewVideoPage() {

    const [form] = Form.useForm();
    const [uploadVideo, setUploadVideo] = useState<{
        url?: string;
        base64?: string;
        file?: RcFile
    }>({
    });




    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const onAfterChooseFile = (file: RcFile) => {
        setUploadVideo({
            ...uploadVideo,
            file
        });

        getBase64(file, (data) => {
            setUploadVideo({
                ...uploadVideo,
                base64: data
            });
        })
    }

    const resetForm = () => {
        form.resetFields();
    }

    type FieldType = {
        sourceTitle?: string;
        sourceLink?: string;
        imageId?: string;
        category?: number;
    };

    const [isSaving, setIsSaving] = useState<boolean>(false);

    return (<div className='bg-white mx-auto flex justify-center py-[20px]'>
        <Spin spinning={isSaving}>
            <Form
                form={form}
                name="basic"
                labelCol={{ span: 8 }}
                style={{ maxWidth: 1200 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label="Nguồn"
                    name="sourceTitle"
                    rules={[{ required: true, message: 'Vui lòng không bỏ trống!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Link nguồn"
                    name="sourceLink"
                    rules={[{ required: true, message: 'Vui lòng không bỏ trống!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Loại"
                    name="category"
                    rules={[{ required: true, message: 'Vui lòng không bỏ trống!' }]}
                >
                    <Radio.Group>
                        <Radio value={1}>Động lực</Radio>
                        <Radio value={2}>Xả stress</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item<FieldType>
                    label="Video"
                    name="imageId"
                    rules={[{ required: true, message: 'Vui lòng không bỏ trống!' }]}
                >
                    <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        beforeUpload={(file) => {
                            onAfterChooseFile(file);
                            return false;
                        }}
                        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                    >
                        {
                            uploadVideo.base64 ? <div className='relative w-[100px] h-[110px]'>
                                <video className='w-full h-full'>
                                    <source src={uploadVideo.base64} />
                                </video>
                            </div> :
                                <div>
                                    <PlusOutlined rev={undefined} />
                                </div>
                        }


                    </Upload>
                </Form.Item>

                <Form.Item >
                    <Space size={15} className="justify-center w-full">
                        <Button type="primary" onClick={resetForm} htmlType="button">
                            Làm mới
                        </Button>

                        <Button type="primary" htmlType="submit">
                            Đăng
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
        </Spin>

    </div>)
}