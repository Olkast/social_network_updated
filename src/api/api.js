import axios from "axios";
import getCoockie from "../helpers/getCoockie";


const instance = axios.create({
  baseURL: "http://localhost:7799/"
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data.data)
  },

  authMe()  {
    const token = getCoockie("token");
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return instance.get("auth/me").then(response => response)
  },

  followId(user) {
    return instance.delete(`follow/${user}`).then(response => response.data)
  },

  unFollowId(user) {
    return instance.post(`follow/${user}`).then(response => response.data)
  },

  login(login, password) {
    return instance.post("auth/login", {login, password}).then(response => response.data)
  },

  logout() {
    const token = getCoockie("token");
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return instance.delete("auth/login").then(response => response.data)
  },

  idProfile(userId) {
    return profileAPI.idProfile(userId);
  }
}

export const profileAPI = {
  idProfile(userId) {
    return instance.get("profile/" + userId).then(response => response.data.data)
  },

  getStatus(userId) {
    return instance.get("profile/status/" + userId)
  },

  updateStatus(status) {
    return instance.put("profile/status",  {status: status})
  }
}