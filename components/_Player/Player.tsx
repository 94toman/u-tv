import { Player as VimePlayer, Hls, DefaultUi } from '@vime/react';
import '@vime/core/themes/default.css';

const Player = ({ video }) => {
	return (
		<>
			<VimePlayer theme="dark">
				<Hls crossOrigin="" poster={`https://www.zaktv.cz/epizody/${video.id}.jpg`}>
					<source
						data-src={`https://vysilani.zaktv.cz/zak/${video.id}/video.m3u8`}
						type="application/x-mpegURL"
					/>
				</Hls>

				<DefaultUi />
			</VimePlayer>
		</>
	);
};

export default Player;
