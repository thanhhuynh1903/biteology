import React, { useState } from "react";
import { Card, Upload, Button, Input, Typography, Space, List } from "antd";
import { CloudUploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import NutritionDisplay from "./NutrionList";
const { Dragger } = Upload;
const { TextArea } = Input;
const { Title, Text } = Typography;

const API_KEY = "W1jpJH1s+730Hsgp+jw3Jw==sCRXwOPw3xlfsNNT";

const FoodUpload: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [scanResult, setScanResult] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [userInput, setUserInput] = useState("");
    const [chatResponse, setChatResponse] = useState("");

    const statusCards = [ /* ...unchanged... */];

    // Handle file selection
    const handleFileChange: UploadProps['onChange'] = (info) => {
        if (info.file.status === 'removed') {
            setFile(null);
            return;
        }
        const file = info.fileList[0]?.originFileObj;
        setFile(file || null);
    };

    // Scan image using CalorieNinjas API
    const handleScan = async () => {
        if (!file) return;

        setLoading(true);
        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await fetch('https://api.calorieninjas.com/v1/imagetextnutrition', {
                method: 'POST',
                headers: { 'X-Api-Key': API_KEY },
                body: formData,
            });
            const data = await response.json();
            setScanResult(data);
        } catch (error) {
            console.error("Scan failed:", error);
        } finally {
            setLoading(false);
        }
    };

    // Get food nutrition data
    const handleFoodQuery = async () => {
        if (!userInput.trim()) return;

        setLoading(true);
        try {
            const response = await fetch(
                `https://api.calorieninjas.com/v1/nutrition?query=${encodeURIComponent(userInput)}`,
                { headers: { 'X-Api-Key': API_KEY } }
            );
            const data = await response.json();
            setChatResponse(JSON.stringify(data.items, null, 2));
        } catch (error) {
            console.error("Query failed:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ width: "100%", overflow: "auto", padding: 20 }}>
            {/* Upload Section */}
            <div style={{ marginTop: 24 }}>
                <Title level={5}>Scan Food Image</Title>
                <Dragger
                    name="image"
                    maxCount={1}
                    onChange={handleFileChange}
                    beforeUpload={() => false} // Prevent auto-upload
                    showUploadList={true}
                    style={{ marginTop: 16, height: 280 }}
                >
                    <p className="ant-upload-drag-icon">
                        <CloudUploadOutlined style={{ fontSize: 48 }} />
                    </p>
                    <p className="ant-upload-text">Upload Images with food text</p>
                </Dragger>

                <Button
                    type="primary"
                    block
                    size="large"
                    style={{ marginTop: 16, height: 48 }}
                    onClick={handleScan}
                    loading={loading}
                    disabled={!file}
                >
                    Scan Images
                </Button>
            </div>

            {/* Display Scan Results */}
            {scanResult && (
                <div style={{ marginTop: 24 }}>
                    <Title level={5}>Nutrition Analysis</Title>
                    <Card>
                        {scanResult.items?.length > 0 ? (
                            <List
                                dataSource={scanResult.items}
                                renderItem={(item: any) => (
                                    <List.Item>
                                        <Space direction="vertical">
                                            <Text strong>{item.name}</Text>
                                            <Text>Calories: {item.calories}</Text>
                                            <Text>Protein: {item.protein_g}g</Text>
                                            <Text>Carbs: {item.carbohydrates_total_g}g</Text>
                                            <Text>Fat: {item.fat_total_g}g</Text>
                                        </Space>
                                    </List.Item>
                                )}
                            />
                        ) : (
                            <Text>No food items detected</Text>
                        )}
                    </Card>
                </div>
            )}

            {/* Chat Section */}
            <div style={{ marginTop: 24 }}>
                <Title level={5}>Ask Biteology</Title>
                <Space.Compact style={{ width: "100%", marginTop: 16 }}>
                    <TextArea
                        placeholder="Describe a food item (e.g., '200g chicken breast')"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        style={{ height: 120 }}
                    />
                    <Button
                        type="primary"
                        style={{ height: 120 }}
                        onClick={handleFoodQuery}
                        loading={loading}
                    >
                        Analyze
                    </Button>
                </Space.Compact>

                {chatResponse && (
                    <Card style={{ marginTop: 16 }}>
                        <NutritionDisplay nutritionDataList={JSON.parse(chatResponse)} />
                    </Card>
                )}
            </div>
        </div>
    );
};

export default FoodUpload;