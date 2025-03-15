import type React from "react"
import { Typography } from "antd"
import { FormOutlined, FileTextOutlined, CalendarOutlined } from "@ant-design/icons"
import "./HowItWork.css"

const { Title, Paragraph } = Typography

interface StepProps {
  number: number
  title: string
  description: string
  icon: React.ReactNode
  isLast?: boolean
}

const ProcessStep: React.FC<StepProps> = ({ number, title, description, icon, isLast = false }) => {
  return (
    <div className="process-step">
      <div className="step-timeline">
        <div className="step-number">{number}</div>
        {!isLast && <div className="step-line"></div>}
      </div>
      <div className="step-content">
        <div className="step-icon">{icon}</div>
        <div className="step-text">
          <Title level={4} className="step-title">
            {title}
          </Title>
          <Paragraph className="step-description">{description}</Paragraph>
        </div>
      </div>
    </div>
  )
}

const HowItWork: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Complete Health Profile",
      description:
        "Answer a few questions about your health history and preferences to help us find the most relevant trials for you.",
      icon: <FormOutlined />,
    },
    {
      number: 2,
      title: "Review Matches",
      description:
        "We'll show you clinical trials that match your profile, with detailed information about each trial's requirements and benefits.",
      icon: <FileTextOutlined />,
    },
    {
      number: 3,
      title: "Schedule Screening",
      description:
        "Once you find a trial you're interested in, we'll help you schedule a screening visit with the research team.",
      icon: <CalendarOutlined />,
    },
  ]

  return (
    <div className="how-it-works-container">
      <div className="how-it-works-header">
        <Title level={2} className="section-title">
          How It Works
        </Title>
        <Paragraph className="section-subtitle">Three simple steps to find your perfect clinical trial match</Paragraph>
      </div>

      <div className="process-steps">
        {steps.map((step, index) => (
          <ProcessStep
            key={step.number}
            number={step.number}
            title={step.title}
            description={step.description}
            icon={step.icon}
            isLast={index === steps.length - 1}
          />
        ))}
      </div>
    </div>
  )
}

export default HowItWork

