export Box from './components/box'
export Label from './components/label'
export Notebook from './components/notebook'
export Button from './components/button'
export StackSidebar from './components/stack_sidebar'
export Switch from './components/switch'

imports.gi.versions.Gtk = '3.0'
const Gtk = imports.gi.Gtk;

export function gjs(component,props){
	const children = [...arguments].slice(2, arguments.length+1)
	const args = props || {}
	const listeners = []
		
	args.children = children.map( child => {
		if(child.getValue){
			listeners.push(child.getValue)
			return child.toString()
		}
		return child
	})
	
	const comp = component(args)
	const returning = Object.assign({}, comp)
	
	returning.widget = () => {
		const widget = comp.widget()
		listeners.forEach(listener => {
			listener((newValue, oldValue) => {
				widget.set_label(widget.get_label().replace(oldValue,newValue))
			})
		});
		return widget
	}
  return returning
}

export const App = () =>{
	let app = new Gtk.Application({ application_id: 'org.gtk.ExampleApp' });
	let windows = []
	return {
		launch(){
			app.connect('activate', () => {
				windows.map(({ component, options, init }) => {
					const window = new Gtk.ApplicationWindow({ application: app })
					if(options.css){
						const css_provider = new Gtk.CssProvider()
						css_provider.load_from_path(options.css)
						Gtk.StyleContext.add_provider_for_screen(window.screen, css_provider, Gtk.STYLE_PROVIDER_PRIORITY_USER)
					}

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
				options,
			})
		}
	}
}

export const useState  = initialValue => {
	let useValue = initialValue
	let listenersValue = []
	let returning = useValue
	
	const trick = (v) => {
		Object.assign(returning,{
			value: v
		})
		
		return Object.assign(v,{
			value: v,
			getValue: listenValue
		})
		
	}
	
	const setValue = (v) => {
		const oldValue = useValue
		useValue = trick(v)
		listenersValue.forEach(c => c(useValue, oldValue))
	
		return useValue
	}
	
	const listenValue = (listen) => {
		listenersValue.push(listen)
		return useValue
	}
	
	useValue = trick(useValue)
	returning = useValue
	
	return [
		returning,
		setValue
	]
}

