import { useScheduler } from "#scheduler"

export default defineNitroPlugin(() => {
  startScheduler()
})

function startScheduler() {
  const scheduler = useScheduler();

  scheduler.run(() => {
    console.log("cool beans! I run once every second! 😀");
  }).everySecond();

  // create as many tasks as you want here
}
