// PHP
// $data ='{"device_id":"' . $device_id . '","guid":"' . $guid . '","username":"' . $username . '","}';

var device_id = 4,
    guid = 20,
    username = "hello";

var data = `{"device_id":"${device_id}","guid":"${guid}","username":"${username}","}`;

console.log(data);
