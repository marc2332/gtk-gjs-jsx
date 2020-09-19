const Gtk = imports.gi.Gtk;

export default function Button({ onClick, children }) {
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