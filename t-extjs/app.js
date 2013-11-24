/**
 * app.js
 * @authors Your Name (you@example.org)
 * @date    2013-11-05 17:32:15
 * @version $Id$
 */

Ext.application({
	name: 'HelloExt',
	launch: function() {
		Ext.create('Ext.container.Viewport', {
			layout: 'fit',
			items: [{
				title: 'Start Ext',
				html: 'Hello! Welcome to Ext JS.'
			}]
		});
	}
});