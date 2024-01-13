<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();
// var_dump($conn);

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "POST":
        $user = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO contact (id, firstname, lastname, email, phonenumber, message) VALUES(Null, :firstname , :lastname , :email, :phonenumber, :message)";
        $stmt = $conn->prepare($sql);
        $created_at = date('Y-m-d');
        $stmt->bindParam('firstname', $user->firstname);
        $stmt->bindParam(':lastname', $user->lastname);
        $stmt->bindParam(':email', $user->email);
        $stmt->bindParam(':phonenumber', $user->phonenumber);
        $stmt->bindParam(':message', $user->message);
        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to created record'];
        }
        echo json_encode($response);
        break;
    
        case "GET":
            // Ambil semua data dari tabel
            $sql = "SELECT * FROM contact";
            $stmt = $conn->query($sql);
    
            // Fetch data ke dalam array
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
            // Kirim data sebagai respons
            echo json_encode(['status' => 1, 'data' => $data]);
            break;
        
}