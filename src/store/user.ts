// 用户信息的存储
export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: {
      name: ''
    }
  }),
  getters: {},
  actions: {
    updateUserInfo(data: any) {
      this.userInfo = data
    }
  }
})
