<?php
    $weather = "";
    $error = "";
    if(array_key_exists('city', $_GET)) {
        $city = str_replace(' ', '', $_GET['city']);
        $file_headers = @get_headers("https://www.weather-forecast.com/locations/".$city."/forecasts/latest");
        if($file_headers[0] == 'HTTP/1.1 404 Not Found') {
            $error = "That city could not be found.";
        } else {
        $forecastPage = file_get_contents("https://www.weather-forecast.com/locations/".$city."/forecasts/latest");
            $pageArray = explode( 'Weather Today</h2> (1&ndash;3 days)</div><p class="b-forecast__table-description-content"><span class="phrase">', $forecastPage );
            if (sizeof($pageArray) > 1) {
                $secondPageArray = explode( '</span></p></td>', $pageArray[ 1 ] );
                if (sizeof($secondPageArray) > 1) {
                    $weather = $secondPageArray[0];
                } else {
                    $error = "That city could not be found.";
                }
            } else {
                $error = "That city could not be found.";
            }
        }
    }
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"
        crossorigin="anonymous"></script>
    <title>Weather Scrapper</title>
</head>

<body>
    <div class="container">
        <h1>What's the weather?</h1>
        <form action="POST" method="post">
            <label for="city" class="form-label">Enter the name of a city:</label>
            <div class="input-group mb-3">
            <input type="text" class="form-control" id="city" name="city" placeholder="e.g. London, Tokyo" value="<?php 
                    if(array_key_exists('city', $_GET)){
                        echo $_GET['city']; 
                    }?>">
                <button class="btn btn-success" type="submit" id="button-addon2">Check</button>
            </div>
        </form>
        <div id=weather><?php 
                if ($weather){
                    echo '<div class="alert alert-success" role="alert">'.$weather.'</div>';
                } else if ($error){
                    echo '<div class="alert alert-danger" role="alert">'.$error.'</div>';
                }
        ?></div>
    </div>
</body>

</html>