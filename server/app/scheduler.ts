import { useScheduler } from "#scheduler";

export default function startScheduler() {
  const scheduler = useScheduler();

  scheduler.start();

  scheduler.run(() => {
    console.log("this should run every 5 seconds, cool");
  }).everySeconds(5);

  // create as many jobs as you want here
}
