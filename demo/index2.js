import {  App, Label, gjs, Box, Button } from '../src/main'

const myApp = App()

myApp.addWindow(rootComponent,{
	height: 450,
	width: 450,
	css: 'demo/test.css'
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