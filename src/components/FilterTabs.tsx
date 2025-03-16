import React from "react";
import { Button, Space } from "antd";

interface FilterTabsProps {
  selectedCountry: string;
  onSelectCountry: (country: string) => void;
}

const categories = [
  { key: "Vietnamese", label: "Vietnamese" },
  { key: "French", label: "French" },
  { key: "German", label: "German" },
  { key: "Greek", label: "Greek" },
  { key: "American", label: "American" },
  { key: "Japanese", label: "Japanese" },
  { key: "Korean", label: "Korean" },
];

const FilterTabs: React.FC<FilterTabsProps> = ({
  selectedCountry,
  onSelectCountry,
}) => {
  return (
    <Space style={{ flexWrap: "wrap" }}>
      {categories.map((category) => (
        <Button
          key={category.key}
          type={selectedCountry === category.key ? "primary" : "default"}
          shape="round"
          size="large"
          onClick={() => onSelectCountry(category.key)}
          style={{
            backgroundColor:
              selectedCountry === category.key ? "#4CAF50" : "#fff",
            color: selectedCountry === category.key ? "#fff" : "#333",
            borderColor:
              selectedCountry === category.key ? "#4CAF50" : "#ddd",
            fontWeight:
              selectedCountry === category.key ? "bold" : "normal",
          }}
        >
          {category.label}
        </Button>
      ))}
    </Space>
  );
};

export default FilterTabs;
