type Props = {
	children: JSX.Element | JSX.Element[];
};

export const Container = ({ children }: Props) => {
	return (
		<div className="mx-auto max-w-5xl px-4 w-full min-h-screen flex flex-col items-center justify-center space-y-12">
			{children}
		</div>
	);
};
