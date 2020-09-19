export Box from './components/box'
export Label from './components/label'
export Notebook from './components/notebook'
export Button from './components/button'
export StackSidebar from './components/stack_sidebar'

imports.gi.versions.Gtk = '3.0'
const Gtk = imports.gi.Gtk;

export function gjs(component,props){
	const children = [...arguments].slice(2, arguments.length+1)
	
	const args = props || {}
	
	args.children = children
		
	return component(args)
}

export const App = () =>{
	let app = new Gtk.Application({ application_id: 'org.gtk.ExampleApp' });
	let windows = []
	return {
		launch(){
			app.connect('activate', () => {
				windows.map(({ component, options }) => {
					let window = new Gtk.ApplicationWindow({ application: app });
					if(options.width && options.height){
						window.set_default_size(options.width, options.height)
					}
					window.add(component().widget())
					window.show_all()
				})
			})
			app.run([])
			return app
		},
		addWindow(rootComponent, options){
			windows.push({
				component: rootComponent,
				options
			})
		}
	}
}
