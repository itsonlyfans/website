import { createEffect, createSignal } from "solid-js";
import { IoPaperPlaneOutline } from "solid-icons/io";
import { FiMoon, FiSun } from "solid-icons/fi";

export const Navigation = () => {
  const [isDarkMode, setIsDarkMode] = createSignal(true);
  const [activeTab, setActiveTab] = createSignal("home");

  createEffect(() => {
    if (isDarkMode()) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");

    const tabs = document.querySelectorAll("nav a");
    tabs.forEach((tab) => {
      if (tab.getAttribute("datatype") === activeTab()) {
        tab.classList.add("border-b-2", "border-zinc-500");
      } else {
        tab.classList.remove("border-b-2", "border-zinc-500");
      }
    });
  });

  return (
    <header class="bg-[#ebebeb] dark:bg-[#141414] text-white py-2 px-6">
      <div class="flex items-center justify-between max-w-screen-xl mx-auto left-0">
        <div class="flex items-center">
          <form class="flex items-center ml-auto" action="#" method="get">
            <div class="relative text-zinc-700 dark:text-zinc-50">
              <input
                class="font-[600] rounded-full border-2 border-[#e3e3e3] dark:border-zinc-800 bg-gray-100 dark:bg-zinc-800 px-4 py-[.16rem] pr-20 w-80 text-base sm:text-sm"
                type="text"
                placeholder="Search for..."
                name="search"
              />
              <div class="absolute inset-y-0 right-0 flex items-center pr-0">
                <div class="w-px h-4 bg-gray-300 dark:bg-zinc-500 mr-4" />
                <button
                  class="hover:text-gray-500 focus:outline-none pr-5"
                  type="submit"
                >
                  <IoPaperPlaneOutline class="h-5 w-5" />
                </button>
              </div>
            </div>
          </form>
          <div class="hidden sm:block pl-4">
            <button
              class="flex items-center space-x-2"
              onClick={() => setIsDarkMode(!isDarkMode())}
            >
              {isDarkMode() ? (
                <FiSun class="h-5 w-5" />
              ) : (
                <FiMoon class="h-5 w-5" color="#3f3f46" />
              )}
            </button>
          </div>
          <div class="ml-5 hidden sm:block border-l-2 border-zinc-700 pl-4 text-zinc-800 dark:text-gray-300">
            <nav class="flex space-x-4 text-sm font-[600]">
              <a
                href="#"
                class="hover:text-zinc-700 hover:border-zinc-700 dark:hover:text-gray-100 dark:hover:border-gray-100"
                onClick={() => setActiveTab("blog")}
                datatype="blog"
              >
                Our blog
              </a>
              <a
                href="#"
                class="hover:text-zinc-700 hover:border-zinc-700 dark:hover:text-gray-100 dark:hover:border-gray-100"
                onClick={() => setActiveTab("docs")}
                datatype="docs"
              >
                Documentation
              </a>
              <a
                href="#"
                class="hover:text-zinc-700 hover:border-zinc-700 dark:hover:text-gray-100 dark:hover:border-gray-100"
                onClick={() => setActiveTab("about")}
                datatype="about"
              >
                About us
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
