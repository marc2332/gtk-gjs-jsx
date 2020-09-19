const Gtk = imports.gi.Gtk;

export default function Box({ name = '', direction = 'vertical' , children }){
	return {
		widget(){
			const widget = Gtk.Box.new(Gtk.Orientation[direction.toUpperCase()], 20)
			children.map(child => {
				widget.add(child.widget())
			})
			return widget
		},
		children,
		name
	}
}
