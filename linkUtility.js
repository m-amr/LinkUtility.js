var LinkUtility=function()
{
	//properties
	var self=this;
	var _className=null;
	var _linkAppliedFunction=null;
	var _target=null;
	
	//methodes
	/*
	@function setClassName   a setter for _className property
	@params {String}className 
	*/
	this.setClassName=function(className)
	{		
		_className=className;
	};
	
	/*
	@function setLinkAppliedCallBack  a setter for _linkAppliedFunction property
	@params {Function}callBackFunction
	*/
	this.setLinkAppliedCallBack=function(callBackFunction)
	{
		_linkAppliedFunction=callBackFunction;
	};
	
	/*
	@function setTargetBlank set the value of _target property to "_blank"
	*/
	this.setTargetBlank=function()
	{
		_target="_blank";
	};

	/*
	@function apply replace urls in dom elements with clickable a tag
	@params {DomEelement or DomElementsCollection} element
	*/
	this.apply=function(element)
	{
		if(element)
		{	//element is not an array
			if(element.length === undefined)
			{
				this.replaceUrlInDomElementTextWithLink(element);
			}
			else
			{	//element is an array
				for(var i=0, length=element.length; i<length; i++)
					this.replaceUrlInDomElementTextWithLink(element[i]);
			}
		}
		
	};

	/*
	@function replaceUrlInDomElementTextWithLink replace urls in dom element with clickable a tag
	@params {DomEelement} element
	*/
	this.replaceUrlInDomElementTextWithLink=function(element)
	{
		var innerText=element.innerText;
		innerText =this.replaceUrlWithLink(innerText);
		element.innerHTML=innerText;
	};

	/*
	@function replaceUrlWithLink replace urls in string with clickable a tag
	@params {String} text
	@return {String} text
	*/
	this.replaceUrlWithLink=function(text)
	{
		text=text.replace(/((http|https|ftp)\:\/\/|\bw{3}\.)[a-z0-9\-\.]+\.[a-z]{2,3}(:[a-z0-9]*)?\/?([a-z\u00C0-\u017F0-9\-\._\?\,\'\/\\\+&amp;%\$#\=~])*/gi, function(captured) {
			//create link
			var link=self.createLink(captured);
			
			if(_linkAppliedFunction!==null)
				_linkAppliedFunction(link);
			
			return link.outerHTML;
		});
		return text;
	};
	/*
	@function createLink create an a tag element, configure it's properties and return it
	@params {String} url is a string that contain a valid url
	@return {DomeElement} link 
	*/
	this.createLink=function(url)
	{

		var link=document.createElement("a");
		//handle url that start with www and don't have https
		if(url.toLowerCase().indexOf("www.")===0)
			url="https://"+url;
		
		link.setAttribute("href", url);
		
		if(_className !==null)
			link.setAttribute("class", _className);

		if(_target !==null)
			link.setAttribute("target", _target);
		
		link.innerText=url;
		
		return link;
	};

}
