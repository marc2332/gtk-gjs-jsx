const Gtk = imports.gi.Gtk;

export default function Button({ onClick, children }) {
	return {
		widget(){
			const widget = Gtk.Button.new()
			widget.set_label(children.filter(child => typeof child === 'string').join(''))
			
			if(onClick){
				widget.connect('clicked', onClick)
			}
			return widget
		},
		children
	}
}