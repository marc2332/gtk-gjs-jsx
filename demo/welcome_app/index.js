import {  App, Label, gjs, Box, Button } from 'titan'

const myApp = App()

myApp.addWindow(rootComponent,{
	height: 450,
	width: 450,
	css: 'demo/welcome_app/test.css'
})

function rootComponent(){
	return (
		<Box direction="vertical" className="container">
			<Box centered={true}>
				<Label className="title">Welcome</Label>
			</Box>
			<Box centered={true}>
				<Button className="accept">Accept</Button>
			</Box>
		</Box>
	)
}


myApp.launch()