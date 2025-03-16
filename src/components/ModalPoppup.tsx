import React from "react";
import { Modal, Typography } from "antd";
import TagFood from "./TagFood";
const { Title, Text } = Typography;
interface ModalPoppupProps {
  food: any;
  open: boolean;
  onClose: () => void;
}

const ModalPoppup: React.FC<ModalPoppupProps> = ({ food, open, onClose }) => {
    const tags = [
      "Béo phì",
      "Bệnh tim mạch",
    ]
  return (
    <Modal title={food.name} open={open} onCancel={onClose} footer={null}>
      <div style={{ paddingLeft: "0 !important", paddingRight: 0 }}>
        <div className="food-image-container" style={{ borderRadius: "15px" }}>
          <img
            alt={food.name}
            src={food.image || "/placeholder.svg"}
            className="food-image"
          />
        </div>
      </div>
      <div style={{margin:"15px 0px"}}>
        <Title level={5} className="food-name">
          Mô tả:
        </Title>
        <Text className="food-ingredients">
          Thịt ức gà ít mỡ, giàu protein tốt cho người béo phì.
        </Text>
        <Title level={5} className="food-name">
          Công thức:
        </Title>
        <Text className="food-ingredients">{food.ingredients}</Text>
        <Title level={5} className="food-name">
        Phù hợp với:

        </Title>
        <Text className="food-ingredients">
        <TagFood foodtag={tags}/>
        </Text>
      </div>
    </Modal>
  );
};

export default ModalPoppup;
