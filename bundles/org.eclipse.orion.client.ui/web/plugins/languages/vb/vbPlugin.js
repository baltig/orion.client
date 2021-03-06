/*******************************************************************************
 * @license
 * Copyright (c) 2014 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials are made 
 * available under the terms of the Eclipse Public License v1.0 
 * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution 
 * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html). 
 *
 * Contributors:
 *     IBM Corporation - initial API and implementation
 *******************************************************************************/
/*eslint-env browser, amd*/
define(['orion/plugin', 'orion/editor/stylers/text_x-vb/syntax', 'orion/editor/stylers/text_x-vbhtml/syntax'], function(PluginProvider, mVB, mVBHtml) {

	/**
	 * Plug-in headers
	 */
	var headers = {
		name: "Orion Visual Basic .NET Tool Support",
		version: "1.0",
		description: "This plugin provides Visual Basic .NET tools support for Orion."
	};
	var provider = new PluginProvider(headers);

	/**
	 * Register the Visual Basic .NET content types
	 */
	provider.registerServiceProvider("orion.core.contenttype", {}, {
		contentTypes: [
			{	id: "text/x-vb",
				"extends": "text/plain",
				name: "Visual Basic .NET",
				extension: ["vb"]
			}
		] 
	});
	provider.registerServiceProvider("orion.core.contenttype", {}, {
		contentTypes: [
			{	id: "text/x-vbhtml",
				"extends": "text/plain",
				name: "vbhtml",
				extension: ["vbhtml"]
			}
		] 
	});

	/**
	 * Register syntax styling
	 */
	provider.registerServiceProvider("orion.edit.highlighter", {}, mVB.grammars[mVB.grammars.length - 1]);
	provider.registerServiceProvider("orion.edit.highlighter", {}, mVBHtml.grammars[mVBHtml.grammars.length - 1]);

	provider.connect();
});
