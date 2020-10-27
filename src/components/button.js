const Gtk = imports.gi.Gtk;

export default function Button({ className, onClick, children }) {
	return {
		widget(){
			const widget = Gtk.Button.new()
			widget.set_label(children.filter(child => typeof child === 'string').join(''))
			if(className){
				widget.get_style_context().add_class(className)
			}
			if(onClick){
				widget.connect('clicked', onClick)
			}
			return widget
		},
		children
	}
}