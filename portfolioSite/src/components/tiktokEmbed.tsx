import { useEffect } from "react";

export default function TikTokEmbed({ url }: { url: string }) {
  useEffect(() => {
    const existingScript = document.querySelector("script[src='https://www.tiktok.com/embed.js']");
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      if (window.tiktokEmbedLoad) window.tiktokEmbedLoad();
    }
  }, []);

  const videoId = url.split("/video/")[1];
  return (
    <blockquote
      className="tiktok-embed"
      cite={url}
      data-video-id={videoId}
      style={{ width: "350px" }}
    >
      <section></section>
    </blockquote>
  );
}
