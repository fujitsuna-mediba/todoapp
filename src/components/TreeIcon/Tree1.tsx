import { Tree1 as TreeImage } from './TreeList'
import { Box } from '@kuma-ui/core'

export const Tree1 = () => {
  return (
    <span>
      <img src={TreeImage} alt='logo' />
      <Box bgColor={'#593D23'} width={'auto'} height={5} mt={-5} />
    </span>
  )
}