import { Routes, Route } from "react-router-dom";
import { MenuLessons } from "./components/MenuLessons";
import { Event } from "./Pages/Event";
import { Subscribe } from "./Pages/Subscribe";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
    </Routes>
  );
}
