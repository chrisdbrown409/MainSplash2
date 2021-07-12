	const splash = document.queryselector('.splash');

	document.addeventlistener('DomContentLoaded',(e)=>{
		setTimeout (()=>{
			splash.classlist.add('display-none');
		}, 2000),
	})
