/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Title } from "@solidjs/meta";
import { createEffect, onCleanup } from "solid-js";

const NotFound = () => {
  let notFoundRef: HTMLDivElement;

  createEffect(() => {
    setTimeout(() => {
      if (notFoundRef) {
        notFoundRef.scrollIntoView();
      }
    }, 100);
    onCleanup(() => ({}));
  });

  return (
    <div
      class="text-center h-screen flex items-center justify-center"
      ref={(el: HTMLDivElement) => (notFoundRef = el)}
    >
      <Title>Oh no! Page not found ∙ itsjust.fans</Title>
      <div class="w-96 mx-auto">
        {/* a center div for content */}
        <div class="flex items-center justify-center">
          {/* @ts-ignore - external application, see https://lottiefiles.com/119776-table-fan-404-error */}
          <lottie-player
            src="https://assets5.lottiefiles.com/packages/lf20_0hj4Khn1at.json"
            background="transparent"
            speed="1"
            style={{ width: "400px", height: "400px" }}
            loop
            autoplay
          />
        </div>
        <p class="text-sm text-center text-gray-500 dark:text-gray-200">
          Uh-oh! It seems like this page has flown away faster than a
          high-powered air fan. Our team is doing everything we can to catch it
          and bring it back. In the meantime, sit back, relax, and enjoy the
          refreshing breeze from your trusty air fan!
        </p>
      </div>
    </div>
  );
};

export default NotFound;
