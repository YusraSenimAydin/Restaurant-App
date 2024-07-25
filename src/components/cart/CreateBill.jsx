import { Button, Card, Form, Input, Modal } from "antd";
import { useSelector } from "react-redux";

const CreateBill = ({ isModalOpen, setIsModalOpen }) => {

  const cart = useSelector((state) => state.cart);
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Modal
      title="Fatura Oluştur"
      open={isModalOpen}
      footer={false}
      onCancel={() => setIsModalOpen(false)}
    >
      <Form layout={"vertical"} onFinish={onFinish}>
        <Form.Item
          rules={[{ required: true }]}
          name={"masaNo"}
          label="Masa No"
        >
          <Input placeholder="Masa No Yazınız" maxLength={11} />
        </Form.Item>
        <Card>
          <div className="flex justify-between">
            <b>Toplam</b>
            <span>{cart.total > 0 ? cart.total.toFixed(2) : 0}₺</span>
          </div>
          <div className="flex justify-end">
            <Button
              className="mt-4"
              type="primary"
              onClick={() => setIsModalOpen(true)}
              htmlType="submit"
            >
              Sipariş Oluştur
            </Button>
          </div>
        </Card>
      </Form>
    </Modal>
  );
};
export default CreateBill;
