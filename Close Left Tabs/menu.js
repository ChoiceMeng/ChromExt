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
				if(tabs[i].selected)
                    break;
					
				tab[tabs[i].id] = tabs[i];
			}
			
			//alert(tab);
			var idx = 0;
			for(var t in tab)
			{			
                if(idx == 0)
                {
                   if(tab[t].pinned && tab[t].selected)
                        return;
                }
                
                if(tab[t].pinned)
                    continue;
				//alert("8");
				
				chrome.tabs.remove(tab[t].id, function(){});
				idx++;
				//alert("9");
			}
		})
	});
 // alert("4");
}

chrome.contextMenus.create({"title": chrome.i18n.getMessage("menuShow"),"contexts":["all"],"onclick":CloseLeft}); 
