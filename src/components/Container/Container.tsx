import styles from './Container.module.css';
type Props = {
	children: JSX.Element | JSX.Element[];
};

export const Container = ({ children }: Props) => {
	return <div className={styles.root}>{children}</div>;
};
