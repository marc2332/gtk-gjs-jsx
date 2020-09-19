const Gtk = imports.gi.Gtk;

export default function Switch({ onSwitched, children }) {
	return {
		widget(){
			const widget = Gtk.Switch.new()

			if(onSwitched){
				widget.connect('state-set', onSwitched)
			}
			return widget
		},
		children
	}
}