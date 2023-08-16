import { Box } from '@kuma-ui/core'
import { Tree7 as TreeImage } from './TreeList'

export const Tree7 = () => {
  return (
    <span>
      <img src={TreeImage} alt='logo' />
      <Box bgColor={'#593D23'} width={'auto'} height={5} mt={-5} />
    </span>
  )
}
