/* @refresh reload */
import { Router } from "@solidjs/router";
import { render } from "solid-js/web";
import { App } from "./App";
import "./assets/css/tailwind.css";

import { Meta, MetaProvider, Title } from "@solidjs/meta";

render(
  () => (
    <MetaProvider>
      <Title>Welcome to itsonly.fans</Title>
      <Meta
        name="description"
        content="We provide a platform for you to connect with your fans and build a community around your content."
      />
      <Router>
        <App />
      </Router>
    </MetaProvider>
  ),
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  document.getElementById("root")!
);
