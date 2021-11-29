<script>
	let views;
	fetch('https://mzf.goatcounter.com/counter/' + encodeURIComponent(location.pathname) + '.json')
		.then((resp) => resp.json())
		.then((res) => {
            console.log(res)
			views = res.count;
		})
</script>

<main>
    {views} views
</main>