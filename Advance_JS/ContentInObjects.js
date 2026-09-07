
        const p1 = document.getElementById("para1");
        const p2 = document.getElementById("para2");

        // 3. Change plain text (Safest for user input)
        p1.innerText = "Hi, I am Peter Parker.";

        // 4. Change content with HTML tags
        p2.innerHTML = "Hi, I am <strong>Spider-Man</strong>!";