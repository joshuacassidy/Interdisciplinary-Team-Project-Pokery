import React from "react"
import Button from '../Button'
import Select from '../Select'
import Input from '../Input'

class ChangePassword extends React.Component {
  	constructor() {
		super()
		this.state = {
			password: '',
			passwordCheck: '',
		};
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	} 	
	handleSubmit(event) {
		event.preventDefault()
		if ((this.state.password.length > 0) && (this.state.password==this.state.passwordCheck)){
			console.log(this.state);
			window.alert("New password submitted")
		} else {
			window.alert("New password mismatch")
		}
	} 
	handleChange(event) {
		const name = event.target.name
		const value = event.target.value
		this.setState(prevState => {
			prevState[name] = value
			return prevState
		})
	}
	render() {
		return (	
			<form onSubmit={this.handleSubmit}>
			
				<Input
					name="password"
					value={this.state.password}
					label="New Password"          			
					onChange={this.handleChange}
				/>
				<Input
					name="passwordCheck"
					value={this.state.passwordCheck}
					label="Retype New Password"
					onChange={this.handleChange}
				/>
				<Button type="submit">Update</Button>
			</form>
		)
  	}
}

export default ChangePassword


