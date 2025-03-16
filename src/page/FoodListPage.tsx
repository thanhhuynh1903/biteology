import type React from "react";
import { useState, useEffect } from "react";
import { Typography, Row, Col, Card, Spin } from "antd";

import "./FoodListPage.css";
import HeaderComponent from "../components/HeaderComponent";
import FilterTabs from "../components/FilterTabs";
import ModalPoppup from "../components/ModalPoppup";
import FooterComponent from "../components/Footer";
const { Title, Text } = Typography;

interface FoodItem {
  id: number;
  name: string;
  ingredients: string;
  price: number;
  image: string;
  isNew?: boolean;
  isRecommended?: boolean;
}

const FoodListPage: React.FC = () => {
  const [selectedFood, setSelectedFood] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  const foodItems: FoodItem[] = [
    {
      id: 1,
      name: "MASALA-SPICED CHICKPEAS",
      ingredients: "Pork meat, Sauces, Potato",
      price: 14,
      image:
        "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/4/26/0/HE_kwon-Ground-Turkey-Enchilada-Stir-Fry-with-Couscous_s4x3.jpg.rend.hgtvcom.1280.1280.85.suffix/1461695054811.webp",
      isNew: true,
    },
    {
      id: 2,
      name: "KUNG PAO PASTRAMI",
      ingredients: "Cheese, Garlic, Potato, Pork",
      price: 12,
      image:
        "https://www.safetyandhealthmagazine.com/ext/resources/images/news/wellness/heart-healthy.jpg?t=1678225097&width=768",
      isNew: true,
    },
    {
      id: 3,
      name: "JALAPENO-MANGO SALSA",
      ingredients: "Mango, Rice, Jalapeno",
      price: 45,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOm7u5Y7wrwkvaz_9Qm2ZiMInD-69PUfV7AUjA1zAVLhSMMmGds7rNiv-4lEV5_3eWjMk&usqp=CAU",
    },
    {
      id: 4,
      name: "SPICY FRIED RICE & BACON",
      ingredients: "Bacon, Rice, Vegetables",
      price: 38,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd7TNkUzWI9qpC_KQykcOXyAn3E0lmzH9m4EJYsMmuVIVnL2XiCUqX3tgf_N5unTQtjjg&usqp=CAU",
    },
    {
      id: 5,
      name: "SHRIMP CURRY",
      ingredients: "Shrimp, Vegetables, Sauce",
      price: 55,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoFAU_hV5e7b2j8fug6qHBzONPHxCJrEZZnn5BfeDjYPkU1FNkKWwxcEyMDVq018fiOaE&usqp=CAU",
    },
    {
      id: 6,
      name: "CHICKEN DORO WAT",
      ingredients: "Chicken, Potato, Salad",
      price: 23,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzpLPdZ1UZxWJnDGpsJz6KJQrAbhnMYnJZvZjyiaTj-Yepa8CRpUaXp5fmRT0_YCxWewc&usqp=CAU",
    },
  ];

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setLoading(false);
    }, 800); // Adjust the delay as needed
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <Spin size="large" />
      </div>
    );
  }
  return (
    <>
      <HeaderComponent />
      <div className="food-list-container">
        <div className="header-section">
          <div className="hero-overlay"></div>
          <div className="header-content">
            <Title className="main-title">GALLERY & LIST COMBO</Title>
            <Text className="subtitle">
              We provide detailed information about the origin and benefits of
              each product, making it easy for you to choose foods that suit
              your personal needs and preferences.
            </Text>
          </div>
        </div>

        <div className="food-grid" style={{ marginTop: "2%" }}>
          <div style={{ marginBottom: "2%" }}>
            <FilterTabs />
          </div>
          <Row gutter={[24, 24]}>
            {foodItems.map((item) => {
              return (
                <Col xs={24} sm={12} md={6} key={item.id}>
                  <Card
                    className="food-card"
                    cover={
                      <div className="food-image-container">
                        <img
                          alt={item.name}
                          src={item.image || "/placeholder.svg"}
                          className="food-image"
                        />
                        {/* <div className="price-tag">${item.price}</div> */}
                        {/* {item.isNew && <div className="new-tag">NEW</div>}
                    {item.isRecommended && <div className="recommended-tag">Recommended</div>} */}
                      </div>
                    }
                    bordered={false}
                    onClick={() => {
                      setSelectedFood(item);
                      setIsModalOpen(true);
                    }}
                  >
                    <div style={{ marginTop: "1%" }}>
                      <Title level={5} className="food-name">
                        {item.name}
                      </Title>
                      <Text className="food-ingredients">
                        {item.ingredients}
                      </Text>
                    </div>
                    {/* <ModalPoppup foodid=""/> */}
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
      {selectedFood && (
        <ModalPoppup
          food={selectedFood}
          open={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedFood(null);
          }}
        />
      )}
      <FooterComponent/>
    </>
  );
};

export default FoodListPage;
