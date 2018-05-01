<!DOCTYPE html>
<head>
<script type="text/javascript" src="jquery.js"></script>
<script type="text/javascript">
var angka = 1

$(document).ready(function(){
	$(".buttonkiri").click(function(){
	
	angka--;
	if(angka==0)
		angka=6;
		$(".Gambar").attr("src",../Image/JavascriptPictures/ToradoraPictures/angka+".jpg");
});
	$(".buttonkanan").click(function(){
	angka++;
	if(angka==7)
		angka=1;
		$(".Gambar").attr("src",../Image/JavascriptPictures/ToradoraPictures/angka+".jpg");
});
});

</script>
</head>
<body>
</body>
</html>