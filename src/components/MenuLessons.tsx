import { Menu, Transition } from "@headlessui/react";
import { Sidebar } from "./Sidebar";

import { List, X } from "phosphor-react";
import { Fragment } from "react";
import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lessons";

export function MenuLessons() {
  const { data } = useGetLessonsQuery();
  return (
    <Menu as="div" className="absolute top-1/4 right-0 lg:hidden z-10 ">
      {({ open }) => (
        <>
          <Menu.Button className="flex items-center gap-2 ml-auto mr-3">
            Aulas {open ? <X size={32}/>  : <List size={32} />}
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition   duration-300"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-300 scale-100"
            leave="transition  duration-300"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items as="div" className="w-screen flex justify-end mt-6">
              <div className="w-full bg-gray-700 p-6 md:border-l border-gray-600 md:w-[348px]">
                <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
                  Show me the code
                </span>
                <Menu.Item>
                  <div className="flex flex-col gap-8">
                    {data?.lessons.map((lesson) => {
                      return (
                        <Lesson
                          key={lesson.id}
                          title={lesson.title}
                          slug={lesson.slug}
                          availableAt={new Date(lesson.availableAt)}
                          type={lesson.lessonType}
                        />
                      );
                    })}
                  </div>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
