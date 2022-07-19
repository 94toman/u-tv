import Image from 'next/image';
import { useState } from 'react';

const ImageWithFallback = (props) => {
	const { src, ...rest } = props;
	const [imgSrc, setImgSrc] = useState(src);

	return <Image {...rest} src={imgSrc} onError={() => setImgSrc(require('/public/placeholder.png'))} />;
};

export default ImageWithFallback;
