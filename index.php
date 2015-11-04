<html>
<head>
	<title>GoldstarCine Apps</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="default.css">
</head>
<body>
	<div style="margin:12px 0 0 12px">
		<div style="margin:0 0 12px 0">GOLDSTAR APPS FOLDER</div>
		<?php
			foreach ( glob ('./*', GLOB_ONLYDIR) as $dir )
			{
				if ( file_exists ($dir.'/package.json') )
				{
					$package = json_decode ( file_get_contents ($dir.'/package.json'), true );
					echo '
						<div class="menu-item">
							<div class="item" link="/'.basename ($dir).'">' . basename ($dir) . '</div>
							<div>' . $package['description'] . '</div>
						</div>
					';
				}
			}
		?>
	</div>
	<script type="text/javascript">
		var items = document.getElementsByClassName('item');

		for (var i=0; i<items.length; i++) {
			items[i].addEventListener('click', jumpTo, false);
		}

		function jumpTo() {
			window.location = this.getAttribute('link');
		}
	</script>
</body>
</html>