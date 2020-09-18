imports.gi.versions.Gtk = '3.0'
const Gtk = imports.gi.Gtk;

export function gjs(component,props){

	const children = [...arguments].slice(2, arguments.length+1)
	
	return {
		widget: component({ ...props, children }).widget,
		children
	}
}

export function render(component, where){
	where.add(component().widget)
}


export const App = callback =>{
	let app = new Gtk.Application({ application_id: 'org.gtk.ExampleApp' });
	
	
	return () => {
		app.connect('activate', () => {
			let win = new Gtk.ApplicationWindow({ application: app });
			let { widget: rootComponent } = callback()

			win.add(rootComponent)
			win.show_all()
		})
		return app
	}
}

export const Label = ({ children }) =>{
	const widget = new Gtk.Label({
		label: children[0]
	})
	return {
		widget,
		children
	}
}

export const NoteBook = ({ children }) => {
	const widget = Gtk.Notebook.new()
	children.map(({widget:parent, children }) => {
		parent.remove(children[0].widget)
		parent.remove(children[1].widget)
		widget.append_page(children[0].widget,children[1].widget)
	})
	return {
		widget,
		children
	}
	
}

export const Box = ({ direction = 'vertical' , children }) =>{
	
	const widget = Gtk.Box.new(Gtk.Orientation[direction.toUpperCase()], 20)
	children.map(child => {
		widget.add(child.widget)
	})
	
	return {
		widget,
		children
	}
}

export const launch = app => {
	const app_instance = app()
	
	
	app_instance.run([])
}