'use client';

import { Button, Checkbox, Form, Input, Upload } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import TextArea from 'antd/es/input/TextArea';

const FormUserPage = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div className="form-container max-w-[1000px] py-5 mx-auto">
      <div>
        <p>アカウント情報登録</p>
        <p>ユーザーID　１２３４５６７８９</p>
        <Form form={form} onFinish={handleSubmit}>
          <FormItem label="ニックネーム" name="nickname">
            <Input />
          </FormItem>
          <p>職業関連情報</p>
          <FormItem label="現在の就業形態" name="workingStatus">
            <Input />
          </FormItem>
          <FormItem
            label="経歴（所属事務所、過去の出演や担当作品）"
            name="workingStatus"
          >
            <TextArea />
          </FormItem>
          <FormItem label="得意分野・スキル" name="skills">
            <Input />
          </FormItem>
          <FormItem
            label="ポートフォリオ（サンプルや作品リンク）"
            name="portfolio"
          >
            <div className="flex gap-3">
              <Input />

              <Upload>
                <Button>添付</Button>
              </Upload>
            </div>
            <Button>+追加登録</Button>
          </FormItem>
          <FormItem label="希望シフト" name="desiredShift">
            <Checkbox.Group>
              <Checkbox value="月">月</Checkbox>
              <Checkbox value="火">火</Checkbox>
              <Checkbox value="水">水</Checkbox>
              <Checkbox value="木">木</Checkbox>
              <Checkbox value="金">金</Checkbox>
              <Checkbox value="土">土</Checkbox>
              <Checkbox value="日">日</Checkbox>
            </Checkbox.Group>
          </FormItem>
          <FormItem label="勤務時間帯" name="workingHour">
            <div className="flex gap-3">
              <Input />
              <Input />
            </div>
          </FormItem>
          <FormItem label="備考" name="notes">
            <Input />
          </FormItem>
          <FormItem label="氏名 " name="kanjiName">
            <div className="flex gap-10">
              <div className="flex gap-2 items-center grow">
                <Input />
                <span className="label-item">（都道府県）</span>
              </div>

              <div className="flex gap-2 items-center grow">
                <Input />
                <span className="label-item">（市町村）</span>
              </div>
            </div>
            <Button>+追加登録</Button>
          </FormItem>

          <FormItem label="仕事の種類" name="typeOfWork">
            <Input />
            <Button>+追加登録</Button>
          </FormItem>

          <FormItem label="スケジュールについて備考欄" name="noteSchedule">
            <Input />
          </FormItem>

          <FormItem label="資格や特殊技能" name="qualifications">
            <Input />
          </FormItem>

          <FormItem label="夢や目標、希望するサポート" name="goals">
            <TextArea />
          </FormItem>

          <FormItem label="自己PR" name="selfPromotion">
            <TextArea />
          </FormItem>

          <FormItem label="性格の自己分析" name="personality">
            <TextArea />
          </FormItem>

          <Button>保存</Button>
        </Form>
      </div>
    </div>
  );
};
export default FormUserPage;
