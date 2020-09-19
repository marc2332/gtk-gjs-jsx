const Gtk = imports.gi.Gtk;

export default function Label({ children }) {
	
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