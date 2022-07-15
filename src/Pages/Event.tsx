import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";
import ShowMeTheCode from "../assets/smtc.jpg";

export function Event() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1 ">
        {slug ? (
          <Video lessonSlug={slug} />
        ) : (
          <div className="flex-1">
            <div className="bg-black flex justify-center h-screen">
              <img src={ShowMeTheCode} alt="Show Me The Code Image" />
            </div>
          </div>
        )}
        <Sidebar />
      </main>
    </div>
  );
}
