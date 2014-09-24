<h1>LinkUtiltiy</h1>
<p>
  Is a Javascript library that used to convert urls in HTML Dom Elements to clickable links by replacing text url with an a tag without using a JQuery but it can be used with jquery.
</p>
<h3>Example</h3>
<p>
 &lt;p class="c2"&gt; 
 This is a test text that contain a link www.google.com
 &lt;/p&gt; 

  <h2>Step 1 create a LinkUtility object </h2>
  <p>
  var link=new LinkUtility();<br/>
  </p>
  
  <h2>Step 2 set target and class attributes</h2>
  <p>  
    link.setTargetBlank();   //target="_blank" <br/><br/>
  
    link.setClassName("mainLink");  // class="mainLink" <br/><br/>
   
    link.setLinkAppliedCallBack(function(a){<br/>
		console.log(a.href);<br/>
    }); //set a callback function that is called after each link is created<br/>
    
  </p>
  <h2>Step 3 get HTML Dom element and call apply function </h2>
  <p>
  var element=document.getElementsByClassName("c1");<br/>
  link.apply(element);<br/>
  </p>
</p>
