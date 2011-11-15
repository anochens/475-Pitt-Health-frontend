<?php


function readFile($fName) {
    $fHandle = fopen($fName, 'r+');
    $DATA = fread($fHandle, filesize($fName));
    fclose($fHandle);
    echo "\"$DATA\"";
}
function writeToFile($fName,$Data) {
    $fHandle = fopen($fName, 'a+');
    fwrite($fHandle, $Data);
    fclose($fHandle);
}
?>