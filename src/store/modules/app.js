import storage from "good-storage";

const state = {
  sidebar: {
    // opened 这里搞成默认值
    // opened: storage.get("sidebarStatus"),
    opened: true,
    withoutAnimation: false,
  },
  device: "desktop",
};

const mutations = {
  TOGGLE_SIDEBAR: (state) => {
    state.sidebar.opened = !state.sidebar.opened;
    state.sidebar.withoutAnimation = false;
    const sidebarStatus = state.sidebar.opened ? 1 : 0;
    storage.set("sidebarStatus", sidebarStatus);
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    storage.set("sidebarStatus", 0);
    state.sidebar.opened = false;
    state.sidebar.withoutAnimation = withoutAnimation;
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device;
  },
};

const actions = {
  toggleSideBar({ commit }) {
    commit("TOGGLE_SIDEBAR");
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit("CLOSE_SIDEBAR", withoutAnimation);
  },
  toggleDevice({ commit }, device) {
    commit("TOGGLE_DEVICE", device);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
