import React, { useState } from 'react'
import Vendor from './../../Pages/Vendor';
import { Input, Space, Image, Upload } from 'antd';
import { Scrollbars } from 'rc-scrollbars';
import ImgCrop from 'antd-img-crop';

export default function AddProduct() {
    const { TextArea } = Input;
    const [fileList, setFileList] = useState([]);
    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    const onPreview = async (file) => {
        let src = file.url;

        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);

                reader.onload = () => resolve(reader.result);
            });
        }

        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };
    return (
        <Vendor>
            <Scrollbars style={{ height: "80vh" }}>
                <div className="header_of_add_product">
                    <h2>Add a new product</h2>
                </div>
                <div className="form_body_of_new_to">
                    <Space
                        direction="vertical"
                        style={{
                            width: '100%',
                        }}
                    >
                        <div className="row">
                            <div className="col">
                                <div className="input_items">
                                    <label htmlFor="name">Product title</label>
                                    <Input status="error" placeholder="Name of the product" id='name' />
                                </div>
                                <div className="input_items">
                                    <label htmlFor="des">Sort Description</label>
                                    <TextArea status="warning" id='des' showCount maxLength={200} style={{ height: 120 }} />
                                </div>
                                <div className="input_items">
                                    <ImgCrop rotate>
                                        <Upload
                                            listType="picture-card"
                                            fileList={fileList}
                                            onDrop={true}
                                            onChange={onChange}
                                            onPreview={onPreview}
                                        >
                                            {fileList.length < 1 && '+ Upload'}
                                        </Upload>
                                    </ImgCrop>
                                </div>
                            </div>
                            <div className="col">

                            </div>
                        </div>

                    </Space>
                </div>
            </Scrollbars>

        </Vendor>
    )
}
