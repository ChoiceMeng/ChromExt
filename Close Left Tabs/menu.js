// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function CloseLeft() {
	//alert("1");
	//window;
	//alert("2");
	//window = chrome.windows.getCurrent();
	//alert("3");
	
  chrome.windows.getCurrent(function(wnd){
  	//	alert("3");
		chrome.tabs.getAllInWindow(wnd.id, function(tabs){
		//alert("5");
		  tab = {};
			for(var i=0; i < tabs.length; i++)
			{
				//alert("6");
				if(tabs[i].pinned)
					continue;
				
				if(tabs[i].selected)
					if(tabs.length == 0)
						return;
					else
						break;
					
				tab[tabs[i].id] = tabs[i];
			}
			
			//alert(tab);
			for(var t in tab)
			{			
				//alert("8");
				chrome.tabs.remove(tab[t].id, function(){});
				//alert("9");
			}
		})
	});
 // alert("4");
}

chrome.contextMenus.create({"title": chrome.i18n.getMessage("menuShow"),"contexts":["all"],"onclick":CloseLeft}); 
