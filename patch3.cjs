const fs = require('fs');
const file = '/app/applet/src/pages/Home.tsx';
let content = fs.readFileSync(file, 'utf8');

const target = `      const data = await response.json();
      if (data.success) {
        setPlanRequested(true);
        form.reset();
      } else {
        setEmailErrorPlan("Something went wrong. Please try again.");`;

const replacement = `      const data = await response.json();
      if (data.success) {
        // Sync to Mailchimp
        fetch("/api/connect/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
            email,
            firstName: formData.get("name")?.toString().split(" ")[0] || ""
          })
        }).catch(err => console.error("Mailchimp Sync Error:", err));

        setPlanRequested(true);
        form.reset();
      } else {
        setEmailErrorPlan("Something went wrong. Please try again.");`;

content = content.replace(target, replacement);
fs.writeFileSync(file, content);
