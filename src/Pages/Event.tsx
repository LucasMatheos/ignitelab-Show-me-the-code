import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";
import ShowMeTheCode from "../assets/smtc.jpg";
import { useEffect, useState } from "react";

export function Event() {
  const { slug } = useParams<{ slug: string }>();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 1025) {
      setIsMobile(true);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1 ">
        {slug ? (
          <Video lessonSlug={slug} />
        ) : (
          <div className="flex-1">
            <div className="bg-black flex flex-col justify-center h-screen items-center justify-center">
              <img
                src={ShowMeTheCode}
                alt="Show Me The Code Image"
                className="max-w-[90vw] max-h-[60vh]"
              />
            </div>
          </div>
        )}

        {!isMobile && <Sidebar />}
      </main>
    </div>
  );
}
