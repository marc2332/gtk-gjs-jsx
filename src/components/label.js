const Gtk = imports.gi.Gtk;

export default function Label({ className, children }) {
	
	return {
		widget(){
			const widget = new Gtk.Label({
				label: children[0]
			})
			if(className){
				widget.get_style_context().add_class(className)
			}
			return widget
		},
		children
	}
}