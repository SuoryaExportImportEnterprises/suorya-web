import { useEffect } from "react";

export function GTranslateWidget() {
  useEffect(() => {
    if (!document.getElementById("gtranslate_wrapper")) {
      const div = document.createElement("div");
      div.id = "gtranslate_wrapper";
      div.style.position = "fixed";
      div.style.left = "20px";
      div.style.bottom = "20px";
      div.style.zIndex = "9999";
      document.body.appendChild(div);
    }

    (window as any).gtranslateSettings = {
      default_language: "en",
      native_language_names: false,
      languages: [
        "en", // English
        "ar", // Arabic
        "ja", // Japanese
        "nl", // Dutch
        "fr", // French
        "de", // German
        "it", // Italian
        "pt", // Portuguese
        "ru", // Russian
        "es", // Spanish
      ],
      wrapper_selector: "#gtranslate_wrapper",
      switcher_horizontal_position: "left",
      switcher_vertical_position: "bottom",
      alt_flags: true,
      flag_style: "3d",
      switcher_open_direction: "up",
      switcher_background_color: "#ffffff",
      switcher_text_color: "#000000",
      switcher_hover_color: "#f4f4f4",
      switcher_border_radius: "10px",
      switcher_font_size: "14px",
    };

    const existing = document.querySelector('script[src*="cdn.gtranslate.net"]');
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://cdn.gtranslate.net/widgets/latest/dwf.js";
      script.defer = true;
      script.onload = () => {
        console.log("✅ GTranslate script loaded");
        (window as any).gtranslate = (window as any).gtranslate || {};
      };
      document.body.appendChild(script);
    }
  }, []);

  return null;
}
