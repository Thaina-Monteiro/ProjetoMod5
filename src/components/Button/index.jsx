import React from 'react'
import './Button.css';

function Button(props) {
	const {children, deletar, onClick, adicionar} = props
	return (
		<>
			<button type='button'
			className={`${deletar ? 'deletar' : ''} ${adicionar ? 'adicionar' : ''}`}
			onClick={onClick}>
				{children}
			</button>
		</>
	)
}

export default Button