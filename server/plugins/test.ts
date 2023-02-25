import startScheduler from '~/server/app/scheduler'

export default defineNitroPlugin(() => {
  if(startScheduler) {
    startScheduler()
  }
})
