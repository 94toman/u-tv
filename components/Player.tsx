import { Player as VimePlayer, Hls, DefaultUi } from '@vime/react'
import '@vime/core/themes/default.css';

const Player = () => (
  <VimePlayer theme="dark">
    <Hls crossOrigin='' poster="https://www.zaktv.cz/epizody/4578.jpg">
      <source
        data-src="https://vysilani.zaktv.cz/zak/6702/video.m3u8"
        type="application/x-mpegURL"
      />
    </Hls>

    <DefaultUi />
  </VimePlayer>
)

export default Player