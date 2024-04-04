// @refresh reload
import { StartClient, mount } from "@solidjs/start/client";

import "~/styles/tailwind.css";

mount(() => <StartClient />, document.getElementById("app")!);
