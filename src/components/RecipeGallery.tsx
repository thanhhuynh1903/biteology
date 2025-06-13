import { useState } from 'react';
import { Card, Col, Row, Tag, Typography, Divider, Button, Collapse } from 'antd';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Panel } = Collapse;

const RecipeGallery = ({ recipesData }: any) => {
    console.log(recipesData);
    const [activeKeys, setActiveKeys] = useState<string[]>([]);

    const recipes = recipesData;

    const handlePanelChange = (keys: string | string[]) => {
        setActiveKeys(Array.isArray(keys) ? keys : [keys]);
    };

    return (
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: '30px' }}>
                Mushroom Risotto Recipes
                <Text type="secondary" style={{ display: 'block', fontWeight: 'normal', fontSize: '16px' }}>
                    {recipes.length} delicious recipes found
                </Text>
            </Title>

            <Row gutter={[24, 24]}>
                {recipes.map((recipe :any, index: any) => (
                    <Col xs={24} sm={12} lg={8} key={index}>
                        <Card
                            hoverable
                            cover={
                                <div style={{
                                    height: '200px',
                                    backgroundColor: '#f0f2f5',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    overflow: 'hidden'
                                }}>
                                    <Title level={3} style={{ color: '#bfbfbf' }}>{recipe.title}</Title>
                                </div>
                            }
                            actions={[
                                <Text strong>{recipe.servings}</Text>,
                                <Button type="primary">Save Recipe</Button>
                            ]}
                        >
                            <Card.Meta
                                title={
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Text strong>{recipe.title}</Text>
                                        <Tag color="geekblue">Risotto</Tag>
                                    </div>
                                }
                            />

                            <Divider style={{ margin: '16px 0' }} />

                            <Collapse
                                bordered={false}
                                activeKey={activeKeys.includes(index.toString()) ? [index.toString()] : []}
                                onChange={() => handlePanelChange(
                                    activeKeys.includes(index.toString())
                                        ? activeKeys.filter(k => k !== index.toString())
                                        : [...activeKeys, index.toString()]
                                )}
                                expandIconPosition="right"
                                expandIcon={({ isActive }) =>
                                    isActive
                                        ? <CaretUpOutlined style={{ fontSize: '16px' }} />
                                        : <CaretDownOutlined style={{ fontSize: '16px' }} />
                                }
                            >
                                <Panel
                                    header={<Text strong>Ingredients</Text>}
                                    key={index.toString()}
                                    style={{ padding: 0 }}
                                >
                                    <ul style={{ paddingLeft: '24px', marginBottom: '0' }}>
                                        {recipe.ingredients.split('|').map((ingredient: any, i: any) => (
                                            <li key={i} style={{ marginBottom: '8px' }}>
                                                <Text>{ingredient.trim()}</Text>
                                            </li>
                                        ))}
                                    </ul>
                                </Panel>
                            </Collapse>

                            <div style={{ marginTop: '16px' }}>
                                <Text strong>Instructions:</Text>
                                <Text
                                    style={{
                                        display: 'block',
                                        marginTop: '8px',
                                        height: activeKeys.includes(index.toString()) ? 'auto' : '60px',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis'
                                    }}
                                >
                                    {recipe.instructions}
                                </Text>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default RecipeGallery;