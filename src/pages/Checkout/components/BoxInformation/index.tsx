import { Icon } from "@phosphor-icons/react";
import { Title, Description, IconContainer, BoxInformationContainer} from './styles'
import { IconColors } from "../../../../components/BusinessPolicies/styles";

interface BoxInformationProps {
  Icon: Icon
  iconColor: IconColors
  title: string
  description: string
}

export function BoxInformation({ Icon, iconColor, title, description }: BoxInformationProps) {

  return (
    <BoxInformationContainer>
      <IconContainer iconcolor={iconColor}>
        <Icon size={22} />
      </IconContainer>
      <div>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </div>
    </BoxInformationContainer>

  )
}