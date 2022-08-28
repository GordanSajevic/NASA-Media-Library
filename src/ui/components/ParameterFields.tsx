import { Button, Form, Input } from 'antd';
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';

export const ParameterFields = ({ searchData }: 
    { searchData: any }) => {

    const [yearStart, setYearStart] = useState(0);
    const [yearEnd, setYearEnd] = useState(0);

    const onFinish = (values: any) => {
        let parameters = {query: values.query, yearStart: yearStart, yearEnd: yearEnd};
        searchData(parameters);
    };
 
  return (
    <div>
        <Form
            name="searchForm"
            labelCol={{
                span: 10,
            }}
            wrapperCol={{
                span: 4,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
            >
                <Form.Item
                    label="Query"
                    name="query"
                    rules={[
                    {
                        required: true,
                        message: 'This field is required!',
                        whitespace: true
                    },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Year start"
                 
                >
                    <ReactDatePicker
                        id="yearStart"
                        className="text-primary text-center"
                        onChange={(date) => date && date.getFullYear() && setYearStart(date?.getFullYear())}
                        showYearPicker
                        dateFormat="yyyy"
                        selected={yearStart !== 0 ? new Date(yearStart, 0) : null}
                        yearItemNumber={9}
                        maxDate={new Date()}
                    />
                </Form.Item>
                <Form.Item
                    label="Year end"
                >
                    <ReactDatePicker
                        id="yearEnd"
                        className="text-primary text-center"
                        onChange={(date) => date && date.getFullYear() && setYearEnd(date?.getFullYear())}
                        showYearPicker
                        selected={yearEnd !== 0 ? new Date(yearEnd, 0) : null}
                        dateFormat="yyyy"
                        yearItemNumber={9}
                        maxDate={new Date()}
                    />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                    offset: 10
                    }}
                >
                    <Button type="primary" htmlType="submit">
                    Search
                    </Button>
                </Form.Item>
        </Form>
    </div>
  );
};

export default ParameterFields;