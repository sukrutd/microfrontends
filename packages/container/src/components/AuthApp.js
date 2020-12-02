import { mount } from 'auth/AuthApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
	const ref = useRef(null);
	const history = useHistory();

	useEffect(() => {
		const { onParentNavigate } = mount(ref.current, {
			initialPath: history.location.pathname,

			onNavigate: ({ pathname: nextPathName }) => {
				const { pathname: currentPathName } = history.location;
				if (currentPathName !== nextPathName) {
					history.push(nextPathName);
				}
			}
		});

		history.listen(onParentNavigate);
	}, []);

	return <div ref={ref} />;
};
