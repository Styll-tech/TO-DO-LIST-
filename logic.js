function addTask() {
        const input = document.getElementById("taskInput");
        const list = document.getElementById("taskList");

        if (input.value === "") return;

        const li = document.createElement("li");
        const span = document.createElement("span");
        const btn = document.createElement("button");

        span.textContent = input.value;
        btn.textContent = "X";

        span.onclick = () => span.classList.toggle("done");
        btn.onclick = () => li.remove();

        li.appendChild(span);
        li.appendChild(btn);
        list.appendChild(li);

        input.value = "";
      }
      function toggleTheme() {
        document.body.classList.toggle("dark");
      }
      const themeBtn = document.getElementById("themeToggle");

      themeBtn.addEventListener("click", () => {
        
        themeBtn.classList.add("animate");

      
        document.body.classList.toggle("dark");

    
        const isDark = document.body.classList.contains("dark");
        themeBtn.textContent = isDark ? "☀️" : "🌙";


        setTimeout(() => {
          themeBtn.classList.remove("animate");
        }, 900);
      });