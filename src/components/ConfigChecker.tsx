import { useState, useEffect } from "react";

export default function ConfigChecker() {
  const [status, setStatus] = useState<any>(null);

  useEffect(() => {
    fetch("/api/newsletter/status")
      .then(res => res.json())
      .then(data => {
        setStatus(data);
        if (!data.configured) {
          console.warn("Mailchimp is NOT configured in Settings.");
        } else {
          console.log("Mailchimp is configured correctly.");
        }
      })
      .catch(err => console.error("Config check failed:", err));
  }, []);

  if (!status) return null;

  return (
    <div className="text-[8px] text-white/5 pointer-events-none">
      MC: {status.configured ? "OK" : "MISSING"}
    </div>
  );
}
