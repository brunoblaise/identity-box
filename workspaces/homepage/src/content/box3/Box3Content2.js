import styled from '@emotion/styled'
import { css } from '@emotion/css'
import { getImage } from 'src/assets'
import { TextBox } from 'src/components/ui-blocks'

const Wrapper = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  maxWidth: '800px'
})

const FlatBox = styled.div({
  display: 'flex',
  flexGrow: 1,
  zIndex: 20,
  flexBasis: 0,
  flexFlow: 'column',
  alignItems: 'center',
  padding: '30px',
  margin: '20px',
  '@media (max-width: 568px)': {
    margin: '0 0 10px 0'
  },
  minWidth: '300px',
  backgroundColor: '#164761'
})

const Image = styled.div(({ imageUrl }) => ({
  width: '100px',
  height: '100px',
  marginBottom: '30px',
  backgroundImage: `url(${imageUrl})`,
  backgroundSize: 'auto 100%',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat'
}))

const Box3Content2 = ({ data }) => (
  <Wrapper>
    <FlatBox>
      <Image imageUrl={getImage(data, 'IPFS')} />
      <TextBox
        className={css({
          width: '100%',
          textAlign: 'left',
          '@media (max-width: 1100px)': {
            margin: 0
          }
        })}
      >
        Identity Box works with IPFS - Interplanetary File System - a P2P
        hypermedia protocol to make the web faster, safer, and more open.
      </TextBox>
    </FlatBox>
    <FlatBox>
      <Image imageUrl={getImage(data, 'Fingerprint')} />
      <TextBox
        className={css({
          width: '100%',
          textAlign: 'left',
          '@media (max-width: 1100px)': {
            margin: 0
          }
        })}
      >
        Our Identity Box embraces the concept of Self-Sovereign Identity -
        digital identity that you own and fully control.
      </TextBox>
    </FlatBox>
    <FlatBox>
      <Image imageUrl={getImage(data, 'Mobile')} />
      <TextBox
        className={css({
          width: '100%',
          textAlign: 'left',
          '@media (max-width: 1100px)': {
            margin: 0
          }
        })}
      >
        With our Identity App for your mobile, you fully own and control your
        identity. Create multiple identities that can be used in various
        contexts to further increase your privacy.
      </TextBox>
    </FlatBox>
    <FlatBox>
      <Image imageUrl={getImage(data, 'DesktopDrive')} />
      <TextBox
        className={css({
          width: '100%',
          textAlign: 'left',
          '@media (max-width: 1100px)': {
            margin: 0
          }
        })}
      >
        Store your personal data on IPFS securely. Sell your own storage space
        to other users or affordably use the storage provided by others. Help
        building the distributed infrastructure of the future.
      </TextBox>
    </FlatBox>
  </Wrapper>
)

export { Box3Content2 }
