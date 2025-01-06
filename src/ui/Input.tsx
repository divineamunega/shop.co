import styled from "styled-components";

type InputType = {
	type: string;
};

const StyledInput = styled.input``;

const Input = ({ type }: InputType) => {
	return <StyledInput type={type} />;
};

export default Input;
