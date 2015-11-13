<html>
<head>
	<title>GoldstarCine Apps</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="default.css">
</head>
<body>
	<div>
		<div style="margin:12px 0 12px 12px">GOLDSTAR APPS FOLDER</div>
		<?php
			foreach ( glob ('./*', GLOB_ONLYDIR) as $dir )
			{
				if ( file_exists ($dir.'/package.json') )
				{
					$package = json_decode ( file_get_contents ($dir.'/package.json'), true );
					echo '
						<div class="menu-item">
							<div style="margin-right:8px;width:32px;height:32px;background-image:url('.basename($dir).'/img/login-logo.png);background-size:cover"></div>
							<div>
								<div class="item" link="/'.basename ($dir).'">' . basename ($dir) . '</div>
								<div>' . $package['description'] . '</div>
							</div>
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