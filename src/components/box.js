const Gtk = imports.gi.Gtk;

export default function Box({ className, centered = false, name = '', direction = 'vertical' , children, scrollable = false }){
	return {
		widget(){
			
			const widget = Gtk.Box.new(Gtk.Orientation[direction.toUpperCase()], 20)
			
			let comp = widget

			
			
			if(className){
				widget.get_style_context().add_class(className)
			}
			if(centered){
				//Can only center one widget at once
				widget.set_center_widget(children[0].widget())
			}else{
				children.map(child => {
					widget.add(child.widget()) 
				})
			}
		
			return comp
		},
		children,
		name
	}
}
