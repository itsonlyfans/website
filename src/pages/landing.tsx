/* eslint-disable @typescript-eslint/ban-ts-comment */
const LandingPage = () => {
  return (
    <div class="text-sm md:text-lg">
      <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" />
      <div class="grid grid-cols-1 gap-5 mx-auto">
        <div
          id="connect-with-your-fans"
          class="flex justify-center items-center h-screen"
        >
          <section class="container mx-auto px-4">
            <div class="flex flex-wrap items-center -mx-4 lg:px-[60px]">
              <div class="w-full md:w-1/2 px-4">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">
                  Connect with your fans by kick-starting your community.
                </h2>
                <p>
                  We provide a platform for you to connect with your fans and
                  build a community around your content. We are a community of
                  creators, for creators. We are here to help you grow your
                  community and build a fanbase that will last.
                  <br />
                  <br />
                  We are currently in beta, so{" "}
                  <a
                    href="/register"
                    class="underline underline-offset-4 decoration-dotted hover:text-zinc-500"
                  >
                    sign up
                  </a>{" "}
                  now to get early access.
                </p>
              </div>
              <div class="w-full md:w-1/2 px-4">
                <div class="flex items-center justify-center lg:h-1/2 lg:w-auto">
                  {/* @ts-ignore - external application, see https://lottiefiles.com/138295-core-apps-corporations */}
                  <lottie-player
                    src="https://assets5.lottiefiles.com/packages/lf20_UlPcA57JIG.json"
                    background="transparent"
                    speed="1"
                    style={{ width: "600px", height: "400px" }}
                    loop
                    autoplay
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
