import { App, NoteBook, NoteBookPage, Label, Box, launch, gjs } from './core'

const TestApp = App(() => {
	return (
		<Box>
			<Label>Center</Label>
			<Box direction="horizontal">
				<Box direction="vertical">
					<Label>1</Label>
					<Label>2</Label>
				</Box>
				<Box direction="vertical">
					<Label>3</Label>
					<Label>4</Label>
				</Box>
			</Box>
			<NoteBook>
				<Box>
					<Label>Page 1</Label>
					<Label>This is page 1!</Label>
				</Box>
				<Box>
					<Label>Page 2</Label>
					<Label>This is page 2!</Label>
				</Box>
			</NoteBook>
		</Box>
	)
}) 

launch(TestApp)