import { useState } from "react";
import { Button, Space } from "antd";

const categories = [
  { key: "all", label: "All" },
  { key: "heart", label: "Heart" },
  { key: "obesity", label: "Obesity" },
  { key: "diabetes", label: "Diabetes" },
  { key: "hypertension", label: "Hypertension" },
];

const FilterTabs: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  return (
    <Space style={{ flexWrap: "wrap" }}>
      {categories.map((category) => (
        <Button
          key={category.key}
          type={activeFilter === category.key ? "primary" : "default"}
          shape="round"
          size="large"
          onClick={() => setActiveFilter(category.key)}
          style={{
            backgroundColor: activeFilter === category.key ? "#4CAF50" : "#fff",
            color: activeFilter === category.key ? "#fff" : "#333",
            borderColor: activeFilter === category.key ? "#4CAF50" : "#ddd",
            fontWeight: activeFilter === category.key ? "bold" : "normal",
          }}
        >
          {category.label}
        </Button>
      ))}
    </Space>
  );
};

export default FilterTabs;
