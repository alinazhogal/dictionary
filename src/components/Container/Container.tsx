type Props = {
	children: JSX.Element | JSX.Element[];
};

export const Container = ({ children }: Props) => {
	return (
		<div className="mx-auto max-w-7xl px-4 w-full h-screen flex flex-col items-center justify-center space-y-5">
			{children}
		</div>
	);
};
