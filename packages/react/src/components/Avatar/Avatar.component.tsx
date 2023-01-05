import { AvatarContainer, AvatarFallback, AvatarImage } from './Avatar.styles'
import { User } from 'phosphor-react'
import { AvatarProps } from './Avatar.types'

export const Avatar: React.FC<AvatarProps> = (props) => {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />
      <AvatarFallback delayMs={600}>
        <User size={24} />
      </AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'
