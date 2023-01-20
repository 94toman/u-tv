import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import styles from './NavLink.module.scss';

// https://jasonwatmore.com/post/2021/06/01/next-js-navlink-component-example-with-active-css-class

export { NavLink };

NavLink.propTypes = {
	href: PropTypes.string.isRequired,
	exact: PropTypes.bool,
};

NavLink.defaultProps = {
	exact: false,
};

function NavLink({ href, exact, children, ...props }) {
	const { pathname } = useRouter();
	const isActive = exact ? pathname === href : pathname.includes(href);

	if (isActive) {
		props.className = styles.active;
	}

	return (
		<Link href={href}>
			<a {...props}>{children}</a>
		</Link>
	);
}
