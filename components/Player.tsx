import { Player as VimePlayer, Hls, DefaultUi } from '@vime/react'
import '@vime/core/themes/default.css';

const Player = (poster, videoUrl) => (
  <VimePlayer theme="dark">
    <Hls crossOrigin='' poster={poster}>
      <source
        data-src={videoUrl}
        type="application/x-mpegURL"
      />
    </Hls>

    <DefaultUi />
  </VimePlayer>
)

export default Player