const Gtk = imports.gi.Gtk;

export default function Notebook({ children }) {
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