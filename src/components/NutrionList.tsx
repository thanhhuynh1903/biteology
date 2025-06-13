import { Card, Row, Col, Typography, Tag, Divider, Progress } from 'antd';
import { FireOutlined, ProductFilled, HomeFilled, CarOutlined } from '@ant-design/icons';
const { Title, Text } = Typography;

const NutritionDisplay = ({ nutritionDataList }: any) => {

    if (!nutritionDataList || !Array.isArray(nutritionDataList) || nutritionDataList.length === 0) {
        return (
            <Card style={{ maxWidth: 600, margin: '20px auto', textAlign: 'center' }}>
                <Title level={4}>No nutrition data available</Title>
                <Text type="secondary">Please provide valid nutrition data</Text>
            </Card>
        );
    }

    const nutritionData = nutritionDataList[0];

    const safeNutritionData = {
        name: nutritionData?.name || 'Unknown Food',
        serving_size_g: nutritionData?.serving_size_g || 0,
        calories: nutritionData?.calories || 0,
        protein_g: nutritionData?.protein_g || 0,
        fat_total_g: nutritionData?.fat_total_g || 0,
        carbohydrates_total_g: nutritionData?.carbohydrates_total_g || 0,
        fat_saturated_g: nutritionData?.fat_saturated_g || 0,
        fiber_g: nutritionData?.fiber_g || 0,
        sodium_mg: nutritionData?.sodium_mg || 0,
        sugar_g: nutritionData?.sugar_g || 0,
        potassium_mg: nutritionData?.potassium_mg || 0,
        cholesterol_mg: nutritionData?.cholesterol_mg || 0,
    };

    const totalMacros = safeNutritionData.fat_total_g + safeNutritionData.protein_g + safeNutritionData.carbohydrates_total_g;

    const fatPercent = totalMacros > 0 ? Math.round((safeNutritionData.fat_total_g / totalMacros) * 100) : 0;
    const proteinPercent = totalMacros > 0 ? Math.round((safeNutritionData.protein_g / totalMacros) * 100) : 0;
    const carbsPercent = totalMacros > 0 ? Math.round((safeNutritionData.carbohydrates_total_g / totalMacros) * 100) : 0;

    return (
        <Card
            title={
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Title level={3} style={{ margin: 0 }}>{safeNutritionData.name}</Title>
                    <Tag color="geekblue" style={{ marginLeft: 12 }}>
                        {safeNutritionData.serving_size_g}g serving
                    </Tag>
                </div>
            }
            style={{ maxWidth: 600, margin: '20px auto', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
        >
            {/* Calorie Highlight */}
            <div style={{ textAlign: 'center', marginBottom: 24 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <FireOutlined style={{ fontSize: 32, color: '#ff6b6b', marginRight: 8 }} />
                    <Title level={1} style={{ margin: 0, color: '#1890ff' }}>
                        {safeNutritionData.calories}
                        <Text style={{ fontSize: 18, fontWeight: 'normal' }}> kcal</Text>
                    </Title>
                </div>
                <Text type="secondary">Calories per serving</Text>
            </div>

            {/* Macronutrients Progress */}
            <div style={{ marginBottom: 24 }}>
                <Title level={5} style={{ marginBottom: 16 }}>Macronutrient Distribution</Title>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <div>
                        <ProductFilled style={{ color: '#52c41a', marginRight: 8 }} />
                        <Text strong>Protein: {safeNutritionData.protein_g}g</Text>
                        <Tag color="green" style={{ marginLeft: 8 }}>{proteinPercent}%</Tag>
                    </div>
                    <div>
                        <HomeFilled style={{ color: '#faad14', marginRight: 8 }} />
                        <Text strong>Fat: {safeNutritionData.fat_total_g}g</Text>
                        <Tag color="orange" style={{ marginLeft: 8 }}>{fatPercent}%</Tag>
                    </div>
                    <div>
                        <CarOutlined style={{ color: '#1890ff', marginRight: 8 }} />
                        <Text strong>Carbs: {safeNutritionData.carbohydrates_total_g}g</Text>
                        <Tag color="blue" style={{ marginLeft: 8 }}>{carbsPercent}%</Tag>
                    </div>
                </div>
                {/* Fix: Only show progress bar if there are macros */}
                {totalMacros > 0 && (
                    <Progress
                        percent={proteinPercent + fatPercent + carbsPercent}
                        success={{ percent: proteinPercent }}
                        strokeColor={{
                            '0%': '#52c41a',
                            [`${proteinPercent}%`]: '#faad14',
                            '100%': '#1890ff'
                        }}
                        showInfo={false}
                    />
                )}
            </div>

            <Divider style={{ margin: '16px 0' }} />

            {/* Detailed Nutrition Facts */}
            <Title level={5} style={{ marginBottom: 16 }}>Nutrition Details</Title>
            <Row gutter={16}>
                <Col span={12}>
                    <div style={{ marginBottom: 12 }}>
                        <Text strong>Saturated Fat:</Text>
                        <Text style={{ float: 'right' }}>{safeNutritionData.fat_saturated_g}g</Text>
                    </div>
                    <div style={{ marginBottom: 12 }}>
                        <Text strong>Fiber:</Text>
                        <Text style={{ float: 'right' }}>{safeNutritionData.fiber_g}g</Text>
                    </div>
                    <div style={{ marginBottom: 12 }}>
                        <Text strong>Sodium:</Text>
                        <Text style={{ float: 'right' }}>{safeNutritionData.sodium_mg}mg</Text>
                    </div>
                </Col>
                <Col span={12}>
                    <div style={{ marginBottom: 12 }}>
                        <Text strong>Sugar:</Text>
                        <Text style={{ float: 'right' }}>{safeNutritionData.sugar_g}g</Text>
                    </div>
                    <div style={{ marginBottom: 12 }}>
                        <Text strong>Potassium:</Text>
                        <Text style={{ float: 'right' }}>{safeNutritionData.potassium_mg}mg</Text>
                    </div>
                    <div style={{ marginBottom: 12 }}>
                        <Text strong>Cholesterol:</Text>
                        <Text style={{ float: 'right' }}>{safeNutritionData.cholesterol_mg}mg</Text>
                    </div>
                </Col>
            </Row>

            <Divider style={{ margin: '16px 0' }} />

            {/* Health Indicators */}
            <Title level={5} style={{ marginBottom: 16 }}>Health Indicators</Title>
            <Row gutter={16}>
                <Col span={8} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 24, fontWeight: 'bold', color: safeNutritionData.fat_saturated_g < 5 ? '#52c41a' : '#faad14' }}>
                        {safeNutritionData.fat_saturated_g}g
                    </div>
                    <Text type="secondary">Sat Fat</Text>
                    <Text style={{ display: 'block' }} type="secondary">
                        ({safeNutritionData.fat_saturated_g < 5 ? 'Low' : 'Moderate'})
                    </Text>
                </Col>
                <Col span={8} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 24, fontWeight: 'bold', color: safeNutritionData.sodium_mg < 200 ? '#52c41a' : '#ff4d4f' }}>
                        {safeNutritionData.sodium_mg}mg
                    </div>
                    <Text type="secondary">Sodium</Text>
                    <Text style={{ display: 'block' }} type="secondary">
                        ({safeNutritionData.sodium_mg < 200 ? 'Very Low' : 'High'})
                    </Text>
                </Col>
                <Col span={8} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 24, fontWeight: 'bold', color: safeNutritionData.sugar_g < 1 ? '#52c41a' : '#ff4d4f' }}>
                        {safeNutritionData.sugar_g}g
                    </div>
                    <Text type="secondary">Sugar</Text>
                    <Text style={{ display: 'block' }} type="secondary">
                        ({safeNutritionData.sugar_g < 1 ? 'Zero' : 'Present'})
                    </Text>
                </Col>
            </Row>
        </Card>
    );
};

export default NutritionDisplay;