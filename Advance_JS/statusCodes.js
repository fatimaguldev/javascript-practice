// An HTTP Status Code is a 3-digit number sent by the server to tell your browser or API testing tool how the request went.


// 2xx Success Codes
// 200 OK: The universal success code. Your data was fetched or updated successfully.
// 201 Created: A successful POST request. A new item was successfully generated in the database.




// 3xx Redirection Codes
// 301 Moved Permanently: The URL you called has permanently shifted to a new location.
// 304 Not Modified: Tells the browser to load cached data because nothing has changed on the server(saves internet bandwidth).




// 4xx Client Error Codes(Your Fault)
// 400 Bad Request: The server didn't understand your request (e.g., your JSON format has a typo or missing brackets).
// 401 Unauthorized: You aren't logged in, or you forgot to pass your API secret token / key.
// 403 Forbidden: The server knows who you are, but you do not have clearance / admin access to open this data.
// 404 Not Found: The requested page or resource doesn't exist. You mistyped the endpoint URL.
// 429 Too Many Requests: You are spamming the API too fast. You hit their rate limit.




// 5xx Server Error Codes (The Backend's Fault) 500 
// Internal Server Error: The backend crashed or threw an unhandled crash error in its code.
// 503 Service Unavailable: The server is temporarily down for maintenance or crashing from too much web traffic.