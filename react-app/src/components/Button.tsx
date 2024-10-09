import { ReactNode } from "react";

interface Props {
	children: ReactNode;
	color?: 'primary' | 'secondary' | 'danger' |'success'
	onClick: () => void;
	
}

const Button = ({children, onClick, color}: Props) => {
	return <div className={'btn btn-' + color} onClick={onClick}>
		{children}
	</div>
}

export default Button