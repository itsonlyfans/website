import { FiCode } from "solid-icons/fi";
import { AiFillGithub, AiFillHeart } from "solid-icons/ai";
import { Link } from "@solidjs/router";

export const Footer = () => {
  return (
    <footer class="bg-[#ebebeb] dark:bg-[#141414] text-white">
      <div class="container mx-auto flex justify-center">
        <div class="py-5">
          <div class="flex gap-2 justify-center text-sm text-zinc-700 dark:text-zinc-600">
            <FiCode size={20} />
            <span>with</span>
            <AiFillHeart size={20} />
            <span>by</span>
            <Link href="https://github.com/itsonlyfans" target="_blank">
              <AiFillGithub size={20} />
            </Link>
            <span>& friends</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
