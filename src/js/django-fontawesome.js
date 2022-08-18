import onReady from "./onReady";
import getContainers from "./containers";

console.log("Hello 1");

onReady(() => {
  getContainers();
});
