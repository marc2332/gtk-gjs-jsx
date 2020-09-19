import { Button, App, NoteBook, NoteBookPage, Label, Box, gjs } from '../core'

const TestApp = App({
	id: 'test.app'
})

const mainWindow = TestApp.addWindow(rootComponent)

function rootComponent(){
	return (
		<Box>
			<NoteBook>
				<Page1/>
				<Page2/>
			</NoteBook>
		</Box>
	)
}

function Page1(){
	return (
		<Box>
			<Label>Page 1</Label>
			<Box direction="horizontal">
				<Label>This is page 1</Label>
				<Box direction="vertical">
					<Label>1</Label>
					<Label>2</Label>
				</Box>
				<Box direction="vertical">
					<Label>3</Label>
					<Label>4</Label>
				</Box>
				<Button onClick={() => print('Hello World!')}>Click me</Button>
			</Box>
		</Box>
	)
}

function Page2(){
	return (
		<Box>
			<Label>Page 2</Label>
			<Box direction="horizontal">
				<Label>This is page 2</Label>
				<Box direction="vertical">
					<Label>5</Label>
					<Label>6</Label>
				</Box>
				<Box direction="vertical">
					<Label>7</Label>
					<Label>8</Label>
				</Box>
			</Box>
		</Box>
	)
}

TestApp.launch()