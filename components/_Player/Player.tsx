import {
	Player as VimePlayer,
	Hls,
	DefaultUi,
	Scrim,
	Icon,
	DefaultControls,
	PlaybackControl,
	Controls,
} from '@vime/react';
import '@vime/core/themes/default.css';
import styles from './Player.module.scss';

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

				<DefaultUi noControls>
					<DefaultControls hideOnMouseLeave activeDuration={2000} />
				</DefaultUi>
			</VimePlayer>
		</>
	);
};

export default Player;

/*
<Icon src="./playIcon.svg" label="Play" name="Play" />
		<Controls pin="center">
						<PlaybackControl
							playIcon="Play"
							className={styles.arrow}
							hideTooltip
							style={{ '--vm-control-scale': 1.7 }}
						/>
					</Controls>
					*/
