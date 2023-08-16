import { Box } from '@kuma-ui/core'
import { Tree3 as TreeImage } from './TreeList'

export const Tree3 = () => {
  return (
    <span>
      <img src={TreeImage} alt='logo' />
      <Box bgColor={'#593D23'} width={'auto'} height={5} mt={-5} />
    </span>
  )
}
