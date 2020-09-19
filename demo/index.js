import { useState, Button, App, Notebook, Label, Box, gjs, StackSidebar } from '../src/main'

const TestApp = App()

TestApp.addWindow(rootComponent,{
	height: 450,
	width: 450
})

function rootComponent(){
	return (
		<Box>
			<StackSidebar>
				<Box name="Notebook Example">
					<Notebook>
						<Page1/>
						<Page2/>
					</Notebook>
				</Box>
				<Box name="Page 2">
					<Label> This is page 2 </Label>
				</Box>
				<Box name="Test">
					<Test/>
				</Box>
			</StackSidebar>
		</Box>
	)
}

function Test(){
	
	let [counter,setCounter] = useState(0)
		
	return (
		<Box direction="vertical">
			<Label>Counter</Label>
			<Button 
				onClick={() => setCounter(counter.value + 1)}>
				Add: {counter}
			</Button>
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
				<Button onClick={() => print('Hello World!')}>Print Hello World</Button>
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