import { Switch, useState, Button, App, Notebook, Label, Box, gjs, StackSidebar, render } from 'titan'
const { Gio, GLib } = imports.gi
import path from 'path'

const TestApp = App()

TestApp.addWindow(rootComponent,{
	height: 450,
	width: 450
})

function rootComponent(){

	const appDir = '/usr/share/applications'

	async function mounted(widget){
		let apps = await listDir(appDir)
		apps = apps.filter(app => app.includes('.desktop'))
		apps.map(async (app) => {
			readFile(path.join(appDir, app)).then(appContent => {
				const props = parseDesktop(appContent)
				render((
					<Button>
						{props.Name}
					</Button>
				), widget)
			})
		})
	}

	return (
		<Box>
			<Label>Installed apps:</Label>
			<Box mounted={mounted}/>
		</Box>
	)
}

function parseDesktop(content){
	const props = content.split('\n')
	let result = {}

	props.forEach(prop => {
		const values = prop.split('=')
		result[values[0]] = values[1]
	})
	return result
}

function readFile(path){
	return new Promise((res, reject) => {
		let file = Gio.File.new_for_path(path)
		let [success, contents] = file.load_contents(null);

		if(success) res(contents.toString())
		if(!success) reject(success)
	})
}

function listDir(path){
	return new Promise((res) => {
		const folder = Gio.File.new_for_path(path)
		const folderEnumerator = folder.enumerate_children('', 0, null)
		let finished = false
		let result = []
		while(finished === false){
			const currentFileInfo = folderEnumerator.next_file(null)
			if(!currentFileInfo) {
				finished = true
				res(result.filter(Boolean))
				return
			}else if(currentFileInfo){
				result.push(currentFileInfo.get_name())
			}
		}
	})
}


TestApp.launch()