imports.gi.versions.Gtk = '3.0'
const Gtk = imports.gi.Gtk;

export function gjs(component,props){
	const children = [...arguments].slice(2, arguments.length+1)
	
	const args = props || {}
	
	args.children = children
	
	const { children: newChildren , widget } = component(args)
	
	return {
		widget,
		children: newChildren
	}
}

export const App = callback =>{
	let app = new Gtk.Application({ application_id: 'org.gtk.ExampleApp' });
	let windows = []
	return {
		launch(){
			app.connect('activate', () => {
				windows.map( rootComponent => {
					let window = new Gtk.ApplicationWindow({ application: app });
					window.add(rootComponent().widget())
					window.show_all()
				})
			})
			app.run([])
			return app
		},
		addWindow(rootComponent){
			windows.push(rootComponent)
		}
	}
}

export const Label = ({ children }) =>{
	
	return {
		widget(){
			const widget = new Gtk.Label({
				label: children[0]
			})
			return widget
		},
		children
	}
}

export const NoteBook = ({ children }) => {
	return {
		widget(){
			const widget = Gtk.Notebook.new()
			children.map((a) => {
				widget.append_page(a.children[1].widget(),a.children[0].widget())
			})
			return widget
		},
		children
	}
}

export const Button = ({ children, onClick }) => {
	return {
		widget(){
			const buttonContent = children[0]
			
			const widget = Gtk.Button.new()
			
			if(typeof buttonContent == 'string'){
				widget.set_label(buttonContent)
			}else{
				widget.add(buttonContent)
			}
			if(onClick){
				widget.connect('clicked',onClick)
			}
			return widget
		},
		children
	}
}

export const Box = ({ direction = 'vertical' , children }) =>{
	return {
		widget(){
			const widget = Gtk.Box.new(Gtk.Orientation[direction.toUpperCase()], 20)
			children.map(child => {
				widget.add(child.widget())
			})
			return widget
		},
		children
	}
}
