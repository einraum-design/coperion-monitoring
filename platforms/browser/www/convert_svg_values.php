<?php

$absolute_path = "1.14355469 0.761920977 1.14355469 191.439125 8.72372363 191.439125 38.2246094 242.592285 45.5532104 242.592285 74.6523438 191.439125 81.5971633 191.439125 81.5971633 0.761920977";

function regex_callback($matches) {
    static $count = -1;
    $count++;
    $width = 82;
    $height = 247;
    if($count % 2) {
        return $matches[0] / $height;
    } else {
        return $matches[0] / $width;
    }
}

$relative_path = preg_replace_callback('(\d+(\.\d+)?)', 'regex_callback', $absolute_path);
echo $relative_path;
