<?php
echo $_POST["primarykey"]." ";
$json = file_get_contents("data.json");
$jsonIterator = json_decode($json,true);
for($counter=0; $counter<=count($jsonIterator); $counter += 1){
	if($jsonIterator[$counter]['data']){
		if($jsonIterator[$counter]['pk'] == $_POST["primarykey"]){
			echo $jsonIterator[$counter]['data']."\n";
			$jsonIterator[$counter]['data'] = $_POST["testingTextArea"];
			echo $jsonIterator[$counter]['data']."\n";
		}
	}
}
$filename = 'data.json';
$fp = fopen($filename, 'w');
fwrite($fp, json_encode($jsonIterator));
fclose($fp);

?>
