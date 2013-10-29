/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-untitled' : '&#xf000;',
			'icon-add_securities' : '&#xe001;',
			'icon-sp_full' : '&#xe002;',
			'icon-transfer' : '&#xe003;',
			'icon-scales' : '&#x21;',
			'icon-pie_chart' : '&#x22;',
			'icon-minus' : '&#x23;',
			'icon-plus' : '&#x24;',
			'icon-Back' : '&#x27;',
			'icon-Next' : '&#x28;',
			'icon-down_triangle' : '&#x29;',
			'icon-download_arrow' : '&#x2a;',
			'icon-Delete' : '&#x2b;',
			'icon-account-settings-dark' : '&#x2c;',
			'icon-Refresh' : '&#x2d;',
			'icon-arrow-up' : '&#x2e;',
			'icon-arrow-down' : '&#x2f;',
			'icon-checkmark' : '&#x30;',
			'icon-checkmark-2' : '&#x31;',
			'icon-home' : '&#x32;',
			'icon-table' : '&#x33;',
			'icon-chart' : '&#x34;',
			'icon-remove' : '&#x36;',
			'icon-briefcase' : '&#x37;',
			'icon-pencil' : '&#x38;',
			'icon-disk' : '&#x39;',
			'icon-download' : '&#x3a;',
			'icon-outline_plus' : '&#x3b;',
			'icon-solid_plus' : '&#x3d;',
			'icon-chart-2' : '&#x3c;',
			'icon-spam' : '&#x3e;',
			'icon-info' : '&#x3f;',
			'icon-play' : '&#x35;',
			'icon-play-2' : '&#xe011;',
			'icon-excel_icon' : '&#xe010;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};