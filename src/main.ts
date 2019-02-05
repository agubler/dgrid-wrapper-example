import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import renderer from '@dojo/framework/widget-core/vdom';
import { v, w } from '@dojo/framework/widget-core/d';
import DgridWrapper, { SelectionType } from '@dojo/interop/dgrid/DgridWrapper';

class App extends WidgetBase {

	private _data = [
		{ first: 'Bob', last: 'Thomson', id: 1, hasChildren: true },
		{ first: 'Bob2', last: 'Thomson2', id: 2, hasChildren: true },
		{ first: 'Bob3', last: 'Thomson3', id: 3, hasChildren: true },
		{ first: 'Extra', last: 'Person', id: 4, hasChildren: false, parent: 1 },
		{ first: 'Extra', last: 'Person', id: 5, hasChildren: false, parent: 1 },
		{ first: 'Extra', last: 'Person', id: 6, hasChildren: false, parent: 1 },
		{ first: 'Extra', last: 'Person', id: 7, hasChildren: false, parent: 2 },
		{ first: 'Extra', last: 'Person', id: 8, hasChildren: false, parent: 2 },
		{ first: 'Extra', last: 'Person', id: 9, hasChildren: false, parent: 3 },
		{ first: 'Extra', last: 'Person', id: 10, hasChildren: false, parent: 3 },
		{ first: 'Extra', last: 'Person', id: 11, hasChildren: false, parent: 3 },
		{ first: 'Extra', last: 'Person', id: 12, hasChildren: false, parent: 3 }
	];

	private _columns = [
		{ field: 'first', label: 'First', renderExpando: true },
		{ field: 'last', label: 'Last' }
	];

	render() {
		return v('div', [
			w(DgridWrapper, {
				features: {
					tree: true,
					columnResizer: true,
					selection: SelectionType.row
				},
				data: this._data,
				columns: this._columns
			})
		]);
	}
}

const r = renderer(() => w(App, {}));
r.mount();
