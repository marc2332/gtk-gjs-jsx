const Gtk = imports.gi.Gtk;

export default function StackSidebar({ children }) {
	return {
		widget(){

			const grid = Gtk.Grid.new()
			const sidebar = Gtk.StackSidebar.new()
			const stack = Gtk.Stack.new()

			stack.set_hexpand(true)
			stack.set_vexpand(true)

			grid.attach(stack, 1, 0, 1, 1)

			children.map(({ children, name }) => {
				stack.add_titled(
					children[0].widget(),
					name,
					name
				)
			})

			sidebar.set_stack(stack)
			
			grid.attach(sidebar, 0, 0, 1, 1)

			return grid
		},
		children
	}
}