import React, { useState } from "react";
import { Card, Upload, Button, Input, Typography, Space, List, Row, Col, Image } from "antd";
import { CloudUploadOutlined, DeleteOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import NutritionDisplay from "./NutrionList";

const { Dragger } = Upload;
const { TextArea } = Input;
const { Title, Text } = Typography;

const API_KEY = import.meta.env.VITE_API_SECRET_KEY

const FoodUpload: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [scanResult, setScanResult] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [userInput, setUserInput] = useState("");
    const [chatResponse, setChatResponse] = useState("");

    // Handle file selection
    const handleFileChange: UploadProps['onChange'] = (info) => {
        if (info.file.status === 'removed' || !info.fileList.length) {
            setFile(null);
            setPreviewUrl(null);
            return;
        }

        const file = info.fileList[0]?.originFileObj;
        if (file) {
            setFile(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    // Clear uploaded file
    const handleClear = () => {
        setFile(null);
        setPreviewUrl(null);
        setScanResult(null);
    };
    console.log("previewUrl", previewUrl)
    // Scan image using CalorieNinjas API
    const handleScan = async () => {
        if (!file) return;

        setLoading(true);
        setScanResult(null); // Clear previous results
        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await fetch('https://api.calorieninjas.com/v1/imagetextnutrition', {
                method: 'POST',
                headers: { 'X-Api-Key': `${API_KEY}` },
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
                { headers: { 'X-Api-Key': `${API_KEY}` } }
            );
            const data = await response.json();
            setChatResponse(JSON.stringify(data.items, null, 2));
        } catch (error) {
            console.error("Query failed:", error);
        } finally {
            setLoading(false);
        }
    };
    const NutrientCard = ({ title, value, unit, color }: any) => (
        <div style={{
            border: `1px solid ${color}20`,
            borderRadius: 8,
            padding: 12,
            backgroundColor: `${color}08`,
            textAlign: 'center'
        }}>
            <Text strong style={{ color, fontSize: 20 }}>
                {value}
                <Text style={{ fontSize: 14, marginLeft: 2 }}>{unit}</Text>
            </Text>
            <div style={{ marginTop: 4, color: '#595959' }}>{title}</div>
        </div>
    );

    return (
        <div style={{ width: "100%", overflow: "auto", padding: 20 }}>
            {/* Upload Section */}
            <div style={{ marginTop: 24 }}>
                <Title level={5} style={{ marginBottom: 16 }}>Scan Food Image</Title>

                <Dragger
                    name="image"
                    maxCount={1}
                    onChange={handleFileChange}
                    beforeUpload={() => false} // Prevent auto-upload
                    showUploadList={false}
                    style={{
                        marginTop: 16,
                        height: 280,
                        border: previewUrl ? 'none' : '1px dashed #d9d9d9',
                        background: previewUrl ? 'transparent' : '#fafafa'
                    }}
                >
                    {previewUrl ? (
                        <div style={{ position: 'relative', height: '100%' }}>
                            <Image
                                src={previewUrl}
                                alt="Food preview"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderRadius: 8
                                }}
                                preview={false}
                            />
                            <Button
                                icon={<DeleteOutlined />}
                                type="primary"
                                danger
                                style={{
                                    position: 'absolute',
                                    top: 10,
                                    right: 10,
                                    zIndex: 1
                                }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleClear();
                                }}
                            />
                        </div>
                    ) : (
                        <div style={{ padding: 40, textAlign: 'center' }}>
                            <p className="ant-upload-drag-icon">
                                <CloudUploadOutlined style={{ fontSize: 48, color: '#52c41a' }} />
                            </p>
                            <p className="ant-upload-text" style={{ fontSize: 16, marginBottom: 8 }}>
                                Click or drag food image here
                            </p>
                            <p className="ant-upload-hint" style={{ color: '#8c8c8c' }}>
                                Supports JPG, PNG, or images with food text
                            </p>
                        </div>
                    )}
                </Dragger>

                <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
                    <Button
                        type="primary"
                        size="large"
                        style={{ flex: 1, height: 48, backgroundColor: "#000", color: "#FFF" }}
                        onClick={handleScan}
                        loading={loading}
                        disabled={!file}
                    >
                        {scanResult ? 'Rescan Image' : 'Scan Image'}
                    </Button>

                </div>
            </div>

            {/* Display Scan Results */}
            {scanResult && (
                <Card
                    style={{
                        marginTop: 16,
                        borderRadius: 8,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        overflow: 'hidden'
                    }}
                >
                    <div style={{ padding: 16 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Title level={5} style={{ marginBottom: 0 }}>Nutrition Analysis</Title>
                        </div>

                        {scanResult.items?.length > 0 ? (
                            scanResult.items.map((item: any, index: number) => (
                                <div key={index} style={{ marginBottom: 32 }}>
                                    <div style={{
                                        backgroundColor: '#f0f2f5',
                                        padding: '12px 16px',
                                        borderRadius: 8,
                                        marginBottom: 16
                                    }}>
                                        <Title level={5} style={{ margin: 0, color: '#1890ff' }}>
                                            {item.name}
                                            <Text type="secondary" style={{ fontSize: 14, marginLeft: 8 }}>
                                                ({item.serving_size_g}g serving)
                                            </Text>
                                        </Title>
                                    </div>

                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
                                        {/* Macronutrients */}
                                        <div style={{ flex: 1, minWidth: 300 }}>
                                            <Text strong style={{ display: 'block', marginBottom: 8 }}>
                                                Macronutrients
                                            </Text>
                                            <div style={{
                                                display: 'grid',
                                                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                                                gap: 12
                                            }}>
                                                <NutrientCard
                                                    title="Calories"
                                                    value={item.calories}
                                                    unit="kcal"
                                                    color="#ff4d4f"
                                                />
                                                <NutrientCard
                                                    title="Protein"
                                                    value={item.protein_g}
                                                    unit="g"
                                                    color="#52c41a"
                                                />
                                                <NutrientCard
                                                    title="Carbs"
                                                    value={item.carbohydrates_total_g}
                                                    unit="g"
                                                    color="#1890ff"
                                                />
                                                <NutrientCard
                                                    title="Fat"
                                                    value={item.fat_total_g}
                                                    unit="g"
                                                    color="#faad14"
                                                />
                                            </div>
                                        </div>

                                        {/* Micronutrients */}
                                        <div style={{ flex: 1, minWidth: 300 }}>
                                            <Text strong style={{ display: 'block', marginBottom: 8 }}>
                                                Micronutrients
                                            </Text>
                                            <div style={{
                                                display: 'grid',
                                                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                                                gap: 12
                                            }}>
                                                <NutrientCard
                                                    title="Fiber"
                                                    value={item.fiber_g}
                                                    unit="g"
                                                    color="#13c2c2"
                                                />
                                                <NutrientCard
                                                    title="Sugar"
                                                    value={item.sugar_g}
                                                    unit="g"
                                                    color="#722ed1"
                                                />
                                                <NutrientCard
                                                    title="Sodium"
                                                    value={item.sodium_mg}
                                                    unit="mg"
                                                    color="#eb2f96"
                                                />
                                                <NutrientCard
                                                    title="Cholesterol"
                                                    value={item.cholesterol_mg}
                                                    unit="mg"
                                                    color="#f5222d"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Additional details */}
                                    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginTop: 15 }}>
                                        <div>
                                            <Text strong>Saturated Fat:</Text>
                                            <Text> {item.fat_saturated_g}g</Text>
                                        </div>
                                        <div>
                                            <Text strong>Potassium:</Text>
                                            <Text> {item.potassium_mg}mg</Text>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <Card style={{ marginTop: 16, textAlign: 'center' }}>
                                <div style={{ padding: 24 }}>
                                    <Image
                                        src="/empty-state.svg"
                                        preview={false}
                                        style={{ width: 120, marginBottom: 16 }}
                                    />
                                    <Title level={5} style={{ marginBottom: 8 }}>
                                        No Food Items Detected
                                    </Title>
                                    <Text type="secondary">
                                        Try a clearer image or different angle. Make sure food text is visible.
                                    </Text>
                                </div>
                            </Card>
                        )}
                    </div>
                </Card>
            )}


            {/* Food Query Section */}
            <div style={{ marginTop: 32 }}>
                <Title level={5} style={{ marginBottom: 16 }}>Ask Biteology about Food</Title>
                <Space.Compact style={{ width: "100%", marginTop: 8 }}>
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
                        disabled={!userInput.trim()}
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