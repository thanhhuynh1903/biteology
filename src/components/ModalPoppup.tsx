import React from "react";
import { Modal, Typography } from "antd";
import TagFood from "./TagFood";
const { Title, Text } = Typography;
interface ModalPoppupProps {
  country: string;
  food: any;
  open: boolean;
  onClose: () => void;
}

const ModalPoppup: React.FC<ModalPoppupProps> = ({country, food, open, onClose }) => {
console.log("country",country)
  return (
    <Modal title={food.title} open={open} onCancel={onClose} footer={null}>
      <div style={{ paddingLeft: "0 !important", paddingRight: 0 }}>
        <div className="food-image-container" style={{ borderRadius: "15px" }}>
          <img
            alt={food.name}
            src={food.image || "/placeholder.svg"}
            className="food-image"
          />
        </div>
      </div>
      <div style={{ margin: "15px 0px" }}>
        <Title level={5} className="food-name">
          Ingredients:
        </Title>
        <Text className="food-ingredients">
          {food.missedIngredients.map((ingredient: any) => (
            <span key={ingredient.id}>
              {ingredient.name.charAt(0).toUpperCase() +
                ingredient.name.slice(1)}
               , {" "}
            </span>
          ))}
        </Text>
        <Title level={5} className="food-name">
        Processing capacity:
        </Title>
        <Text className="food-process">
        {food.missedIngredients.map((ingredient: any) => (
            <p key={ingredient.id} style={{margin:"0px !important"}}>
              - {ingredient.original}
               , {" "}
            </p>
          ))}
        </Text>
        
        <Title level={5} className="food-name">
          Food Country:
        </Title>
        <Text className="food-ingredients">
          <TagFood foodtag={country} />
        </Text>
      </div>
    </Modal>
  );
};

export default ModalPoppup;
