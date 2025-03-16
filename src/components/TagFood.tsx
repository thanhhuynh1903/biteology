interface TagFoodProps {
  foodtag: string;
}

export default function TagFood({ foodtag }: TagFoodProps) {
  return (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <span
        style={{
          backgroundColor: "#E6F4EA",
          color: "#34B53A",
          padding: "4px 12px",
          borderRadius: "16px",
          fontSize: "14px",
          whiteSpace: "nowrap",
        }}
      >
        {foodtag}
      </span>
    </div>
  );
}
