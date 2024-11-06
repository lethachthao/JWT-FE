'use client';

import { Button, Form, Input, Radio, Select } from 'antd';
import { useState } from 'react';
import FormItem from 'antd/es/form/FormItem';
import { getListDay, getListMonth, getListYear } from '@/app/utils/times';
import { getUsers } from '@/app/api/userApi';
import { useQuery } from '@tanstack/react-query';

interface IFormRegisterUser {
  job: string;
  firstKanjiName: string;
  lastKanjiName: string;
  firstKanaName: string;
  lastKanaName: string;
  stageName: string;
  birthday: string;
  sex: string;
  specificAddress: string;
  district: string;
  province: string;
  password: string;
  confirmPassword: string;
  email: string;
}

const today = new Date();
const yearToday = today.getFullYear();
const monthToday = String(today.getMonth() + 1).padStart(2, '0');
const dayToday = String(today.getDate()).padStart(2, '0');
const date = `${yearToday}/${monthToday}/${dayToday}`;

const FormPage = () => {
  const [form] = Form.useForm();
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  const listYear = getListYear();
  const listMonth = getListMonth();
  const listDay = getListDay(year, month);

  const { data } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });

  console.log(data);

  const updateBirthday = (year: string, month: string, day: string) => {
    if (year && month && day) {
      form.setFieldsValue({
        birthday: `${year}-${month}-${day}`,
      });
    } else {
      form.setFieldsValue({
        birthday: '',
      });
    }
  };

  const handleSubmit = (values: IFormRegisterUser) => {
    if (values.password !== values.confirmPassword) return;

    const kanjiName = `${values.lastKanjiName} ${values.firstKanjiName}`;
    const kanaName = `${values.lastKanaName} ${values.firstKanaName}`;
    const address = `${values.specificAddress} ${values.district} ${values.province}`;

    const body = {
      kanji_name: kanjiName,
      kana_name: kanaName,
      address,
      job: values.job,
      birthday: values.birthday,
      stage_name: values.stageName,
      sex: values.sex,
      password: values.password,
      email: values.email,
    };
    console.log(body);
  };

  return (
    <div className="form-container max-w-[1000px] py-5 mx-auto">
      <div className="flex gap-3 mb-4">
        <p>ユーザー登録情報</p>
        <p>
          登録日<span>{date}</span>
        </p>
      </div>
      <Form form={form} onFinish={handleSubmit}>
        <FormItem
          label="職種"
          name="job"
          rules={[
            {
              required: true,
              message: 'この項目は空にできません。',
            },
          ]}
        >
          <Radio.Group>
            <Radio value="声優">声優</Radio>
            <Radio value="アニメーター">アニメーター</Radio>
          </Radio.Group>
        </FormItem>
        <FormItem
          label="氏名 "
          name="kanjiName"
          rules={[
            {
              required: true,
              message: 'この項目は空にできません。',
            },
          ]}
        >
          <div className="flex gap-10">
            <div className="flex gap-2 items-center grow">
              <span className="label-item">姓</span>
              <FormItem name="lastKanjiName" className="mb-0 grow">
                <Input />
              </FormItem>
            </div>

            <div className="flex gap-2 items-center grow">
              <span className="label-item">名</span>
              <FormItem name="firstKanjiName" className="mb-0 grow">
                <Input />
              </FormItem>
            </div>
          </div>
        </FormItem>
        <FormItem
          label="氏名（かな） "
          name="kanaName"
          rules={[
            {
              required: true,
              message: 'この項目は空にできません。',
            },
          ]}
        >
          <div className="flex gap-10 justify-between">
            <div className="flex gap-2 items-center grow">
              <span className="label-item"> せい</span>
              <FormItem name="lastKanaName" className="mb-0 grow">
                <Input />
              </FormItem>
            </div>
            <div className="flex gap-2 items-center grow">
              <span className="label-item"> めい</span>
              <FormItem name="firstKanaName" className="mb-0 grow">
                <Input />
              </FormItem>
            </div>
          </div>
        </FormItem>
        <FormItem
          label="芸名または筆名 "
          name="stageName"
          rules={[
            {
              required: true,
              message: 'この項目は空にできません。',
            },
          ]}
        >
          <Input />
        </FormItem>
        <FormItem
          label="生年月日 "
          name="birthday"
          rules={[
            {
              required: true,
              message: 'この項目は空にできません。',
            },
          ]}
        >
          <div className="flex gap-3 items-center">
            <Select
              options={listYear}
              onChange={value => {
                setYear(value);
                updateBirthday(value, month, day);
              }}
            />
            年
            <Select
              options={listMonth}
              onChange={value => {
                setMonth(value);
                updateBirthday(year, month, value);
              }}
            />
            月
            <Select
              options={listDay}
              onChange={value => {
                setDay(value);
                updateBirthday(year, month, value);
              }}
            />
            日
          </div>
        </FormItem>
        <FormItem
          label="性別 "
          name="sex"
          rules={[
            {
              required: true,
              message: 'この項目は空にできません。',
            },
          ]}
        >
          <Radio.Group>
            <Radio value="男">男</Radio>
            <Radio value="女">女</Radio>
            <Radio value="">回答しない</Radio>
          </Radio.Group>
        </FormItem>

        <FormItem label="住所" required className="mb-0">
          <div className="flex flex-col">
            <div className="flex gap-2 mb-[24px] max-w-[300px]">
              <Input />
              <Button>住所検索</Button>
            </div>
            <div className="flex gap-4 items-center mb-[24px]">
              <FormItem
                className="mb-0 grow"
                name="province"
                rules={[
                  {
                    required: true,
                    message: 'この項目は空にできません。',
                  },
                ]}
              >
                <div className="flex gap-2 items-center">
                  <Input />
                  <span className="min-w-[80px]">(都道府県)</span>
                </div>
              </FormItem>

              <FormItem
                className="mb-0 grow"
                name="district"
                rules={[
                  {
                    required: true,
                    message: 'この項目は空にできません。',
                  },
                ]}
              >
                <div className="flex gap-2 items-center">
                  <Input />
                  <span className="min-w-[80px]">(地区市町村)</span>
                </div>
              </FormItem>
            </div>
            <div className="flex gap-2 items-center mb-[24px]">
              <FormItem
                className="grow mb-0"
                name="specificAddress"
                rules={[
                  {
                    required: true,
                    message: 'この項目は空にできません。',
                  },
                ]}
              >
                <div className="flex gap-2 items-center">
                  <Input />
                  <span className="min-w-[80px]">(以降の住所)</span>
                </div>
              </FormItem>
            </div>
          </div>
        </FormItem>

        <FormItem
          label="メールアドレス "
          name="email"
          rules={[
            {
              required: true,
              message: 'この項目は空にできません。',
            },
          ]}
        >
          <Input />
        </FormItem>

        <FormItem
          label="パスワード "
          name="password"
          rules={[
            {
              required: true,
              message: 'この項目は空にできません。',
            },
          ]}
        >
          <Input />
        </FormItem>

        <FormItem
          label="確認用 "
          name="confirmPassword"
          rules={[
            {
              required: true,
              message: 'この項目は空にできません。',
            },
          ]}
        >
          <Input />
        </FormItem>

        <div className="w-full flex justify-center pt-5">
          <Button htmlType="submit">登録</Button>
        </div>
      </Form>
    </div>
  );
};

export default FormPage;
