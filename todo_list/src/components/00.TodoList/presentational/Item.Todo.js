import React from 'react'
import styled from 'styled-components'
import Checkbox from '../../common/presentational/Input.Checkbox'
import Remove from '../../common/presentational/Button.Remove'

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	padding: 8px 0;
`
const Left = styled.div`
	display: flex;
`
const Text = styled.span`
	display: flex;
	align-items: center;
	font-size: 16px;
	color: #4d4d4d;
	margin-left: 7px;
`

const TodoItem = ({ value, checkItem, removeItem }) => (
	<Wrapper>
		<Left>
			<Checkbox id={value.id} checked={value.isChecked} onClick={checkItem} />
			<Text>{value.name}</Text>
		</Left>
		<Remove id={value.id} onClick={removeItem} />
	</Wrapper>
)

export default TodoItem