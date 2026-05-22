<?php
// Prevent direct access
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Method Not Allowed']);
    exit;
}

// Configuration
$to_email = 'reservation@vanmotz.com'; // Replace with your actual email if different
$subject_prefix = 'New Contact Form Submission: ';

// Get JSON input
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Check honeypot (Spam protection)
if (!empty($data['_honey'])) {
    // If honeypot is filled, it's likely a bot. Pretend success but do nothing.
    echo json_encode(['status' => 'success', 'message' => 'Message sent successfully!']);
    exit;
}

// Validate inputs
$name = filter_var($data['name'] ?? '', FILTER_SANITIZE_STRING);
$email = filter_var($data['email'] ?? '', FILTER_SANITIZE_EMAIL);
$message = filter_var($data['message'] ?? '', FILTER_SANITIZE_STRING);

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'All fields are required.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Invalid email format.']);
    exit;
}

// Email Content
$subject = $subject_prefix . $name;
$body = "Name: $name\n";
$body .= "Email: $email\n\n";
$body .= "Message:\n$message\n";

// Headers
$headers = "From: noreply@" . $_SERVER['HTTP_HOST'] . "\r\n";
$headers .= "Reply-To: $email" . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send Email
if (mail($to_email, $subject, $body, $headers)) {
    echo json_encode(['status' => 'success', 'message' => 'Message sent successfully!']);
} else {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Failed to send message. Please try again later.']);
}
?>